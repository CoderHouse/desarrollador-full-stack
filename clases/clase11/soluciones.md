# Ejercicio 19
```
<!DOCTYPE html>
<html>
<head>
    <title>Hello World Page</title>
</head>
<body>
Hello World!
</body>
</html>
```

```javascript
var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  fs.readFile(__dirname + '/index.html', function(err, data){
    // Manejo de errores debería estar acá.
    response.end(data);
  });  
});

server.listen(80);
console.log("Server is listening");
```

# Ejercicio 20

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