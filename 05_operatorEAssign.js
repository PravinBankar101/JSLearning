


// type coversion assignments


//step 1
console.log('----------------Step 1: Implicit conversion to String----------------');

let result ;
result = '3' + 2 ;
console.log(`The result of ( '3' + 2 ) is :  '${result}' `);
console.log( `Because when the numeric string is used with + operator, it gives result as string type. Therefore it will give result by concatenating both the operands`);

console.log(``);
result = '3' + true ;
console.log(`The result of ( '3' + true ) is : '${result}' `);
console.log( `Because when the numeric string is used with + operator, it gives result as string type.Therefore it will give result by concatenating both the operands`);

console.log(``);
result = '3' + undefined ;
console.log(`The result of ( '3' + undefined ) is :  '${result}' `);
console.log( `Because when the numeric string is used with + operator, it gives result as string type. Therefore it will give result by concatenating both the operands`);

console.log(``);
result = '3' + null ;
console.log(`The result of ( '3' + null ) is :  '${result}' `);
console.log( `Because when the numeric string is used with + operator, it gives result as string type.Therefore it will give result by concatenating both the operands`);







console.log(``);
console.log('----------------Step 2:Implicit boolean conversion to Number----------------');

result = '4'- true ;
console.log(`The result of ( '4'- true ) is :  ${result} `);
console.log( `Because, Here implicitly string '4' is converted to a number 4 ; and boolean true is converted to a number 1`);

console.log(``);
result = 4 + true ;
console.log(`The result of ( 4 + true ) is :  ${result} `);
console.log( `Because, Here implicitly boolean is converted to a number, so true is converted to 1`);

console.log(``);
result = 4 + false ;
console.log(`The result of ( 4 + false ) is :  ${result} `);
console.log( `Because, Here implicitly boolean is converted to a number, so false is converted to 0`);



console.log(``);
console.log('----------------Step 3:Implicit String conversion to Number----------------');

result = '4'- '2' ;
console.log(`The result of ( '4'- '2' ) is :  ${result} `);
console.log(`because here implicitly both the operands are converted into number `);
console.log(`Then it becomes--->  4 - 2 which gives 2 `);

console.log(``);
result = '4'- 2 ;
console.log(`The result of ( '4'- 2 ) is :  ${result} `);
console.log(`because here implicitly left operand '4' is converted to number 4 `);
console.log(`Then it becomes--->  4 - 2 which gives 2 `);

console.log(``);
result = '4'* 2 ;
console.log(`The result of ( '4' * 2 ) is :  ${result} `);
console.log(`because here implicitly left operand '4' is converted to number 4 `);
console.log(`Then it becomes--->  4 * 2 which gives 8 `);

console.log(``);
result = '4' / 2 ;
console.log(`The result of ( '4' / 2 ) is :  ${result} `);
console.log(`because here implicitly left operand '4' is converted to number 4 `);
console.log(`Then it becomes--->  4 / 2 which gives 2 `);