# 🍣 Restaurant Web

Proyecto de una **página web en PHP, HTML y JavaScript** para un restaurante.  

---

## ⚙️ Requisitos

- PHP 7.4 o superior  
- MySQL / MariaDB  
- Servidor local: **WAMP (Windows)** o **LAMP (Linux)**
- DB restaurant.sql

---

## 🪜 Instalación paso a paso

### 1. Clonar o descargar el repositorio

    git clone https://github.com/tu-usuario/restaurant-web.git

### 2. Mover el proyecto al directorio del servidor

    En WAMP (Windows):
    Copiá la carpeta restaurant-web a:

    C:\wamp64\www\restaurant


    En LAMP (Linux):
    Copiá la carpeta a:

    /var/www/html/restaurant

### 3. Crear la base de datos

    Abrí phpMyAdmin o la consola de MySQL y ejecutá:

    CREATE DATABASE restaurant;

### 4. Importar restaurant.sql

    Con phpMyAdmin:

    Seleccioná la base de datos restaurant.

    Pestaña Importar → elegir restaurant.sql → Ejecutar.

### 5. Configurar la conexión de la aplicación

    Abrí el archivo de configuración (en este caso connection.php) y actualizá las credenciales si es necesario:

    <?php
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $dbname     = "restaurant";
    ?>

### 6. Abrir en el navegador

    Visitar:

    http://localhost/restaurant/