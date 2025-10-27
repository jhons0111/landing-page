-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 27-10-2025 a las 22:46:39
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurant`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(160) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `image` varchar(600) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`id`, `name`, `description`, `price`, `image`) VALUES
(1, 'Sushi mix', 'Selección variada de migiris y makis', '20USD', 'images/sushi1.jpeg'),
(2, 'Dragon Roll', 'Un rollo espectacular relleno de camarón tempura, pepino y aguacate, cubierto con finas láminas de anguila y salsa dulce unagi.', '22USD', 'images/sushi1.jpeg'),
(3, 'Sashimi Deluxe', 'Selección deluxe', '25USD', 'images/sushi2.jpeg'),
(4, 'Spicy Tuna Roll', 'Clásico rollo con atún fresco picado mezclado con mayonesa y salsa picante (normalmente Sriracha). Se envuelve en arroz y alga nori.', '28USD', 'images/sushi2.jpeg'),
(5, 'Sushi Premium', 'Selección pemium\r\n\r\n', '30USD', 'images/sushi3.jpeg'),
(6, 'Philadelphia Roll', 'Rollo de sushi que combina salmón ahumado, queso crema y aguacate. A veces incluye pepino para darle frescura.\n', '35USD', 'images/sushi3.jpeg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
