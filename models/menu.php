<?php

require_once "baseModel.php";

class menu extends baseModel {

    private $table = "menu";

    // Implements mandatory method and return all menu data
    public function getAll() {

        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}
