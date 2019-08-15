const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3002;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/text/:text', (req, res) => {
  let params = req.params.state
  io.emit('audio', params)
  res.send({mensagem: `audio ${params}: ocorreu tudo bein`})
})

http.listen(port, function(){
  console.log('listening on *:' + port);
});
