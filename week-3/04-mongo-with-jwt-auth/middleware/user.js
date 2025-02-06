const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../index");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorisation;
  const words = token.split(" ");
  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
  if(decodedValue.username){
    req.username = decodedValue.username;
    req.randomData = "Adsadssdadsdadsadasd"
    next();
  } else{
    res.status(403).json({
        msg: "You are not authenticated"
    })
  }
}

module.exports = userMiddleware;
