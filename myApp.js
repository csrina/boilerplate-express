var express = require('express');
var app = express();

//4. serve static files
app.use('/public', express.static(__dirname + '/public'));

// 1. Meet the Node consolePassed
console.log("Hello World");

//2. Start a Working Express Server
app.get("/hello-express", (_, res) => res.send("Hello Express"));

//3. Serve an HTML File
app.get("/", (_, res) => res.sendFile(__dirname + "/views/index.html"));

//5. Serve JSON on a Specific Route
app.get("/json", (_, res) => res.json({"message": "Hello json"}));

module.exports = app;
