//an example of async await function

function KiratAsyncFunction(){
  return new Promise(function(resolve){
    resolve("Hi there!")
  })
}

async function main(){
  const value = await KiratAsyncFunction(); //await needs to be inside async function
  console.log(value);
}

main();

/* Normal syntax

function KiratAsyncFunction(){
  return new Promise(function(resolve){
    resolve("Hi there!")
  })
}

function main(){
  KiratAsyncFunction().then(function(value){
    console.log(value);
  });
}

main();
*/