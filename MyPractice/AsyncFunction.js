//an example of async function - setTimeout
//more examples would be fs.readFile, Fetch

function findSum(n){
  let ans  = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100(){
  console.log(findSum(100));
}

setTimeout(findSumTill100, 1000); //calling an async function
console.log("Hello World!");

//Output: 
//Hello World!
//4950