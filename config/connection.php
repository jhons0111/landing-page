<?php

class connection {
    
    private $host = "localhost";
    private $db_name = "restaurant";
    private $username = "root";
    private $password = "";
    private $conn;

    public function connect(){

        try{

            // Dtart PDO connection
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);

        } catch(PDOException $e){

            echo $e->getMessage();
        }

        return $this->conn;
    }
}