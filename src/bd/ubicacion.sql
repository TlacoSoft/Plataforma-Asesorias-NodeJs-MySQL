-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-07-2022 a las 15:38:22
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `asesorias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion`
--

CREATE TABLE `ubicacion` (
  `idUbicacion` int(11) NOT NULL,
  `calle` varchar(255) NOT NULL,
  `colonia` varchar(255) NOT NULL,
  `n_exterior` int(11) NOT NULL,
  `n_interior` int(11) NOT NULL,
  `codigo_postal` int(11) NOT NULL,
  `pais` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `ciudad` varchar(255) NOT NULL,
  `referencias` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ubicacion`
--

INSERT INTO `ubicacion` (`idUbicacion`, `calle`, `colonia`, `n_exterior`, `n_interior`, `codigo_postal`, `pais`, `estado`, `ciudad`, `referencias`) VALUES
(1, 'monte alban', 'san martin mexicapam', 3, 403, 68140, 'México', 'Oaxaca', 'Oaxaca de Juárez', 'Enfrente de un verificentro de autos '),
(2, 'guerrero', 'segunda sección', 1, 0, 71256, 'México', 'Oaxaca', 'Oaxaca de Juárez', 'En la esquina hay un six ');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  ADD PRIMARY KEY (`idUbicacion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  MODIFY `idUbicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
