<?php
require '../middleware/auth.php';
require '../config/database.php';

echo json_encode(["message" => "Você está autenticado!", "user_id" => $userId]);
