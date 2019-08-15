const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3002;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/audio/:state', (req, res) => {
  let params = req.params.state
  io.emit('audio', params)
  res.send({mensagem: `audio ${params}: ocorreu tudo bein`})
})

app.get('/cartao/:id', (req, res) => {
  let params = req.params.id
  io.emit('cartao', params)
  res.send({mensagem: `cartao ${params}: ocorreu tudo bein`})
})

app.get('/pin/:pin', (req, res) => {
  let params = req.params.pin
  io.emit('pin', params)
  res.send({mensagem: `pin ${params}: ocorreu tudo bein`})
})

app.get('/deposito/:state', (req, res) => {
  let params = req.params.state
  io.emit('deposito', params)
  res.send({mensagem: `deposito ${params}: ocorreu tudo bein`})
})

app.get('/codigobarra/:codigo', (req, res) => {
  let params = req.params.codigo
  io.emit('codigobarra', params)
  res.send({mensagem: `codigo de barras ${params}: ocorreu tudo bein`})
})

// io.on('connection', function(socket){
//   socket.on('cartao


http.listen(port, function(){
  console.log('listening on *:' + port);
});
