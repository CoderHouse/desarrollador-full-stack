# SQL

## Que es una base de datos
Estamos acostumbrados a almacenar datos en archivos. Por ejemplo texto en word, una planilla de calculo en excel, texto en un block de notas, etc.

Algunos de estos archivos requieren el programa adecuado para poder abrir dicho archivo. Por ejemplo, si queremos ver un archivo de excel utilizando el block de notas, dificilmente entendamos algo.

Podemos decir que estos archivos estan organizados internamente de la forma que más le conviene al programa que debe leerlos. 

Por ejemplo, guardar un archivo de texto en formato binario no es la forma más optima para que el block de notas lo lea.

**Las bases de datos es un programa que sirve para almacenar datos de la forma más óptima posible para luego ser consultados. Además nos brinda el lenguaje propio para comunicarnos con la misma**

En última instancia una base de datos es una serie de archivos y una forma de manipular los datos desde y hacia estos archivos.

## Para que nos sirven
- Almacenar
- Acceder
- Manipular
- Analizar 

## SQL
SQL es un lenguaje utilizado para comunicarse con una base de datos. Se pronuncia "ESQUIUEL" y es la abreviatura de Structured Query Language.

A diferencia de otros lenguajes como C, PHP, JavaScript, etc. SQL es un lenguaje declarativo lo cual significa que no le decimos como tiene que hacer las cosas sino cuales son las cosas que queremos.

Es interesante que a pesar de ser creado hace más de 40 años sigue siendo el lenguaje por excelencia para la manipulación de datos.

**Se divide principal en dos:**
- DDL: Data Definition Language
- DML: Data Manipulation Language

Desde el punto de vista de DDL, SQL nos provee una serie de comandos para crear las estructuras (mayormente tablas) necesarias para almacenar los datos.

Desde el punto de vista de manipulación de datos, SQL cuenta con una rica colección de comandos para la transformación de datos como INSERT, UPDATE, DELETE, etc.

## MySQL
Existen una gran cantidad de bases de datos disponibles en el mercado. Dentro de las más populares se encuentra MySQL.

Actualmente, a pesar que muchos creen que no, es ampliamente utilizada por grandes compañías como Facebook por ejemplo.

Porque elegimos MySQL:
- Es relacional: a pesar del hype de las bases de datos no relacionales, contar con un esquema es algo de suma importancia al momento de mantener la consistencia de los datos.
- Usa SQL como lenguaje: la utilización de SQL excede a las bases de datos relacionales. Es además utilizado en otros tipos de bases de datos como lenguaje de consulta así como también en diversas aplicaciones por su familiaridad.
- Disponibilidad: se encuentra disponible en prácticamente cualquier servicio de hosting que contratemos.

## Como se organiza una base de datos
Las bases de datos se organizan de forma muy similar a un archivo de excel. En lugar de workbooks tenemos tablas, pero de la misma forma tenemos columnas y filas.

Cada columna tiene un tipo de dato predefinido (usando DDL) que restringe que vamos a poder guardar en dicha columna. Por ejemplo si queremos guardar numeros enteros, la columna va a ser de tipo INT. Ahora bien, si intentamos guardar un texto en dicha columna, la consulta va a fallar.

Definir tipos de datos por columnas ayuda a que la velocidad a la cual podemos acceder a dichos datos se incremente sustancialemente.

## Instalación
Asegurense de tener instalado la ultima versión de MySQL o MariaDB. Para eso ejecuten:

```
mysql --version
```

y esto debería imprimir por pantalla la versión de MySQL que se encuentra instalada.


### Instalación Workbench
Para la mayoría de los ejercicios vamos a utilizar MySQL workbench el cual es un IDE que nos permitirá gestionar nuestra base de datos de forma más amigable.

Descargar el instalador desde la url https://www.mysql.com/toDos/workbench/ y seguir los pasos para la instalación correspondientes al sistema operativo.

