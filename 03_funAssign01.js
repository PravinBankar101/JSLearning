

//Step 1:
console.log('----------------Step 1:----------------');

function displayCapitalOfMaharashtra() {
    console.log("The capital of Maharashtra is Mumbai.");
}

function displayCapitalOfIndia() {
    console.log("The capital of India is New Delhi.");
}

displayCapitalOfMaharashtra(); //Invoking  displayCapitalOfMaharashtra() function
displayCapitalOfIndia();       //Invoking displayCapitalOfIndia() function


//Step 2:
console.log("");
console.log('----------------Step 2:----------------');

function personalDetails(firstName, lastName, collegeName) {
    console.log('First Name:', firstName, '  Last Name:', lastName, '  College Name:', collegeName);
}


var first_Name = "Pravin";
var last_Name = "Bankar";
var college_Name = "College Of Engg Satara";
personalDetails(first_Name, last_Name, college_Name);  //function invocation


//Step 3:
//step 3.1:
console.log("");
console.log('----------------Step 3:----------------');

function swapValues(v1, v2) {
    console.log('Before swap:', ' Value1=', v1, '   value2=', v2);

    var temp = v1;
    v1 = v2;
    v2 = temp;

    console.log('After swap:', ' Value1=', v1, '   value2=', v2);
}

//Step 3.2:
var name1 = "Virat";
var name2 = "Anushka"
swapValues(name1, name2);

//Step 3.3:
var num1 = 1000;
var num2 = 2000;
swapValues(num1, num2);

//Step 4:
//step 4.1:
console.log("");
console.log('----------------Step 4:----------------');

function addThreeValues(v1, v2, v3) {

    console.log('Values are:', v1, ',', v2, ',', v3);
    console.log('Addition=', v1 + v2 + v3);

}


//Step 4.2:
var num1 = 10.23;
var num2 = 600;
var num3 = 40;
addThreeValues(num1, num2, num3);

//Step 4.3:
var value1 = "Hello";
var value2 = "Good";
var value3 = "Morning";
addThreeValues(value1, value2, value3);

//Step 5: Normal function
//step 5.1:
console.log("");
console.log('----------------Step 5:Normal Function:----------------');

function bankDetails(bankName, accountNum, location, pinCode) {
    console.log('Bank Name:', bankName, '  Account Number:', accountNum, '  Location:', location, '  Pin Code:', pinCode);
}


//step 5.1:
var value_1 = 'CITI Bank';
var value_2 = 3456782345;
var value_3 = 'Pune';
var value_4 = 431202;
bankDetails(value_1, value_2, value_3, value_4);

//step 5.2:
var value_1 = 'Axis Bank';
var value_2 = 7856782345;
var value_3 = 'Mumbai';
var value_4 = 441202;
bankDetails(value_1, value_2, value_3, value_4);

//step 5.3:
var value_1 = 'HDFC Bank';
var value_2 = 8956782345;
var value_3 = 'Pune';
var value_4 = 631202;
var value_5 = "Open"
bankDetails(value_1, value_2, value_3, value_4);









