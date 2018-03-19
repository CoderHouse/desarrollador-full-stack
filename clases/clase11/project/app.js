const fs = require('fs');
const http = require('http');
const os = require('os');

const PORT = 8000;
//WRONG
// const file = fs.readFileSync('archivo.txt');
// console.log(file.toString());

fs.watch('archivo.txt', function(event, filename) {
  console.log(event);
});

const server = http.createServer(function (req, res) {
    const stream = fs.createReadStream(__dirname + '/archivo.txt');
    stream.pipe(res);
});

server.listen(PORT, () => {
    console.log(`up and running: ${os.hostname()} on PORT: ${PORT}`);
});