- Explicar brevemente a los alumnos como esta conformado el IDE
- Mostrar como importar una base de datos (http://downloads.mysql.com/docs/sakila-db.zip)
- Conectarse a dicha base de datos 
- Mostrar a los alumnos cual es la ventana para ejecutar las consultas de ahora en más.

## Conexión
Las bases de datos normalmente trabajan con la arquitectura cliente servidor. Esto quiere decir que para utilizarla primero debemos conectarnos al servidor utilizando un cliente.

Por suerte MySQL nos provee un cliente por defecto el cual podemos utilizar desde la consola. 

Si no hemos modificado los parametros por defecto de conexión, ejecutando lo siguiente podemos establecer la conexión:

```
mysql -uroot
```

Luego de ejecutar lo anterior deberiamos ver algo como esto:
```
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 2
Server version: 5.7.16 Homebrew

Copyright (c) 2000, 2016, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

Dependiendo del sistema operativo podríamos necesitar utilizar un password. En la mayoría de las distribuciones el password por defecto es `root`.

```
mysql -uroot -p 
Enter Password:
```

## Consultas
Antes de comenzar con las consultas vamos a importar una base de datos de prueba: http://downloads.mysql.com/docs/sakila-db.zip

Lo descomprimimos y ejecutamos:

```
$ mysql -uroot
> create database movies;
> source sakila-db/sakila-schema.sql;
> source sakila-db/sakila-data.sql;
```

Si todo fue bien ya debemos tener nuestra base de datos para comenzar.

## SELECT
```
SELECT columna1, columna2, columna3, ... 
FROM tabla
WHERE  condicion1[, condicion2, condicion3, ...]
```

Vamos a ver brevemente los comandos más utilizados en la clausula select y los casos de usos más comunes:

- ORDER BY
- DISTINCT
- LIMIT
- AND / OR
- LIKE
- BETWEEN
- IN
- CONCAT
- REPLACE
- DATE FORMAT

### Relaciones
#### Uno a Uno
Cada registro de la tabla A se relaciona con un único registro de la tabla B y cada registro de la tabla B sólo se relaciona con un elemento de la tabla A.
**Ejemplo:** Usuario tiene un perfil.

#### Uno a Muchos / Muchos a Uno
En las relaciones de uno a muchos cada registro de una tabla A, a la que llamaremos tabla primaria, puede estar enlazado con más de un registro de otra tabla B, a la que llamaremos tabla secundaria. En cambio, cada registro de la tabla B sólo puede estar enlazado a un registro de la tabla A.
**Ejemplo:** Usuario tiene muchas compras

#### Muchos a Muchos
Una relación de muchos a muchos se produce cuando varios registros de una tabla se asocian a varios registros de otra tabla. Por ejemplo, existe una relación de muchos a muchos entre los clientes y los items: los clientes pueden comprar varios itemos y los itemos pueden ser comprados por muchos clientes.
**Ejemplo**: Un alumno participa en varias materias y a su vez una materia tiene muchos alumnos.

### Clave Primaria
- Identificación única de cada registro.
- Compuesto por uno o varios campos.

### Clave Foranea
Una clave foránea es una columna o grupo de columnas de una tabla que contiene valores que coinciden con la clave primaria de otra tabla.

### JOINS
Como vimos, es normal que nuestras entidades se encuentren distribuídas en diferentes tablas. Por ejemplo, para obtener un usuario y todos sus posts probablemente tengamos que obtener información de diferentes tablas. Para este fin, SQL nos provee las clausulas join.

En el siguiente gráfico podemos las variantes de la clausula join y los casos de uso para cada una. https://i.stack.imgur.com/UI25E.jpg

### Aggregations
Explicar brevemente cada una de las siguientes clausulas.
- COUNT
- SUM
- AVG
- MAX
- MIN

## INSERT, DELETE Y UPDATE
Como parte del lenguaje de manipulación de datos que posee MySQL podemos encontrar la sentencia INSERT, DELETE y UPDATE.

### INSERT
Sirve para agregar un nuevo registro dentro de una tabla.
```sql
INSERT INTO nombre_de_tabla (campo1, campo2, campo4)
VALUES (valor_campo_1, valor_campo_2, valor_campo4);
```

O la sintaxis alternativa donde todos los campos deben estar especificados:
```sql
INSERT INTO nombre_de_tabla
VALUES (valor_campo_1, valor_campo_2, valor_campo3, valor_campo4);
```

### DELETE
Sirve para borrar un registro dentro de una tabla.
```sql
DELETE FROM nombre_de_tabla WHERE condicion;
```
Recuerden utilizar el WHERE **SIEMPRE**. En caso de no utilizarlo, todos los registros se borraran de la tabla.

### UPDATE
Sirve para actualizar uno o varios registros de una tabla.
```sql
UPDATE tabla SET some_field=1,... WHERE condicion;
```

## Tipos de datos

### Números
- **TinyInt:**Es un número entero con o sin signo. Con signo el rango de valores válidos va desde -128 a 127. Sin signo, el rango de valores es de 0 a 255
- **Bit o Bool:**Un número entero que puede ser 0 ó 1
- **SmallInt:** Número entero con o sin signo. Con signo el rango de valores va desde -32768 a 32767. Sin signo, el rango de valores es de 0 a 65535.
- **MediumInt:** Número entero con o sin signo. Con signo el rango de valores va desde -8.388.608 a 8.388.607. Sin signo el rango va desde 0 a16777215.
- **Integer, Int:** Número entero con o sin signo. Con signo el rango de valores va desde -2147483648 a 2147483647. Sin signo el rango va desde 0 a 429.4967.295
- **BigInt:** Número entero con o sin signo. Con signo el rango de valores va desde -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807. Sin signo el rango va desde 0 a 18.446.744.073.709.551.615.
- **Float:** Número pequeño en coma flotante de precisión simple. Los valores válidos van desde -3.402823466E+38 a -1.175494351E-38, 0 y desde 1.175494351E-38 a 3.402823466E+38.
- **xReal, Double:** Número en coma flotante de precisión doble. Los valores permitidos van desde -1.7976931348623157E+308 a -2.2250738585072014E-308, 0 y desde 2.2250738585072014E-308 a 1.7976931348623157E+308
- **Decimal, Dec, Numeric:** Número en coma flotante desempaquetado. El número se almacena como una cadena

### Fechas
- **Date:** Tipo fecha, almacena una fecha. El rango de valores va desde el 1 de enero del 1001 al 31 de diciembre de 9999. El formato de almacenamiento es de año-mes-dia
- **DateTime:** Combinación de fecha y hora. El rango de valores va desde el 1 de enero del 1001 a las 0 horas, 0 minutos y 0 segundos al 31 de diciembre del 9999 a las 23 horas, 59 minutos y 59 segundos. El formato de almacenamiento es de año-mes-dia horas:minutos:segundos
- **TimeStamp:**Combinación de fecha y hora. El rango va desde el 1 de enero de 1970 al año 2037. El formato de almacenamiento depende del tamaño del campo
- **Time:** Almacena una hora. El rango de horas va desde -838 horas, 59 minutos y 59 segundos a 838, 59 minutos y 59 segundos. El formato de almacenamiento es de 'HH:MM:SS'
- **Year:** Almacena un año. El rango de valores permitidos va desde el año 1901 al año 2155. El campo puede tener tamaño dos o tamaño 4 dependiendo de si queremos almacenar el año con dos o cuatro dígitos.

### Texto
- **Char(n):** Almacena una cadena de longitud fija. La cadena podrá contener desde 0 a 255 caracteres.
- **VarChar(n):** Almacena una cadena de longitud variable. La cadena podrá contener desde 0 a 255 caracteres.
Dentro de los tipos de cadena se pueden distinguir otros dos subtipos, los tipo Test y los tipo BLOB (Binary large Object)
La diferencia entre un tipo y otro es el tratamiento que reciben a la hora de realizar ordenamientos y comparaciones. Mientras que el tipo test se ordena sin tener en cuenta las Mayúsculas y las minúsculas, el tipo BLOB se ordena teniéndolas en cuenta.
Los tipos BLOB se utilizan para almacenar datos binarios como pueden ser ficheros.
-**TinyText y TinyBlob:** Columna con una longitud máxima de 255 caracteres.
-**Blob y Text:**Un texto con un máximo de 65535 caracteres.
-**MediumBlob y MediumText:**Un texto con un máximo de 16.777.215 caracteres.
-**LongBlob y LongText:**Un texto con un máximo de caracteres 4.294.967.295. Hay que tener en cuenta que debido a los protocolos de comunicación los paquetes pueden tener un máximo de 16 Mb.
-**Enum:**Campo que puede tener un único valor de una lista que se especifica. El tipo Enum acepta hasta 65535 valores distintos
-**Set:**Un campo que puede contener ninguno, uno ó varios valores de una lista. La lista puede tener un máximo de 64 valores

## CREATE, ALTER Y DROP
Para la creación y modificación del schema es siempre conveniente servirnos de un IDE como workbench o phpmyadmin. 
Salvo que trabajemos como DBAs raramente vamos a crear un esquema utilizando la linea de comandos.
