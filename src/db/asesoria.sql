-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-07-2022 a las 16:10:59
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
-- Estructura de tabla para la tabla `asesoria`
--

CREATE TABLE `asesoria` (
  `idAsesoria` int(11) NOT NULL,
  `tema` varchar(255) NOT NULL,
  `encargado` int(11) DEFAULT NULL,
  `alumno` int(11) DEFAULT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `modalidad` varchar(255) NOT NULL,
  `estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `asesoria`
--

INSERT INTO `asesoria` (`idAsesoria`, `tema`, `encargado`, `alumno`, `fecha`, `hora`, `modalidad`, `estatus`) VALUES
(1, 'Desarrollo web', 1, 1, '2022-06-08', '08:00:00', 'Presencial', 2),
(2, 'Matemáticas ', 1, 1, '2022-07-13', '10:00:00', 'En línea', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asesoria`
--
ALTER TABLE `asesoria`
  ADD PRIMARY KEY (`idAsesoria`),
  ADD KEY `alumno` (`alumno`),
  ADD KEY `encargado` (`encargado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asesoria`
--
ALTER TABLE `asesoria`
  MODIFY `idAsesoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asesoria`
--
ALTER TABLE `asesoria`
  ADD CONSTRAINT `asesoria_ibfk_1` FOREIGN KEY (`encargado`) REFERENCES `usuarios` (`idUsuario`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `asesoria_ibfk_2` FOREIGN KEY (`alumno`) REFERENCES `usuarios` (`idUsuario`) ON DELETE SET NULL ON UPDATE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
