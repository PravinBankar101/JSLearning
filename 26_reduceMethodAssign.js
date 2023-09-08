const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log(`===================== Step 1: Sum of all the numbers of array  =====================`);

console.log(`---------- using traditional way - by using for loop: ----------`);
let sum = 0;
for (const element of array_numbers) {
    sum += element;
}
console.log(`Sum of all numbers of given array is: ${sum}`);

console.log(` `);
console.log(`---------- using reduce() method: ----------  `);

const totalSum = array_numbers.reduce((runningTotal, element) => {
    return runningTotal + element;
});
console.log(`Sum of all numbers of given array is: ${totalSum}`);

console.log(` `);
console.log(`===================== Step 2: Sum of the numbers which are multiple of 5 =====================`);

const newArray = array_numbers.filter(element => element % 5 == 0); //single statement arrow function
console.log(`The numbers which are multiple of 5 are: ${newArray}`);

const sumOfNumbers = newArray.reduce((runningTotal, element) => {
    return runningTotal + element;
});
console.log(`Sum of the numbers which are multiple of 5 is: ${sumOfNumbers}`);

