// intro-nosqli - server.js
// Banco NoSQL EMBUTIDO de verdade (NeDB): mesma API de query do MongoDB
// ($ne, $gt, $gte, $lt, $lte, $regex, $in...), processada pelo motor real
// da lib, igual o intro-sqli usa o SQLite como engine SQL embutido.
const express = require('express');
const Datastore = require('@seald-io/nedb');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = new Datastore(); // em memoria, populado no boot pelo seed abaixo

db.insert([
  { username: 'admin', password: 'admin_password' },
  { username: 'guest', password: 'guest123' }
]);

// --- ROTA VULNERAVEL ---
// username/password do body chegam DIRETO na query do NeDB, sem checar o tipo.
// Como o body e JSON, dá pra mandar um objeto ({"$ne": null}) no lugar de uma
// string, e o motor de query interpreta isso como operador, nao como valor.
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.findOne({ username, password }, (err, user) => {
    if (err) {
      return res.status(500).send('Erro interno.');
    }
    if (!user) {
      return res.status(401).send('Invalid credentials.');
    }
    if (user.username !== 'admin') {
      return res.send(`Login ok, mas voce nao e admin.`);
    }
    const flag = process.env.CHAPEU_FLAG || process.env.FLAG || 'flag{nosql_injection_success}';
    return res.send(`Flag: ${flag}`);
  });
});

app.listen(80, () => console.log('intro-nosqli rodando na porta 80'));
