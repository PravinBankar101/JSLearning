
/*WAP to find the factorial of numbers 5,9,11,7 using for loop.
Please make sure to write the code in function
*/

function getFactorial(num) {
    if (num < 0 || isNaN(num)) {
      return `The given input is Invalid, Please provide the valid input`;
    } else if (num === 0 || num === 1) {
      return 1;
    } else {
      let result = 1;
      for (let index = 1; index <= num; index++) {
        result = result * index;
      }
      return result;
    }
  }
  
  var number = 5;
  console.log(`Factorial of given number ${number} is:  ${getFactorial(number)}`);
  
  number = 9;
  console.log(`Factorial of given number ${number} is:  ${getFactorial(number)}`);
  
  number = 11;
  console.log(`Factorial of given number ${number} is:  ${getFactorial(number)}`);
  
  number = 7;
  console.log(`Factorial of given number ${number} is:  ${getFactorial(number)}`);
  
  number = -5;
  console.log(`Factorial of given number ${number} is:  ${getFactorial(number)}`);
  
  /*
  
  console.log(`------------------factorial of number using recursion---------------------`);
  function factorial(n) {
    if (num < 0 || isNaN(num)) {
      return `The given input is Invalid, Please provide the valid input`;
    }else if (n === 0 || n===1 ) {
       return 1;
     } else {
       return n * factorial(n - 1);
     }
   }
   
   var number = 5; 
   console.log(`Factorial of ${number} is:  ${factorial(number)}`);
  
   var number = 9; 
   console.log(`Factorial of ${number} is:  ${factorial(number)}`);
  
   var number = 11; 
   console.log(`Factorial of ${number} is:  ${factorial(number)}`);
  
   var number = 7; 
   console.log(`Factorial of ${number} is:  ${factorial(number)}`);
  
   */
  