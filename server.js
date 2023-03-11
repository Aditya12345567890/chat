
const express = require("express");
const port = 1234;
let app =express();
const socket_io = require("socket.io");
app.set('view engine', 'ejs')

var io = socket.io();
app.io =io;

io.on('connection', function(socketUser){
  socketUser.on('new msg', function(msg){
    io.emit('msg',msg)
  })
})

app.post('/chat', function(req,res,next){
  let name=req.body.name;
  res.render('chat',{name});
})

app.get("/",function (req,res){
    res.render("index")
})

app.get("/chat",function (req,res){

  res.render("chat");
  res.end();
})

app.listen(port, function (){
    console.log("Server is working.")
});

