// test.js
import { expect } from "chai";

describe("Fun and Interesting Unit Tests", function () {
  // 1. Basic Arithmetic
  it("should return the sum of two numbers", function () {
    function sum(a, b) {
      // Students should implement this
      return a + b;
    }
    expect(sum(2, 3)).to.equal(5);
    expect(sum(-1, 1)).to.equal(0);
  });

  // 2. Fun with Emojis

  // 2.1: Return an emoji for a string keyword
  it("should return an emoji for a string keyword", function () {
    function getEmoji(keyword) {
      // See below the range of unicode characters for emojis:
      // \uD800-\uDBFF
      // \uDC00-\uDFFF

      // Students should implement this function that should return an emoji for a string keyword
      //console.log(emojiMap[keyword]);
      //console.log("\u{1F60D}");
      return emojiMap[keyword];
    }
    const emojiMap = {
      smile: "😊",
      cry: "😢",
      heart: "❤️",
    };
    expect(getEmoji("smile")).to.equal("😊");
    expect(getEmoji("cry")).to.equal("😢");
    expect(getEmoji("heart")).to.equal("❤️");
    expect(getEmoji("unknown")).to.be.undefined;
  });

  // 2.2: Count the number of emojis in a string
  it("should count the number of emojis in a string", function () {
    function countEmojis(str) {
      // Students should implement this function that counts the number of emojis in the input string str

      // https://www.npmjs.com/package/emoji-regex
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
      // https://www.stefanjudis.com/snippets/how-to-detect-emojis-in-javascript-strings/
      //There's more to it, though. When you enable Unicode mode in a regular expression, you can use Unicode property escapes. Unicode property escapes (\p{} or \P{}) allow you to match Unicode characters based on their properties and characteristics.
      // Regular expression to match emoji
      // A regular expression RegEx is a pattern of characters.
      //const emojiRegex = /(\p{Emoji_Presentation}|\p{Emoji_Modifier_Base}|\p{Emoji_Component}|\p{Extended_Pictographic})/gu;
      //const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
      const emojiRegex = /\p{Emoji_Presentation}/gu;
      let emojiCount = 0;

      Array.from(str).forEach((char) => {
        if (char.match(emojiRegex)) {
          emojiCount++;
        }
      });

      return emojiCount;
    }
    expect(countEmojis("😊😊😢")).to.equal(3);
    expect(countEmojis("Hello 😊! How are you?")).to.equal(1);
    expect(countEmojis("No emojis here!")).to.equal(0);
    // 0x1F600 - 0x1F64F
  });

  // 2.3: Replace words with emojis
  it("should replace certain words with emojis", function () {
    function replaceWithEmojis(str, emojis) {
      // Students should implement a function replaceWithEmojis(str, replacements) that replaces
      // certain words in the string str with corresponding emojis from the replacements object.

      //look forlast word in the string, fetch it from emoji map
      //get last word
      // split: splits a string into an array of substrings. trim removes whitespace from both sides of a string/each new array element
      //pop pulls out the last word
      //const words = str.trim().split(' ');
      //const lastWord = words.pop();
      // not looking for just the last word - need to search in string for a match within in emojis

      let replacementWord;
      let keyword;
      if (str.includes("happy")) {
        keyword = "happy";
        replacementWord = emojis["happy"];
      } else if (str.includes("sad")) {
        keyword = "sad";
        replacementWord = emojis["sad"];
      } else if (str.includes("love")) {
        keyword = "love";
        replacementWord = emojis["love"];
      }

      let newStr = str.replace(keyword, replacementWord);
      return newStr;
    }
    const emojis = {
      happy: "😊",
      sad: "😢",
      love: "❤️",
    };
    expect(replaceWithEmojis("I am happy", emojis)).to.equal("I am 😊");
    expect(replaceWithEmojis("I am sad", emojis)).to.equal("I am 😢");
    expect(replaceWithEmojis("I love you", emojis)).to.equal("I ❤️ you");
  });

  // 3. Create a function that checks if a number is odd
  it("should check if a number is odd", function () {
    function isOdd(num) {
      // Students should implement this function that checks if num is an odd number.
      // odd - number is not divisible by 2 - will have a remainder
      if (num % 2 != 0) return true;
      else return false;
    }
    expect(isOdd(1)).to.be.true;
    expect(isOdd(4)).to.be.false;
    expect(isOdd(17)).to.be.true;
  });

  // 4. Green Apples Eating Habit
  // 4.1
  it("My granny stopped eating green apples when she lost her teeth.", function () {
    const eatsGreenApples = (person) => {
      // Students should implement this
      if (person.hasTeeth) return true;
      else return false;
    };
    const granny = {
      hasTeeth: false,
      age: 72,
      name: "Granny Smith",
    };
    expect(eatsGreenApples(granny)).to.be.false;
  });

  // 4.2
  it("My great granny still loves eating green apples as she has teeth.", function () {
    const eatsGreenApples = (person) => {
      // Students should implement this
      if (person.hasTeeth) return true;
      else return false;
    };
    const greatGranny = {
      hasTeeth: true,
      age: 85,
      name: "Glamma",
    };
    expect(eatsGreenApples(greatGranny)).to.be.true;
  });

  // 5. Junk Food Eating Habit
  it("People should stop eating junk food at age 40 and above", function () {
    const canEatJunkFood = (person) => {
      // Students should implement this
      if (person.age > 40) return false;
      else return true;
    };
    const uncleBob = {
      hasTeeth: true,
      age: 49,
      name: "Donald Duck",
    };
    expect(canEatJunkFood(uncleBob)).to.be.false;
    const youngTom = {
      hasTeeth: true,
      age: 25,
      name: "Tom",
    };
    expect(canEatJunkFood(youngTom)).to.be.true;
  });

  // 6. String Manipulation
  it("should reverse a string", function () {
    function reverseString(str) {
      // Students should implement this function that returns the reverse of the input string str.
      //convert the string into an array of chars, can use array.reverse and then rejoi
      /*let separatedStr = [...str];
            separatedStr.reverse();
            let reversedStr = separatedStr.join("");
            return (reversedStr);
            */
      let reversedStr = [...str].reverse().join("");
      return reversedStr;
    }
    expect(reverseString("hello")).to.equal("olleh");
    expect(reverseString("world")).to.equal("dlrow");
  });

  // 7. Array Manipulation
  it("should remove duplicates from an array", function () {
    const removeDuplicates = (arr) => {
      // Students should implement this function that removes duplicate elements from the input array arr.

      //Set function creates a Set from the original array, which automatically removes any duplicate values
      // Set is an object type but can only contin unique values - no duplicates
      let newArr = new Set(arr);
      return [...newArr];
    };
    expect(removeDuplicates([1, 2, 2, 3, 3, 3])).to.deep.equal([1, 2, 3]);
    expect(removeDuplicates(["a", "a", "b", "b", "c"])).to.deep.equal([
      "a",
      "b",
      "c",
    ]);
  });

  // 8. Find the first even number in an array
  it("should find the first even number in an array", function () {
    const findFirstEven = (arr) => {
      // Students should implement this function that returns the first even number in the array arr.
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
          return arr[i];
        }
      }
      //return undefined;
    };
    expect(findFirstEven([1, 3, 7, 8, 10])).to.equal(8);
    expect(findFirstEven([1, 3, 5, 7])).to.be.undefined;
  });

  // 9. Filter out all non-positive numbers
  it("should filter out all non-positive numbers from an array", function () {
    const filterNonPositive = (arr) => {
      // Students should implement this function that filters out all non-positive numbers from the array arr.
      let positiveArr = [];
      let j = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          positiveArr[j] = arr[i];
          j++;
        }
      }
      return positiveArr;
    };
    expect(filterNonPositive([1, -2, 3, 0, -5, 6])).to.deep.equal([1, 3, 6]);
    expect(filterNonPositive([-1, -2, -3])).to.deep.equal([]);
  });

  // 10. Count occurrences of a value in an array
  it("should count the occurrences of a value in an array", function () {
    const countOccurrences = (arr, value) => {
      // Students should implement this
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
          count++;
        }
      }
      return count;
    };
    expect(countOccurrences([1, 2, 2, 3, 2, 4], 2)).to.equal(3);
    expect(countOccurrences([1, 2, 3, 4], 5)).to.equal(0);
  });

  // 11. Create a function that converts a JSON array of customers to CSV string format
  // This would be used to parse through the data received from a server
  /*Parsing JSON data from a server involves two steps: first, decoding the JSON string into a native 
  JavaScript data structure (such as an array or object), and then iterating over this structure using 
  JavaScript’s built-in methods like for...in, Object.entries, Object.values, or array methods such as forEach.*/
  it("should convert a JSON array of customers to CSV string format", function () {
    const jsonToCsv = (customers) => {
      // Students should implement this
      //customers = [object1, object2]=>customers is an array

      let csv = ""; //creates an empty placeholder for the csv string

      //get the headers
      const headers = Object.keys(customers[0]); //Get the keys that will be used as the CSV headers. Object.keys() returns an array of the object keys
      csv = csv + headers.join(",") + "\n";
   
      //get the values for each header
      /*customers.forEach(obj =>{
            const values = headers.map(header => obj[header]);
            csv = csv + values.join(',') + '\n';
        });*/

      //console.log(customers.length);  //2 objects
      
      for (let i = 0; i < customers.length; i++) {
        let rowValues = [];
        for (let j = 0; j < headers.length; j++) {
            let header = headers[j];
            rowValues.push(customers[i][header]);
        }
        csv = csv + rowValues.join(",") + "\n";
      }

      console.log(csv);
      return csv;
    };
    const customers = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "555-555-5555",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "555-555-5556",
      },
    ];
    const csv =
      "id,name,email,phone\n1,John Doe,john@example.com,555-555-5555\n2,Jane Doe,jane@example.com,555-555-5556\n";
    expect(jsonToCsv(customers)).to.equal(csv);
  });

  // 12. Create a function that converts a CSV string to an array of JSON objects
  //https://www.geeksforgeeks.org/how-to-convert-csv-to-json-in-javascript/
  it("should convert a CSV string to an array of JSON objects", function () {
    const csvToJson = (csv) => {
      // Students should implement this

      //need to spilt the one csv string into individual arrays
      let csvRows = csv.split("\n");
      const headers = csvRows[0].split(","); //further split the string into elements
      let values = "";
      const jsonData = []; //create an array to store the object pairs

      //loop through each row and assign the value to the header key pair
      //end of each loop will have an object with key-value pairs
      for (let i = 1; i < csvRows.length; i++) {
        values = csvRows[i].split(","); //split each row into elements
        const objPair = {}; //create an object to store the value pair for each row

        //loop through all the headers
        for (let j = 0; j < headers.length; j++) {
          const key = headers[j].trim(); //fetch the header
          let value = values[j].trim(); //fetch the corresponding value
          if (!isNaN(value)) {
            value = Number(value);
          }
          objPair[key] = value;
          //console.log(objPair[key]);
        }

        jsonData.push(objPair); // adds the object to the jsonData array=> jsonData[0] = object1
      }

      return jsonData;

      /*Alternative per class*/
      /*  let csvRows = csv.split("\n");
        const headers = csvRows[0].split(",");   //further split the string into elements

        class Customer {
            constructor(id,name,email, phone){
                this.id = Number(id);
                this.name = name;
                this.email=email;
                this.phone=phone;
            }
        }

        const customers = [];
        for (let i =1, i<csvRows.length, i++){
            const csvRow = csvRows[i].spilt(",");
            const customer = new Customer(csvRow[0], csvRow[1]);
            customer.push(customer);
        }
        return(customer);*/
    };
    const csv =
      "id,name,email,phone\n1,John Doe,john@example.com,555-555-5555\n2,Jane Doe,jane@example.com,555-555-5556";
    const customers = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "555-555-5555",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "555-555-5556",
      },
    ];
    expect(csvToJson(csv)).to.deep.equal(customers);
  });
});
