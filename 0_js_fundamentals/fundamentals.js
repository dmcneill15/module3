//Question 1
/*
console.log("" + 1 + 0); //string 10
console.log("" - 1 + 0); //
console.log(true + false); //false
console.log(!true); //false
console.log(6 / "3"); //2
console.log("2" * "3");//6
console.log(4 + 5 + "px"); //string 9px
console.log("$" + 4 + 5); //string $45
console.log("4" - 2); //Outputs 2
console.log("4px" - 2); //undefined
console.log(" -9 " + 5);
console.log(" -9 " - 5); //undefined
console.log(null + 1); //1
console.log(undefined + 1); //
console.log(undefined == null); //true
console.log(undefined === null);//false
console.log(" \t \n" - 2)
*/

//Question 2
/*
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four //Outputs 34
let multiplication = three * four //Works outputs string 12 -> actually not string, rather converted to number
let division = three / four //works outputs number 0.75
let subtraction = three - four //Works outputs number -1
let lessThan1 = three < four //works outputs true
let lessThan2 = thirty < four //works outputs false -> nope, find out why

//addition won't work as it can double as alternative to concat operation - need to cast to integer
addition = Number(three) +Number(four);
console.log(addition);

console.log(thirty);
console.log(Number(thirty));
console.log(lessThan2);
*/

//Question 3
/*
if (0) console.log("#1 zero is true"); //Won't print
if ("0") console.log("#2 zero is true"); //Will print 
if (null) console.log("null is true"); //Won't print
if (-1) console.log("negative is true");//Will print
if (1) console.log("positive is true");//Will print
*/

//Question 4
/*
//+= is used to append the text to "result"
let a = 2, b = 3;
let result = `${a} + ${b} is `;

//if (a + b < 10) {
//  result += "less than 10";
//} else {
//  result += "greater than 10";
//}

if((a+b<10) ? result += "less than 10" : result += "greater than 10");//(condition? if true : if flase)
console.log(result);
*/

//Question 5
/*
function getGreeting(name) {
  return "Hello " + name + "!";
}
//function expression
const getGreeting1 = function(name){
  console.log("Hello " + name)
}
getGreeting1("Dan");

//arrow expression
const getGreeting2 = (name) => {console.log("Hello " + name)};
getGreeting2("Sue");
*/

//Question 6
/*
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  //********************Why here do we use : but above in Q5, we used =?
  getCatchPhrase : (person) => {
    const phrase = person.numFingers==6 ? "You killed my father. Prepare to die" : "Nice to meet you.";
    return phrase;
  },
 // getCatchPhrase(person) {
   // if(person.numFingers==6){
   //   return "You killed my father. Prepare to die.";
  //  }
  //  else return "Nice to meet you.";
 // },
};
inigo.greeting(westley);
inigo.greeting(rugen);
*/

