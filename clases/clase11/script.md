# Node

## Preguntas acerca del projecto de la clase anterior (opcional)

## Que es NodeJS
- Es un runtime de JavaScript creado usando el motor de JavaScript de Chrome. 
- El modelo es:
    + Orientado a eventos
    + Asíncrono
    + No bloqueante
- A diferencia de otros modelos no utiliza threads para cada petición. En su lugar usa algo llamado event loop

## Instalación
A esta altura probablemente todos ya lo tengan instalado pero para los que no:
https://nodejs.org/en/download/

## Que es el event loop
Es un bucle que se ejecuta de forma constante verificando si algún evento ocurre. Cada vez que un evento ocurre se llaman a los listeners previamente establecidos.

![Event Loop](event-loop.png)

## Como importar módulos
Dado que nodejs fue creado antes de que el sistema de módulos nativo fuera creado en lugar de usar imports como utilizabamos debemos utilizar require para importarlos:

```javascript
const fs = require('fs');
```

## Leyendo nuestro primer archivo
Para leer archivos debemos utilizar el módulo FileSystem. Vamos a ver un ejemplo:

### Ejemplo
- Creemos un archivo llamado archivo.txt
- Agreguemos el texto `Hello world from file`.

```javascript
const fs = require('fs');

const file = fs.readFileSync('archivo.txt'); // BAD
console.log(file.toString());
```

- ¿Qué problema tiene el código anterior?

## Leyendo archivos (The right way)
Como vimos NodeJS crea un loop principal donde se va a ir ejecutando cada uno de los listeners a medida que los eventos ocurran. El problema del ejemplo anterior es que readFileSync, como su nombre lo indíca, genera una llamada síncrona por lo cual el loop es bloqueado. 

**Regla de oro de nodejs:** Nunca bloquees el loop principal. ¿Entonces cómo hago?

```javascript
const fs = require('fs');

const fileAsync = fs.readFile('archivo.txt', function callback (err, data) {
  console.log(data.toString());
})
```

- Nótese que el callback que utilizamos recibe dos parametros uno es err y el otro data. Este es un pattern muy común en NodeJS para todas las operaciones asíncronas.
- El parametro err va a ser `null` en el caso que ningún error ocurra y el parámetro data va a contener el buffer con la información que solicitamos.
- En el caso que un error se presente err va a contener el error y data va a ser null.

Veamos como mejorar nuestro ejemplo:

```javascript
const fs = require('fs');

const fileAsync = fs.readFile('archivo.txt', function callback (err, data) {
  if (err) throw err;
  console.log(data.toString());
});
```

### Ejercicio 18
- Crear un script que observe los cambios en un archivo y cada vez que ocurra un cambio imprimir por la pantalla el contenido del archivo.
- Para esto podemos utilizar el método watch de la clase fs.

## Buffers
Los buffers son una instancia de la clase Buffer y son destinados para contener datos binarios.

Utilizando la API de este objeto podemos transformar los datos binarios en otro tipo de datos. En el ejemplo del archivo vimos como el metodo toString se utiliza para convertir el buffer en una cadena de carácteres.

Otro metodo muy utilizado es el toJSON que va a crear un objeto JSON a partir del buffer.

## Creando un servidor

```javascript
var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE "html">");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

server.listen(80);
console.log("Server is listening");
```

### Ejercicio 19
- Modificar el ejemplo anterior para que cargue el html desde un archivo.
- En el caso que el archivo no pueda ser cargado debe responder con un 404.

## Módulos
Para crear un módulo debemos utilizar el formato de CommonJS. Esto es module.export para exportar un modulo y require para importar.

```javascript

// greetings.js
var exports = module.exports;
exports.hello = function() {
    console.log('Hello exported');
};

// index.js
var greetings = require('./hello.js');

greetings.hello();
```

### Ejercicio 20
- Crear un módulo con la función fileToString que dada una ruta a un archivo me devuelva un string.

## Streams
Los streams son una forma de transmitir datos. Para entenderlos repasemos el ejemplo para cargar un archivo y agregarle algunas modificaciones.

```javascript

const fs = require('fs');
const http = require('http');
var server = http.createServer(function (req, res) {
    fs.readFile('archivo.txt', function callback (err, data) {
        if (err) throw err;
        response.writeHead(200, {"Content-Type": "text/html"});
        res.write(data.toString());
        res.end();
    });
});
server.listen(8000);
```

Cada vez que un usuario acceda al sitio el archivo completo va a ser cargado en memoria. 

Ahora bien, si el archivo es lo suficientemente grande o la memoria es limitada o la cantidad de request son elevadas, en algún momento, nuestra memoria se va a acabar.

Para evitar este tipo de problemas es mucho más eficiente leer el archivo de a partes e ir enviando al cliente al mismo tiempo dichas partes sin la necesidad de cargarlo todo en memoria. 

Para eso son los streams. Veamos como cambiar el código para usar streams:

```javascript
const fs = require('fs');
const http = require('http');
var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(__dirname + '/archivo.txt');
    stream.pipe(res);
});
server.listen(8000);
```

Lo que ocurre en el ejemplo anterior es que estamos creando un stream que vaya leyendo el archivo y a medida que esto ocurra va a ir enviando la respuesta al cliente con las partes leídas. Obviamente esto pasa en una fracción muy pequeña de tiempo.
