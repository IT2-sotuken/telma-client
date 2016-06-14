var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('message', function(msg){
	  console.log('content message',msg);
    socket.emit('messageToClient', msg);
  });
});

http.listen(8080, function(){
  console.log('listening onnn *:8080');
});