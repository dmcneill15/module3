//Question 1
//----------------------------------------------------
/*
function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

function makeCounterUpdate(startFrom,incrementBy) {
    let currentCount = startFrom;
    return function () {
      currentCount+=incrementBy;
      console.log(currentCount);
      return currentCount;
    };
  }

let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

let counter2 = makeCounter();
counter2();

let counter3 = makeCounterUpdate(3,10);
counter3();
*/

//Question 2
//----------------------------------------------
/*
function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}

const delayMsgArrow = (msg) =>{
    console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
//Print oreder: 3,4,2,1 - no - 4,3,2,1 - 3 still takes time to execute the timer setup by 4 doesn't

let timerId = setTimeout(delayMsgArrow, 10000, "#5: Delayed by 10s");
setTimeout(()=>clearInterval(timerId),1000);        //after 1s clear the timer for #5
*/

//Question3 - Debouncing
//------------------------------------------------
/*
function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}
//printMe();

//decorator function
function debounce(func, msDelay){
  //let delay= 1000;
  let timeoutId;
  return function(msg){
    clearTimeout(timeoutId);  //clear any previously existing timers
    //timeoutId = setTimeout(func,msDelay);
    timeoutId = setTimeout(()=>func(msg), msDelay);
  }

}

printMe = debounce(printMe, 1000); //create this debounce function for a)
//printMe("msg");
setTimeout(()=>printMe("msg1"), 100);
setTimeout(()=>printMe("msg2"), 200);
setTimeout(()=>printMe("msg3"), 300);

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
//setTimeout(printMe("msg"), 100);   //will call printMe after 100ms
//setTimeout(printMe("msg"), 200);   //will call printMe after 200ms
//setTimeout(printMe("msg"), 300);   //will call printMe after 300ms - because no other call is made to printMe, this is allowed to execute
*/

//Question4 - Fibonacci
//------------------------------------------------
function printFibonnaci(){
  let a = 0;
  let b = 1;
  let ans = 1;
  console.log((ans));

  let timerId = setInterval(()=>{
    ans = a + b;
    console.log((ans));
    a=b;
    b=ans;
  }, 1000);
  setTimeout(()=>clearInterval(timerId), 10000);  //stop when timerId reaches 10s
}

//printFibonnaci();

function printFibonnaciTimeouts(delay, limit){
  let a = 0;
  let b = 1;
  let ans = 1;
  console.log((ans));

  let counter = 1;

  //setTimeout(function, delay, arg1, arg2...)
  //will run calcFibonnaci after the specified delay (1000ms)
  //in this case counter = args1, which is the argument passed to calcFibonnaci so counter == loopCount to start
  setTimeout(function calcFibonnaci(loopCount){
    ans = a + b;
    console.log((ans));
    a=b;
    b=ans;
    if(loopCount<limit)
      setTimeout(calcFibonnaci, delay, loopCount+1);
  }, delay, counter)
}
printFibonnaciTimeouts(1000, 10);