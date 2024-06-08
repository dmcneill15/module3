//Question 1
//-------------------------------------------------------------------------------
/*
function ucFirstLetters(str){
    let splitStr = str.split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' ');
}

console.log(ucFirstLetters("los angeles") ) //Los Angeles
console.log(ucFirstLetters("hello world, it's me!") ) //Los Angeles
*/

//Question 2
//-------------------------------------------------------------------------------
/*
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

console.log(truncate2('This text will be truncated if it is too long', 25)) // This text will be truncat...
*/

//Question 3
//-------------------------------------------------------------------------------
/*
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

console.log(animals);
console.log(newAnimals);
*/

//Question 4
//-------------------------------------------------------------------------------
/*
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

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display
console.log("camelCase2: " + camelCase2("background-image")); // backgroundImage
console.log("camelCase2: " + camelCase2("display")); // display
console.log("camelCase3: " + camelCase3("background-image")); // backgroundImage
console.log("camelCase3: " + camelCase3("display")); // display
*/

