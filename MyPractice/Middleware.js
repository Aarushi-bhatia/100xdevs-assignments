//middlewares are just functions with a next as a third parameter

const express = require('express')

const app = express();

const kidneyId = req.query.kidneyId;
const username = req.query.username;
const password = req.query.password;

function userMiddleware(req, res, next){
  if(username != "aarushi" && password != pass){
    res.status(403).json({
      msg: "Invalid input",
    })
  } else{
    next();
  }
}

function kidneyMiddleware(req, res, next){
  if(kidneyId != 1 && kidneyId != 2){
    res.status(403).json({
      msg: "Invalid input",
    })
  } else{
    next();
  }
}

app.get('/health-checkup', userMiddleware, kidneyMiddleware, function(req, res){
  res.send("You are healthy!");
})

//app.use(calculateRequests) is a middleware which is called in every fn.
//app.use() takes a middleware as input