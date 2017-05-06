const fs = require('fs');

const file = fs.readFileSync('archivo.txt');
console.log(file.toString());

const fileAsync = fs.readFile('archivo.txt', function callback (err, data) {
  console.log(data.toString());
});

const fileAsyncErr = fs.readFile('archivso.txt', function callback (err, data) {
  if (err) throw err;
  console.log(data.toString());
});

fs.watch('archivo.txt', function(event, filename) {
  console.log(event);
});

const fs = require('fs');
const http = require('http');
var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(__dirname + '/archivo.txt');
    stream.pipe(res);
});
server.listen(8000);