

//Step 1:
console.log("----------------Step 1:----------------");

function checkEvenOrOdd(num) {
  var numValue = +num;
  if (isNaN(numValue)) {
    return `${num} is invalid`;
  } else {
    if (num % 2 == 0) {
      return `${num} is Even  `;
    } else {
      return `${num} is Odd`;
    }
  }
}

var result = checkEvenOrOdd(45);
console.log(result);

var result = checkEvenOrOdd(70);
console.log(result);

var result = checkEvenOrOdd(67);
console.log(result);

var result = checkEvenOrOdd(98);
console.log(result);

/*
var result=checkEvenOrOdd(-4);
console.log(result);

var result=checkEvenOrOdd(-15);
console.log(result);

var result=checkEvenOrOdd(null);
console.log(result);

var result=checkEvenOrOdd(undefined)
console.log(result);
*/

//Step 2:
console.log(``);
console.log("----------------Step 2:----------------");

function checkMoreThan_10_CharsOrNot(str) {
  if (str.length > 10) {
    console.log(`"${str}" contains more than 10 characters`);
  } else {
    console.log(` "${str}" does not contain more than 10 characters `);
  }
}

checkMoreThan_10_CharsOrNot("JavaScript-ES6");
//checkMoreThan_10_CharsOrNot(null);
//checkMoreThan_10_CharsOrNot(10);
//checkMoreThan_10_CharsOrNot(undefined);

//Step 3:
console.log(``);
console.log("----------------Step 3:----------------");

function checkStringStartsWith_SetOfCharsOrNot(str2, starting_str2) {
  if (str2.startsWith(starting_str2)) {
    console.log(`Given string "${str2}" starts with "${starting_str2}"`);
  } else {
    console.log(`Given string "${str2}" does not start with "${starting_str2}"`);
  }
}


checkStringStartsWith_SetOfCharsOrNot("JavaScript Language", "Java");
/*
checkStringStartsWith_SetOfCharsOrNot("JavaScript Language", "java");
checkStringStartsWith_SetOfCharsOrNot("JavaScript Language", "   Java");
checkStringStartsWith_SetOfCharsOrNot("JavaScript Language", "Steve");
*/


