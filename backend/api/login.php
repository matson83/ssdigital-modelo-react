<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    echo json_encode(["message" => "Dados inválidos"]);
    exit;
}

$email = $data->email;
$password = $data->password;

if (empty($email) || empty($password)) {
    echo json_encode(["message" => "Email e senha são obrigatórios"]);
    exit;
}

// Verifique se o email existe
$query = "SELECT * FROM users WHERE email = :email";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':email', $email);
$stmt->execute();

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    echo json_encode(["message" => "Email não encontrado"]);
    exit;
}

if (password_verify($password, $user['password'])) {
    echo json_encode(["message" => "Login bem-sucedido", "user" => $user]);
} else {
    echo json_encode(["message" => "Senha incorreta"]);
}
