# Plataforma de Asesorias en NodeJS con MySQL

![descripcion](Nodejs.jpeg)

Proyecto desarrollado para la materia de Desarrollo Web Integral.

Consiste en la creación de una plataforma web que impartira asesorias de diferentes materias, niveles, temas,. etc.

El equipo Tlacosoft lo esta desarrollando con el framework Angular para el frontend, para  el backend usaremos
NodeJs con MySQL y ExpressJs.

![descripcion](logosvisual.jpeg)

Se desplegara en Microsoft Azure, usando App Services para la API y  App Web Static para la plataforma.

## Direcciones URL donde se encuentran alojados los servicios:

[Plataforma de Asesorias](https://lively-coast-09a5e8910.1.azurestaticapps.net/)

[API](https://asesoriasnode.azurewebsites.net/)

## Tabla Profesores ##

Esta tabla contiene campos donde se mostrara la 
información del perfil del profesor.

<table>
<tr>
<td>IdProfesor</td>
<td>IdAlumno</td>
<td>edad</td>
<td>sexo</td>
<td>titulo</td>
<td>cedula_profesional</td>
<td>grado_estudio</td>
<td>certificaciones</td>
</tr>
<tbody>
<tr>
<td>2</td>
<td>4</td>
<td>18</td>
<td>Femenino</td>
<td>Ingenieria en mecatronica</td>
<td>TSU9876s987</td>
<td>Cuarto cuatrimestre</td>
<td>Cisco, etc.</td>
</tr>
</tbody>
</table>

## Tabla de Tipo ##

Solo mostrara el Id de la persona si es un profesor o un alumno.

<table>
<tr>
<td>IdTipo</td>
<td>nombre</td>
</tr>
<tbody>
<tr>
<td>1</td>
<td>Alumno</td>
</tr>
</tbody>
</table>

## Tabla de Usuarios ##

Aqui se encontraran registrada toda la información de 
cada uno de los usuarios como lo es su información personal etc.

<table>
<tr>
<td>IdUsuario</td>
<td>nombre</td>
<td>apellido_ p</td>
<td>apellido_m</td>
<td>edad</td>
<td>sexo</td>
<td>correo</td>
<td>password</td>
<td>Telefono</td>
<td>imagen</td>
</tr>
<tbody>
<tr>
<td>1</td>
<td>Alejandra</td>
<td>Martinez</td>
<td>López</td>
<td>22</td>
<td>Mujer</td>
<td>alejandragmail.com</td>
<td>kjh56</td>
<td>9516788762</td>
<td>https://img2.freepng.es/20180612/yaq/kisspng-computer-icons-woman-user-clip-art-5b1f6aa8cd7b53.6682503915287855768417.jpg</td>
</tr>
</tbody>
</table>

## Tabla de nivel de escolaridad

La tabla de nivel de escolaridad tiene como objetivo de mostrar la clasificacion de las materias respecto al nivel de estudios, por ejemplo:

<table>
<tr>
<td>Id</td>
<td>Nivel</td>
</tr>
<tbody>
<tr>
<td>1</td>
<td>Posgrado</td>
</tr>
<tr>
<td>2</td>
<td>Universidad</td>
</tr>
<tr>
<td>3</td>
<td>Bachillerato</td>
</tr>
<tr>
<td>4</td>
<td>Secundaria</td>
</tr>
<tr>
<td>5</td>
<td>Primaria</td>
</tr>
</tbody>
</table>

## Tabla de Ubicación

En la tabla de ubicación tiene como finalidad para saber los datos donde habita el usuario.

<table>
<tr>
<td>Id</td>
<td>Calle</td>
<td>Colonia</td>
<td>N_Exterior</td>
<td>N_Interior</td>
<td>Código Postal</td>
<td>País</td>
<td>Estado</td>
<td>Ciudad</td>
<td>Referencias</td>
</tr>
<tbody>
<tr>
<td>1</td>
<td>Monte Alban</td>
<td>San Martin Mexicapam</td>
<td>3</td>
<td>403</td>
<td>68140</td>
<td>México</td>
<td>Oaxaca</td>
<td>Oaxaca de Juárez</td>
<td>Esta enfrente de un verificentro de un autos</td>
</tr>
</tbody>
</table>

## Tabla de Asesoria

La tabla de Asesoria tiene el fin de mostrar los temas con su respectivo encargado y el alumno que esta registrado en ella, así como también muestra el horario, la fecha, la modalidad si es de manera "presencial" o "en línea" la clase; cuenta también con un estatus que tiene como finalidad de mostrar el estado de la solicitud que el alumno requirio de algún tema, en donde se pondrá de manera manual utilizando una cifra que será:
1 = Aceptado
2 = Pendiente
3 = Rechazado

<table>
<tr>
<td>Id</td>
<td>Tema</td>
<td>Encargado</td>
<td>Alumno</td>
<td>Fecha</td>
<td>Hora</td>
<td>Modalidad</td>
<td>Estatus</td>
</tr>
<tbody>
<tr>
<td>1</td>
<td>Desarrollo web</td>
<td>1</td>
<td>1</td>
<td>13/07/2022</td>
<td>8:00</td>
<td>Presencial</td>
<td>2</td>
</tr>
</tbody>
</table>