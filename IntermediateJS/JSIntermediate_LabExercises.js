//Question 1
//-------------------------------------------------------------------------------

function ucFirstLetters(str){
    let splitStr = str.split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' ');
}

//console.log(ucFirstLetters("los angeles") ) //Los Angeles
//console.log(ucFirstLetters("hello world, it's me!") ) //Los Angeles


//Question 2
//-------------------------------------------------------------------------------

function truncate(str, max){
    if(str.length < max){
        return str;
    }
    else {
        return (str.slice(0, max) + "...");
    }   
}
function truncate2(str, max){
    return((str.length < max) ? str : (str.slice(0, max) + "...")); 
}

//console.log(truncate2('This text will be truncated if it is too long', 25)) // This text will be truncat...


//Question 3
//-------------------------------------------------------------------------------

function replaceMiddleAnimal(arr, newValue){
    let midIndex = arr.length / 2;
    arr[midIndex] = newValue;
}

function findMatchingAnimals(arrOld, beginsWith){
    let arrNew = [];
    let j = 0;
    for (let i = 0; i <arrOld.length; i++){
        let arrOldLower = arrOld[i].toLowerCase();
        let beginsWithLower = beginsWith.toLowerCase();
        if(arrOldLower.startsWith(beginsWithLower)){
            arrNew[j] = arrOld[i];
            j++;
        }
    }
    return arrNew;
}

const animals = ['Tiger', 'Giraffe'];
animals.push("Elephant", "Lion");
animals.unshift("Zebra", "Rhino");
replaceMiddleAnimal(animals, "Leopard");

let newAnimals = findMatchingAnimals(animals, "ZEb");

//console.log(animals);
//console.log(newAnimals);


//Question 4
//-------------------------------------------------------------------------------

function camelCase(cssProp) {
  let dashIndex = cssProp.indexOf("-");
  if (dashIndex < 0) {
    return cssProp;
  }
  let cssPropStart = cssProp.slice(0, dashIndex);
  let cssPropCapsChar = cssProp.charAt(dashIndex + 1).toUpperCase();
  let cssPropEnd = cssProp.slice(dashIndex + 2, cssProp.legnth);

  cssProp = cssPropStart + cssPropCapsChar + cssPropEnd;

  return cssProp;
}

function camelCase2(cssProp) {
  let cssPropNew = "";
  for (let i = 0; i < cssProp.length; i++) {
    if (cssProp.charAt(i) != "-") {
      cssPropNew = cssPropNew + cssProp.charAt(i);
    } else {
      ++i;
      cssPropNew = cssPropNew + cssProp.charAt(i).toUpperCase();
    }
  }
  return cssPropNew;
}

function camelCase3(cssProp) {
    let cssPropNew = "";
    for (let i = 0; i < cssProp.length; i++) {
        cssPropNew = ((cssProp.charAt(i) != "-") ? cssPropNew + cssProp.charAt(i) : (++i, cssPropNew + cssProp.charAt(i).toUpperCase()));
    }
    return cssPropNew;
  }

//console.log(camelCase("margin-left")); // marginLeft
//console.log(camelCase("background-image")); // backgroundImage
//console.log(camelCase("display")); // display
//console.log("camelCase2: " + camelCase2("background-image")); // backgroundImage
//console.log("camelCase2: " + camelCase2("display")); // display
//console.log("camelCase3: " + camelCase3("background-image")); // backgroundImage
//console.log("camelCase3: " + camelCase3("display")); // display


// Question 5
//-------------------------------------------------------------------------------

function currencyAddition(float1, float2) {
  return parseFloat((float1 + float2).toFixed(2));
  //floats are added correctly
  //toFixed rounds the addition of floats and stores a string
  //parseFloat converts string back to a number
}

function currencyOperation(float1, float2, operation, precision) {
  switch (operation) {
    case "add":
      return parseFloat((float1 + float2).toFixed(precision));
      break;
    case "subtract":
      return parseFloat((float1 - float2).toFixed(precision));
      break;
    case "divide":
      return parseFloat((float1 / float2).toFixed(precision));
      break;
    case "multiply":
      return parseFloat((float1 * float2).toFixed(precision));
      break;
    default:
        return "no such operation";
  }
}

let twentyCents = 0.22;
let tenCents = 0.11;
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
//console.log(fixedTwenty + fixedTen); //why is this not working? - output is concatenating the two variables as strings
//console.log(currencyAddition(twentyCents, tenCents));
//console.log(currencyOperation(twentyCents, tenCents, "add", 2));
//console.log(currencyOperation(twentyCents, tenCents, "divide", 4));


// Question 6
//-------------------------------------------------------------------------------

