

console.log(`----------------Step 1:----------------`);
var getSquare = function (num1) {
    var result = num1 * num1;
    console.log(`The Square of a number '${num1}'  =  ${result}`);
}
getSquare(5);
getSquare(6);
getSquare(25);
getSquare(100);
getSquare(67.89);
getSquare(59);



console.log(``);
console.log(`----------------Step 2:----------------`);
console.log(`type of given function is : ${typeof getSquare}`);



console.log(``);
console.log(`----------------Step 3:----------------`);
var areaOfRectangle = function (length, width) {
    var result_areaOfRectanle = length * width;
    console.log(`The area of a rectangle with length '${length}' and width '${width}' = ${result_areaOfRectanle}`);
}

areaOfRectangle(499, 917);



console.log(``);
console.log(`----------------Step 4:----------------`);
var swapValues = function (v1, v2) {
    console.log('Before swap:', ' Value1=', v1, '   value2=', v2);

    var temp = v1;
    v1 = v2;
    v2 = temp;

    console.log('After swap:', ' Value1=', v1, '   value2=', v2);
}

swapValues("Mahi", "Raina");
swapValues(55, 77);



console.log(``);
console.log(`----------------Step 5:----------------`);
var stringOperations = function () {
    var givenString = "JS the most popular language of internet";
    console.log(`The given string is :${givenString}`);

    //total characters available in string
    console.log(`Total characters available in given string are : ${givenString.length}`);

    //character at index 6
    console.log(`The character at index '6' is : ${givenString.charAt(6)}`);

    //character at index 11
    console.log(`The character at index '11' is : ${givenString.charAt(11)}`);


    //last character of string
    console.log(`The last character of given string is : ${givenString.charAt(givenString.length - 1)}`);

    //First character of string
    console.log(`The first character of given string is : ${givenString.charAt(0)}`);

    //Third last character of string
    console.log(`The third last character of given string is : ${givenString.charAt(givenString.length - 3)}`);


    //Total number of words
    var words_GivenString = givenString.split(" ");
    console.log(`Total words in given string  : ${words_GivenString}`);
    var wordsCount_GivenString = words_GivenString.length;
    console.log(`Total number of words in given string are : ${wordsCount_GivenString} and its square is : ${wordsCount_GivenString * wordsCount_GivenString} `);

}


stringOperations();

