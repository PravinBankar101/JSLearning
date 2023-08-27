// WAP to find addition of all the numbers in array using rest parameter.
//or WAP to find the addition of all the given numbers.

function add(...num) {
  let sum = 0;

  for (let index = 0; index < num.length; index++) {
    let element = num[index];
    sum = sum + element;
  }
  console.log(`Sum of all the elements of array is: ${sum}`);
  console.log(`-------------------------------------------------`);
}
console.log(`---------------------`);
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45, 78, 90, 51, 68);

// console.log(` `);
// console.log(`------Alternate way to do addition of given numbers--------`);

// function addNumbers(num1,num2,...num3 ){

//   let sum2 = num1+num2;

//   for (let index = 0; index < num3.length; index++) {
//       let element = num3[index];
//       sum2 = sum2 + element;
//   }
//   console.log(`Sum of all the given numbers is: ${sum2}`);

// }
// addNumbers(5, 6);
// addNumbers(9, 5, 6);
// addNumbers(78, 90, 51, 68);
// addNumbers(89, 90, 45,78, 90, 51, 68);
