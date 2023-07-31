
var result = 0 == "";
console.log(`The result of ( 0 == '' ) is :  ${result} `);
/*console.log(`Reason : When we compare using == operator, javascript internally does implicit conversion from string to 
number and then it compares it.`);
*/
console.log(`Because: Here implicitly right operand i.e. string ('') is converted to a number( here '' is converted to a number which is 0 ) `
);
console.log(`Then expression becomes --> 0 == 0 ,  which gives result as true`);

console.log(`-------------------------------------------`);
var result = 0 == "0";
console.log(`The result of ( 0 == '0' ) is :  ${result} `);
console.log(
  `Because : Here implicitly right operand ('0') is converted to a number( here '0' is converted to a number which is 0 ) `
);
console.log(`Then expression becomes --> 0 == 0 ,  which gives result as true`);

console.log(`-------------------------------------------`);
var result = 0 == false;
console.log(`The result of ( 0 == false ) is :  ${result} `);
console.log( `Because : Here implicitly right operand (false) is converted to a number( here false is converted to a number which is 0 ) `);
console.log(`Then expression becomes --> 0 == 0 ,  which gives result as true`);

console.log(`-------------------------------------------`);
var result = null == undefined;
console.log(`The result of ( null == undefined ) is :  ${result} `);
console.log(`Because:  When the == operator is used, it tries to make the operands have the same type 
  before making the comparison. Here both null and undefined are considered 'false' values, 
  and they can be loosely equated to each other`);
console.log(`Then expression becomes --> false == false ,  which gives result as true`);



console.log(`-------------------------------------------`);
var result = 1 == [1];
console.log(`The result of ( 1 == [1] ) is :  ${result} `);
console.log( `Because, Here implicitly right operand ([1]) is converted to a number( here [1] is converted to a number which is 1 ) `);
console.log(`Then expression becomes --> 1 == 1 ,  which gives result as true`);



console.log(`-------------------------------------------`);
var result = 1 == true;
console.log(`The result of ( 1 == true ) is :  ${result} `);
console.log( `Because, Here implicitly right operand (true) is converted to a number( here true is converted to a number which is 1 ) `);
console.log(`Then expression becomes --> 1 == 1 ,  which gives result as true`);


console.log(`-------------------------------------------`);
var result = 1 == '1';
console.log(`The result of ( 1 == '1' ) is :  ${result} `);
console.log( `Because, Here implicitly right operand (true) is converted to a number( here true is converted to a number which is 1 ) `);
console.log(`Then expression becomes --> 1 == '1' ,  which gives result as true`);


