

//Step 1:
console.log(`----------------Step 1:----------------`);
function stringHandsOn() {
    var givenString = " Hey you are doing good, keep it up ";
    console.log(`Given string is: ${givenString}`);
}

stringHandsOn();

//Step 2:
console.log(``);
console.log(`----------------Step 2:----------------`);
var givenString = " Hey you are doing good, keep it up ";
var lengthGivenString=givenString.length;
console.log(`Length of given string is: ${lengthGivenString}`);

//Step 3:
console.log(``);
console.log(`----------------Step 3:----------------`);
var stringAfterTrim=givenString.trim();
console.log(`String after removing leading and trailing extra spaces:${stringAfterTrim}`);
console.log(`Length of String after removing leading and trailing extra spaces:${stringAfterTrim.length}`);


//Step 4:
console.log(``);
console.log(`----------------Step 4:----------------`);
var totalNoOfExtraSpaces=givenString.length-stringAfterTrim.length;
console.log(`Total number of extra spaces removed: ${totalNoOfExtraSpaces}`);


//Step 5:
console.log(``);
console.log(`----------------Step 5:----------------`);
var charAtZerothIndex=stringAfterTrim.charAt(0);
var charAtLastIndex= stringAfterTrim.charAt(stringAfterTrim.length-1);
console.log(`First character after trim:${charAtZerothIndex}    Last character after trim:${charAtLastIndex}`);

//Step 6:
console.log(``);
console.log(`----------------Step 6:----------------`);
var totalWordsAfterTrim= stringAfterTrim.split(' ');
//console.log(`Total words after in string after trim:${totalWordsAfterTrim}`);
var countOfTotalWordsAfterTrim= totalWordsAfterTrim.length;
console.log(`Count of total words in string after trim: ${countOfTotalWordsAfterTrim}`);


//Step 7:
console.log(``);
console.log(`----------------Step 7:----------------`);
console.log(`Index of word "good" from the given string: ${givenString.indexOf("good")}`);


//Step 8:
console.log(``);
console.log(`----------------Step 8:----------------`);
console.log(`substring starting from index 22 using substring() is : ${givenString.substring(22)}`); //using substring()
console.log(`substring starting from index 22 using slice() is : ${givenString.slice(22)}`); //using slice()


//Step 9:
console.log(``);
console.log(`----------------Step 9:----------------`);
console.log(`Is string ends with word the "up" : ${stringAfterTrim.endsWith("up")}`);


//Step 10:
console.log(`----------------Step 10:----------------`);
console.log(`Is string stars with word the "Hey" : ${stringAfterTrim.startsWith("Hey")}`);

