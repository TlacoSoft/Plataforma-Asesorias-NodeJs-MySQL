# Plataforma de Asesorias en NodeJS con MySQL

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
