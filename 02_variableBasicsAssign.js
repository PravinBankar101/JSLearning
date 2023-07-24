//Step 1:
console.log('----------------Step 1:Variables and its datatypes----------------');
var rollNo;
var firstName;
var isPresent;

var rollNo=1 ;
console.log("Roll Number:", rollNo, ",",  "     type:",typeof rollNo) ;

var firstName="Pravin";
console.log("First Name:", firstName, ",",  " type:",typeof firstName) ;

var isPresent=true ;
console.log("Is Present:", isPresent, ",",  "   type:",typeof isPresent) ;



//Step 2:
//step 2.1:null
console.log(" ");
console.log('----------------Step 2:Difference between null vs undefined----------------');
console.log(" ");
console.log('----------------Step 2.1:null----------------')

var value1= null;     //variable declared and assigned to null
console.log("Value 1=", value1,"        type of value 1:",typeof value1);

var value2=15;
console.log("Value 2=", value2, "          Multiplication of Value1*Value2 =", value1*value2)



//step 2.2:undefined
console.log(" ");
console.log('----------------Step 2.2:undefined----------------')
var val1;                   //variable declarad without assigning value to it
console.log("Value 1=", val1,"   type of value 1:",typeof val1);

var val2=15;
console.log("Value 2=", val2,"          Multiplication of Value1*Value2 =", val1*val2)
