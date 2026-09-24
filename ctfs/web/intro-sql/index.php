<?php
// intro-sqli - index.php
ini_set('display_errors', 1);
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>INTRO SQLI // LOGIN</title>
    <style>
        body { font-family: 'Courier New', monospace; background: #0a0a0a; color: #e8e8e8; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        .box { background: #111; border: 1px solid #333; border-left: 4px solid #c9a227; padding: 30px 36px; width: 300px; }
        h1 { font-size: 15px; letter-spacing: 3px; color: #c9a227; margin-top: 0; }
        label { display: block; font-size: 11px; letter-spacing: 2px; color: #999; margin: 14px 0 4px; }
        input { width: 100%; background: #0a0a0a; border: 1px solid #333; color: #e8e8e8; padding: 8px; font-family: inherit; box-sizing: border-box; }
        button { margin-top: 18px; width: 100%; background: rgba(201,162,39,0.15); border: 1px solid #c9a227; color: #c9a227; padding: 9px; font-family: inherit; letter-spacing: 2px; cursor: pointer; }
        button:hover { background: rgba(201,162,39,0.3); }
        .hint { margin-top: 14px; font-size: 10px; color: #555; letter-spacing: 1px; }
    </style>
</head>
<body>
    <div class="box">
        <h1>// INTRO SQLI //</h1>
        <form action="login.php" method="post">
            <label>USERNAME</label>
            <input type="text" name="username">
            <label>PASSWORD</label>
            <input type="password" name="password">
            <button type="submit">LOGIN</button>
        </form>
        <div class="hint">chapeu de palha hacker club // web_001</div>
    </div>
</body>
</html>
