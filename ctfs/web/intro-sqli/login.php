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
    echo "Flag: flag{web_exploitation_success}";
} else {
    echo "Invalid credentials.";
}
?>
