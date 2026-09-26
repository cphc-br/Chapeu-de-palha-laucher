<?php
// intro-sqli - login.php (VULNERAVEL: SQL injection)
ini_set('display_errors', 1);
error_reporting(E_ALL);

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

$db = new SQLite3('/var/www/html/database.db');
$query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
$result = $db->query($query);

if ($result && $result->fetchArray()) {
    // chave injetada pelo launcher (-e CHAPEU_FLAG / -e FLAG) com fallback estatico
    $flag = getenv('CHAPEU_FLAG') ?: (getenv('FLAG') ?: 'flag{web_exploitation_success}');
    echo "Flag: " . $flag;
} else {
    echo "Invalid credentials.";
}
?>
