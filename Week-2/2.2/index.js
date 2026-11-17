const express = require("express");
const port = 3000;
const app = express();
app.get('/' , function(req, res) {
    res.send('Hello World!')
})

app.get('/backend-api/conversation', ()=>{
    res.send('Hey')
})

app.listen(port, () =>{
  console.log(`Example app listening on port ${port}`)
})
// create a todo app that lets users store todos on the server
// try to create a http server from scratch in c
// create an http server in rust using actix-web
// create an http server in golang using the gurrila framework
// springboot JAVA
// create a simple http server in c from scratch
// create a todo application where u store in a file
// create a rust/golang/java http server
// middlewares

 const fs = require("fs");
 fs.readFile("a.txt", "utf-8", function(err, data){

 })

 // fs is a liberary that gives u high level constructs
 // to do filesystem stuff (read from a file, write to a file... )
 
 // what is express
 // express is a library that gives u high level constructs to create http servers