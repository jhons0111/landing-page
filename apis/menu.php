<?php

header("Content-Type: application/json; charset=UTF-8");
include_once "../config/connection.php";
include_once "../models/menu.php";

// Start connection 
$database = new connection();
$db = $database->connect();

// Get menu
$plate = new menu($db);
$data = $plate->getAll();
$num = $data->rowCount();

if ($num > 0) {
    $plates = [];
    while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
        $plates[] = $row;
    }

    // Return all menu data
    echo json_encode(["data" => $plates]);
} else {

    // Return this, if the menu is empty
    echo json_encode(["message" => "No hay platos."]);
}
?>
