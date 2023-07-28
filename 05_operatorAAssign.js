
//Step 1:
console.log('----------------Step 1:----------------');


function squareOfWordLength(value1) {
    var strLength = value1.length;
    console.log(`Length Of given string "${value1}" is :${strLength}`);
    var result = strLength * strLength;
    //console.log(`Square of the length of given string is : ${result * result}`);
    return result;
}


var result = squareOfWordLength("JavaScript");
console.log(`Square of the length of given string is : ${result}`);

var result = squareOfWordLength("Google Chrome")
console.log(`Square of the length of given string is : ${result}`);

var result = squareOfWordLength("Developer Smart");
console.log(`Square of the length of given string is : ${result}`);



//Step 2: 
console.log(``);
console.log('----------------Step 2:----------------');

var stringOperations = function () {

    var str = "I am Angular Developer";
    var str_Length = str.length;
    var strWords = str.split(" ");
    var strWords_Length = strWords.length;
    var result = str_Length / strWords_Length; //string length divided by  total words in string
    var result2 = str_Length * strWords_Length; //string length multiply by total words in string
    console.log(`Length of given string "${str}" is : ${str_Length}`);
    console.log(`Total number of words available in given string : ${strWords_Length}`);
    console.log(`Division of string length and total no of words in given string : ${result}`);
    console.log(`Multiplication of string length and total no of words in given string : ${result2}`);

}

stringOperations();


