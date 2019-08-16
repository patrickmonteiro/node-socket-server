const app = require('express')();
const cors = require('cors')
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3002;
app.use(cors())

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/msg/:textmsg', (req, res) => {
  let params = req.params.textmsg
  io.emit('msg', params)
  res.send({mensagem: `codigo de barras ${params}: ocorreu tudo bein`})
})

io.on('connection', function(socket) {
  console.log(socket.id)
  socket.on('SEND_MESSAGE', function(data) {
    console.log('entropu no envento')
      io.emit('MESSAGE', data)
  });
});


// app.get('/clients', (req, res) => {
//   let clients = io.sockets.clients()
//   // io.emit('clients', clients)
//   console.log(clients.connected)
//   // res.send({clients: clients.connected})
// })

// io.on('connection', function(socket){
//   socket.on('cartao


http.listen(port, function(){
  console.log('listening on *:' + port);
});