function unique(duplicatesArray){
    let newArray = new Set(duplicatesArray);  //Set function creates a Set from the original array, which automatically removes any duplicate values
    return [...newArray];   //convert the set into an array
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const testDuplicates = ['Tiger', 'Tiger', 'Giraffe', 'Giraffe', 'Elephant', 'Elephant', 'Lion', 'Lion'];
//console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ] 
//console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
//console.log(unique(testDuplicates));


//Question 7
//-------------------------------------------------------------------------------
//https://sentry.io/answers/find-object-by-property-in-javascript-array/#:~:text=The%20find%20method%20iterates%20through,iterating%20and%20return%20that%20element.

function getBookTitle(bookList, bookId){
    return bookList.find(obj => obj.id == bookId).title;
}

function getOldBooks(bookList){
    //let oldBooks = [];
    //for (let i =0; i<bookList.length; i++){
    //    if(bookList[i].year > 1950){
    //        oldBooks = [...oldBooks, bookList[i]];
    //    }
    //}

    let oldBooks = bookList.filter(bookList => bookList.year > 1950); //filters the book list for books with year>1950. Creates a new object of those books
    return oldBooks;
}

function addGenre(bookList){
  let updatedBooks = books.map(item => ({...item,genre:'classic'}));
  return updatedBooks;
}

function getTitles(bookList, authorInitial){
  //filter for author Initials and then map to a new array
  let newBookList= bookList
    .filter(item => item.author.startsWith(authorInitial))
    .map(item => item.title);
  return newBookList;
}

const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
    { id: 6, title: 'My test book about cars', author: 'Henry Ford', year: 1903 }, 
];


//console.log(getBookTitle(books, 1));
//console.log(getOldBooks(books));
//console.log(addGenre(books));
//console.log(getTitles(books, "H"));


//Question 8
//-------------------------------------------------------------------------------

function printPhoneBook(contacts){
  contacts.forEach((value, key) => {
    console.log("Name: " + key + ", Number: " + value);
  });
}


const phoneBookABC = new Map(); //an empty map to begin with 
phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');

const phoneBookDEF = new Map();
const elements1 = [
  ['Danielle', '0123456789'],
  ['Elanor','9874563210'],
  ['Fred', '654789123']
];

;

elements1.map(([name, number]) => phoneBookDEF.set(name, number));
phoneBookABC.set('Caroline','024681012');
const phoneBook = new Map([...phoneBookABC]);
phoneBookDEF.forEach((value, key) => {
  phoneBook.set(key, value);
});

//console.log(phoneBookABC);
//printPhoneBook(phoneBook);


//Question 9
//-------------------------------------------------------------------------------
function sumSalaries(salaries){
  let sum = 0;
  
  for(let key in salaries){
    sum = sum + salaries[key];
  }
  return sum;
}

function topEarner(salaries){
  let greatestSalary = salaries[Object.keys(salaries)[0]];  //by default assign the first key as the largest
  let nameOfGreatestSalary = null;

 //  salaries.forEach(item => {
 //   Object.keys(item).forEach(key=>{
 //     if(item[key] > greatestSalary){
 //       greatestSalary = item[key];
 //       nameOfGreatestSalary = key;
 //     }
 //   })
 // }) //note - can't use this method because the given json object is not an array

for (let key in salaries){
  if(salaries[key] > greatestSalary){
    greatestSalary = salaries[key];
    nameOfGreatestSalary = key;
  }
}

  return nameOfGreatestSalary;
}

let salaries = { 
  "Timothy" : 35000, 
  "David" : 25000, 
  "Mary" : 55000, 
  "Christina" : 75000, 
  "James" : 43000 
};

//console.log(sumSalaries(salaries));
//console.log(topEarner(salaries));

//Question 10
//-------------------------------------------------------------------------------
function daysInBetween(date1, date2){
    const diffInTime = date2.getTime() - date1.getTime(); //time diff in milliseconds
    const milliInOneDay = 24*60*60*1000; //24hrs*60min*60sec*milli
    const diffInDays = Math.round(diffInTime/ milliInOneDay);

    return diffInDays;
}


const today = new Date(); 
console.log('Current time is ' + today.toLocaleTimeString()); 
console.log(today.getHours() + ' hours have passed so far today');
console.log((today.getMinutes()+today.getHours()*60) + ' minutes have passed so far today');
console.log((today.getSeconds()+today.getMinutes()*60+today.getHours()*60*60) + ' seconds have passed so far today');

const myBday = new Date(1995, 10-1, 30); //month is zero indexed
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let ageYear = today.getFullYear() - myBday.getFullYear();
let ageMonth = today.getMonth() - myBday.getMonth();
let ageDays = today.getDate() - myBday.getDate();
if(ageDays <= 0){
  ageDays = ageDays + monthDays[myBday.getMonth()];
}
if (ageMonth < 0){  //if the current month is before birth month, subtract a year
  ageYear--;
  ageMonth += 12;
}
console.log('I am ' + ageYear + ' years , ' + ageMonth + ' months and ' + ageDays + ' days old');

let date1 = new Date("06/12/2024");
let date2 = new Date("10/30/2024");
console.log("difference in days:", daysInBetween(date1, date2));
