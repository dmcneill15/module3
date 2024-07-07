//Function factory
//----------------------------------------------------------
/*
function makeAdder(x) {
  // function factory: bundles value of x into the scope of adder
  return function adder(y) {
    // closure function 'adder' now has access to both x and y when created
    return x + y;
  };
}
const add5 = makeAdder(5); // sets x to 5, even when adder function is returned and called
console.log(add5(10)); // x is still 5 and y is 10, result is 15
*/

//name property
//can figure out the name of the function
//---------------------------------------------------------------
/*
function sayHiDefn() {
  console.log("Hi (function definition)");
}
const sayHiExpn = function () {
  console.log("Hi (function expression)");
};
const sayHiArrow = () => console.log("Hi (arrow function)");
//.name property exists as a built-in default property for all functions
console.log(sayHiDefn.name); // sayHiDefn - uses explicit function name
console.log(sayHiExpn.name); // sayHiExpn - figures out name from context
console.log(sayHiArrow.name); // sayHiArrow - figures out name from context
*/

//setTimeOut
//delay the execution of a function
//--------------------------------------------------------------
/*
function printMsg(msg){
    console.log(`Message: ${msg}`);
}

//let timerId = setTimeout(printMsg,1000, 'prints after 1s')

function calcResult(a,b){
    let res = a+ b;
    console.log(`Result is: ${res}`)
}

//let timerId = setTimeout(calcResult, 2000, 1, 1);
//setTimeout(()=> {calcResult(1,1,)}, 2000);
*/

//setInterval & setTimeout
//------------------------------------------------------------------
/*
let tickID = setInterval(()=>console.log('tick'), 1500);
setTimeout(()=> clearInterval(tickId), 10*1500);
*/

//---------------------------------------------------------------
/*
function repeatInt(delay, limit){
    let counter = 1;

    //let intTimer = setInterval(repeatThis, delay, counter++, limit);  //the check to clearInterval needs to happen in the function of setInterval
    //if(counter == limit)                                              //also can't increment counter here as its not passed to subsequent calls of setInterval like this
     //   clearInterval(intTimer);

     let intTimer = setInterval(()=>{
        repeatThis(counter,limit);
        counter++;
        if(counter==limit+1)
            clearInterval(intTimer);
     }, delay)
}

function repeatThis(counter, limit){
    console.log(`repeatInt: repeated: ${counter} number of times out of a toal of ${limit}`);
}

repeatInt(500, 10);   //let interval repeat every 0.5s for a max of 10 loops
*/

//Decorators & forwarding: add logging and timing info
//----------------------------------------------------------------
/*
function printGreeting(name){
    console.log(`Hello ${name}`);
}
//printGreeting('Undecorated Function');

function loggingTimingDecorator(originalFunction){  //decorator takes a function as a parameter
    return function(name){
        console.time(`Function timer`);         //start a timer
        console.log(`\nExecuting function...`);  //log a msg
        const result = originalFunction(name);
        console.timeEnd(`Function timer`);
        return result;
    }
}

//const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
//decoratedPrintGreeting(`Decorated`);
*/

//Caching
//-------------------------------------------------------------------
/*
function slow(x) {
  // there can be a time-consuming job here, like adding up to a large number
  let random = 0,
    goal = Math.floor(Math.random() * x * 1_000_000); // random large number
  console.log(
    `slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`
  );
  for (let i = 0; i < goal; i++) random++;
  return random; // return large number after counting to it
}

function cachingDecorator(origFunction) {
  // decorator takes a function as parameter
  const cache = new Map(); // can also include outer environment variables via a closure
  return function (x) {
    // decorator returns same function with extra bits - caching
    if (cache.has(x)) {
      // if the key exists in the cache,
      console.log("returned cached value for " + x);
      return cache.get(x); // read and return the result from it
    }
    let result = origFunction(x); // otherwise, call the original function and store the result
    cache.set(x, result); // then cache (remember) the result for next time
    return result;
  };
}

const fast = cachingDecorator(slow) // we can decorate the original slow function to use caching and make it fast
const fastTimed = loggingTimingDecorator(fast) // we can decorate the fast version to include timing for testing
fastTimed(8) // first time will still be slow because it's uncached
fastTimed(8) // but every time after this will be much faster because result is cached
*/

//Promises
//-----------------------------------------------------------------------
/*
// example promise. settles after 250ms with success or failure depending on random number
const promise = new Promise((resolve, reject) => {
  if (Math.random() > 0.2) 
    setTimeout(() => resolve("Random number okay"), 250);
  else 
    setTimeout(() => reject("Random number too low"), 250);
});

promise
  .finally(() => console.log("Wait is over, promise has settled"))
  .then((result) => console.log("success! " + result))
  .catch((error) => console.log("error! " + error));

  */
