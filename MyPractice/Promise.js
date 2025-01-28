//an example of promise

const fs = require('fs');

function KiratReadsFile(){
  return new Promise(function(resolve){
    fs.readFile("a.txt", "utf-8", function(err, data){
      resolve(data)
    })
  })
}

function onDone(data){
  console.log(data);
}

KiratReadsFile().then(onDone)