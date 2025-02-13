<?php
$host = 'postgres';
$dbname = 'meu_banco';
$username = 'usuario';
$password = 'senha';

try {
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    die("Erro na conexão: " . $e->getMessage());
}
