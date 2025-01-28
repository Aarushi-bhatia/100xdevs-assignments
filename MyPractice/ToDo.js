const express = require("express");
const fs = require('fs');
const app = express();
const port = 8000;

app.get('/', function(req, res){
  res.send("Todo App");
})

app.listen(port)