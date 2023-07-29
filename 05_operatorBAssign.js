



//Step 1:
console.log('----------------Step 1:----------------');


var greaterNumber = function (num1, num2) {

    var result = (num1 > num2) ? num1 : num2;
    console.log(`Greater number between '${num1}' and '${num2}' is : ${result}`);

}

greaterNumber(10, -10);
greaterNumber(800, 899);



//Step 2:
console.log(``);
console.log('----------------Step 2:----------------');

var isEvenOrOddNum = function (num) {
    var result = (num % 2 === 0) ? "Even" : "Odd";
    
    return result;
}

var result = isEvenOrOddNum(29);
//console.log(`Given number '${num}' is : ${result}`);
console.log(`Given number '29' is : ${result}`);

var result = isEvenOrOddNum(44);
console.log(`Given number '44' is : ${result}`);


var result = isEvenOrOddNum(0);
console.log(`Given number '0' is : ${result}`);

var result = isEvenOrOddNum(101);
console.log(`Given number '101' is : ${result}`);


//Step 3:
console.log(``);
console.log('----------------Step 3:----------------');


var wordLength = function(str){

    var str_length=str.length;
    var result = (str_length % 2 === 0) ? "Even" : "Odd";
    
    return result;
}

var str="JavaScript";
var result= wordLength(str);
console.log(`The length of given word '${str}' is : ${result}`);

var str="developer";
var result= wordLength(str);
console.log(`The length of given word '${str}' is : ${result}`);

var str="Google";
var result= wordLength(str);
console.log(`The length of given word '${str}' is : ${result}`);









