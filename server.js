const net = require('net');
//define host and port to run the server
const port = 8080;
const host = '127.0.0.1';
//Create an instance of the server
//2
const server = net.createServer();
//Start listening with the server on given port and host.
server.listen(port,host,function(){
   console.log(`Server started on ${host}:${port}`); 
});