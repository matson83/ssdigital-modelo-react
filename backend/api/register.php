<?php
// Permite o acesso a partir de qualquer origem
header("Access-Control-Allow-Origin: *");
// Permite os métodos POST, GET, OPTIONS, DELETE
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE");
// Permite que o cabeçalho Content-Type seja usado
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Se a requisição for do tipo OPTIONS (preflight request), o servidor deve apenas retornar os cabeçalhos acima
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

// Verifique os dados recebidos
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

// Verifique se o email já existe
$query = "SELECT * FROM users WHERE email = :email";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':email', $email);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    echo json_encode(["message" => "Email já cadastrado"]);
    exit;
}

$password_hashed = password_hash($password, PASSWORD_DEFAULT); // Criptografando a senha

$query = "INSERT INTO users (email, password) VALUES (:email, :password)";
$stmt = $pdo->prepare($query);

$stmt->bindParam(':email', $email);
$stmt->bindParam(':password', $password_hashed);

if ($stmt->execute()) {
    echo json_encode(["message" => "Usuário cadastrado com sucesso"]);
} else {
    echo json_encode(["message" => "Erro ao cadastrar o usuário"]);
}
