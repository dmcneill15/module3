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


