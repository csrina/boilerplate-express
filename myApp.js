var express = require('express');
var app = express();

// 1. Meet the Node consolePassed
console.log("Hello World");

//2. Start a Working Express Server
app.get("/hello-express", (_, res) => res.send("Hello Express"));

//3. Serve an HTML File
app.get("/", (_, res) => res.sendFile(__dirname+"/views/index.html"));


module.exports = app;
