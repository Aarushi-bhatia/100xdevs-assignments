//an example of a callback function 

function square(n){
  return n*n
}

function sumOfSomething(a, b, fn){
  return fn(a) + fn(b); //fn is a callback function
}

console.log(sumOfSomething(1, 2, square)); //Output: 5

/*
anonymous functions do not have a name

e.g.

setTimeout(function{
  console.log("Hi from async fn!");
}, 5000)
*/