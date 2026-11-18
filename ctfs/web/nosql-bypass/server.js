// intro-nosqli - server.js
// VULNERAVEL: NoSQL injection via operadores de query no body JSON.
const http = require('http');
const fs = require('fs');
const path = require('path');

const USERS = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf8'));

// --- Emulador mínimo do matching de query do MongoDB ---
// Reproduz o mesmo comportamento (e a mesma falha) de um driver real:
// se o valor do campo for um objeto, ele é tratado como operadores
// ($ne, $eq, $gt, $gte, $lt, $lte, $regex) em vez de comparado como string.
function matchesCondition(fieldValue, condition) {
  if (condition !== null && typeof condition === 'object' && !Array.isArray(condition)) {
    return Object.entries(condition).every(([op, val]) => {
      switch (op) {
        case '$ne':    return fieldValue !== val;
        case '$eq':    return fieldValue === val;
        case '$gt':    return fieldValue > val;
        case '$gte':   return fieldValue >= val;
        case '$lt':    return fieldValue < val;
        case '$lte':   return fieldValue <= val;
        case '$regex': return new RegExp(val).test(fieldValue);
        default:       return false;
      }
    });
  }
  // comparação "normal" (string == string), como seria o caminho não-vulnerável
  return fieldValue === condition;
}

function findOne(users, query) {
  return users.find(user =>
    Object.entries(query).every(([field, cond]) => matchesCondition(user[field], cond))
  );
}

// --- Rota de login (equivalente ao login.php vulnerável) ---
function handleLogin(body, res) {
  let data;
  try {
    data = JSON.parse(body);
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    return res.end('JSON invalido.');
  }

  const username = data.username ?? '';
  const password = data.password ?? '';

  // username e password vao DIRETO pra query, sem sanitizacao.
  // Se vierem como objeto ({"$ne": null}, {"$gt": ""}, {"$regex": ".*"}),
  // viram operadores de query em vez de valores literais.
  const user = findOne(USERS, { username, password });

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  if (user) {
    const flag = process.env.CHAPEU_FLAG || process.env.FLAG || 'sem-chave';
    res.end(user.username === 'admin' ? `Flag: ${flag}` : `Login ok, mas voce nao e admin.`);
  } else {
    res.end('Invalid credentials.');
  }
}

const INDEX_HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>INTRO NOSQLI // LOGIN</title>
    <style>
        body { font-family: 'Courier New', monospace; background: #0a0a0a; color: #e8e8e8; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        .box { background: #111; border: 1px solid #333; border-left: 4px solid #c9a227; padding: 30px 36px; width: 320px; }
        h1 { font-size: 15px; letter-spacing: 3px; color: #c9a227; margin-top: 0; }
        label { display: block; font-size: 11px; letter-spacing: 2px; color: #999; margin: 14px 0 4px; }
        input { width: 100%; background: #0a0a0a; border: 1px solid #333; color: #e8e8e8; padding: 8px; font-family: inherit; box-sizing: border-box; }
        button { margin-top: 18px; width: 100%; background: rgba(201,162,39,0.15); border: 1px solid #c9a227; color: #c9a227; padding: 9px; font-family: inherit; letter-spacing: 2px; cursor: pointer; }
        button:hover { background: rgba(201,162,39,0.3); }
        .hint { margin-top: 14px; font-size: 10px; color: #555; letter-spacing: 1px; }
        pre#out { white-space: pre-wrap; color: #0f0; font-size: 11px; margin-top: 10px; min-height: 14px; }
    </style>
</head>
<body>
    <div class="box">
        <h1>// INTRO NOSQLI //</h1>
        <label>USERNAME</label>
        <input type="text" id="username">
        <label>PASSWORD</label>
        <input type="password" id="password">
        <button onclick="doLogin()">LOGIN</button>
        <pre id="out"></pre>
        <div class="hint">chapeu de palha hacker club // web_002</div>
    </div>
    <script>
        async function doLogin() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const res = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            document.getElementById('out').textContent = await res.text();
        }
    </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(INDEX_HTML);
  }

  if (req.method === 'POST' && req.url === '/login') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => handleLogin(body, res));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

server.listen(80, () => console.log('intro-nosqli rodando na porta 80'));
