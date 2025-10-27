<?php

abstract class baseModel {

    protected $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    // Mandatory method
    abstract public function getAll();
}

