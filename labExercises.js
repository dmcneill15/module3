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
/*
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
*/

//Question5
//------------------------------------------------
/*
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

car.description(); //works
//setTimeout(car.description, 200); //fails 
//- the context is lost. Context refers to the value of 'this'. The value of 'this' depends on how the function is called
//car.description() refers to the object itself: 'this' refers to 'car'
//setTimeout(car.description, 200) - setTimeout call the function without an object reference and function called car.description does not exist
//this.make, this.model etc. can't be found
setTimeout(function(){
  car.description();
}, 200);
//arrow function will also work
//setTimeout(()=>{car.description()}, 200);

//let carClone = car;
//carClone.year = 2024;
//console.log(carClone.year);
//the dealyed output from setTimeout above uses the carClone year instead of the original year
//the above carClone is not a true clone of car, but rather another reference to the same car object
//create a true clone using spread operator:
let carCloneTrue = {...car};
carCloneTrue.year = 2024;
console.log(carCloneTrue.year);

//using bind - explicitly bind the right “context” into the function reference.
let car2 = {
  make: "Toyota",
  model: "234",
  year: 2021,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

const boundDescription = car2.description.bind(car2);
setTimeout(boundDescription, 200);
*/

//Question6
//------------------------------------------------
/*
//use 'Function' prototype to add a new function to all functions
//here Function must be capital to refer to the Function object/class
Function.prototype.delay = function(ms){
  let msDelayfunc = this;       //this is the function we want to call. 'this' determines the context in which the function is executed.

  return function(...args){   //...args ensures that the delay function can take any number of parameters 
    setTimeout(()=>{
      msDelayfunc.apply(this,args); //ensures that 'this' refers to the correct context. .apply is a way of using the function
    }, ms);
  };
};

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
multiply.delay(500)(5, 5, 1, 2); // prints 50 after 500 milliseconds
*/

//Question7
//------------------------------------------------
/*
Person.prototype.toString = function(){
  return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
}

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
const person1 = new Person('James Brown', 73, 'male')
console.log('person1: ' + person1); //prints person1: [object Object]

const person2 = new Person('Dan Brown', 80, 'male');
const person3 = new Person('Jess Smith', 29, 'female');
  console.log('person2:' + person2.toString());
  console.log('person3:'+ person3.toString());

function Student(name, age, gender, cohort){
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

Student.prototype.toString = function(){
  return (`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort}`);
}
const student1 = new Student('Danielle', 30, 'female', 'year2024');
console.log('student1: ' + student1.toString());
*/

//Question8 - class inheritance
//------------------------------------------------
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
    date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock('my clock:');
//myClock.start();

class PercisionClock extends DigitalClock {
    //add the precision parameter. If nothing is supplied, will use 1000
    constructor(prefix, precision = 1000){
      super(prefix);              //super keyword in a child constructor, calls the constructor from the parent
      this.precision = precision
    }

    //precision parameter is used to set the interval for the display
    //if precision = 500,then the display should refresh evey 500ms
    //if there is no precision, then the display should refresh every 1s
    start(){
      //super.display() will have the same effect here, but calls the method from DigitalClock. 
      //this.display calls the display method from the current instance of precision clock
      this.display();       
      this.timer = setInterval(() => this.display(), this.precision);
    }
}

const pClock = new PercisionClock('Clock prefix/id: ', 500);
//pClock.start();

class AlarmClock extends DigitalClock{
  constructor(prefix, wakeUpTime='07:00'){
    super(prefix);
    this.wakeUpTime = wakeUpTime;
  }

  display(){
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
    date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    const currentTime = `${hours}:${mins}`;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

    if(currentTime==this.wakeUpTime){
      console.log('Wake Up');
      this.stop();
    }

  }
}

const aClock = new AlarmClock('id:1', '22:30');
aClock.start();