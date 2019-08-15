const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3002;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/msg/:textmsg', (req, res) => {
  let params = req.params.codigo
  io.emit('msg', params)
  res.send({mensagem: `codigo de barras ${params}: ocorreu tudo bein`})
})

// io.on('connection', function(socket){
//   socket.on('cartao


http.listen(port, function(){
  console.log('listening on *:' + port);
});
