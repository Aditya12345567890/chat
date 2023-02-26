
const express = require("express");
const port = 1234;
let app =express();
app.set('view engine', 'ejs')

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

