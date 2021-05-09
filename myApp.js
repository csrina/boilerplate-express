var express = require('express');
var app = express();
require('dotenv').config();

//7. Implement a Root-level Request logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

//4. serve static files
app.use('/public', express.static(__dirname + '/public'));

// 1. Meet the Node consolePassed
console.log("Hello World");

//2. Start a Working Express Server
app.get("/hello-express", (_, res) => res.send("Hello Express"));

//3. Serve an HTML File
app.get("/", (_, res) => res.sendFile(__dirname + "/views/index.html"));

//5. Serve JSON on a Specific Route
app.get("/json-v1", (_, res) => res.json({"message": "Hello json"}));

//6. Use the env file
app.get("/json", (_, res) => {
    var hw = "Hello json";
    res.json({"message": (process.env.MESSAGE_STYLE === "uppercase")? hw.toUpperCase() : hw})
});

//8. Chain middleware to create a time server
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => res.json({"time": req.time}));

//9. Get Route Parameter Input from the Client
app.get("/:word/echo", (req, res) => res.json({"echo": req.params.word}));

//10. Get Query Parameter Input from the Client
app.get("/name", (req, res) => res.json({"name": `${req.query.first} ${req.query.last}`}));

module.exports = app;
