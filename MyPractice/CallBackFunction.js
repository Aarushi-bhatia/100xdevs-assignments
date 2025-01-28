//an example of a callback function 

function square(n){
  return n*n
}

function sumOfSomething(a, b, fn){
  return fn(a) + fn(b);
}

console.log(sumOfSomething(1, 2, square)); //Output: 5