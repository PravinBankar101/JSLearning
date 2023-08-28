
console.log(`--------------------step 1:  Arrow Function with no arg and no return value --------------------`);
let greet = () => {
  console.log("Good Morning, Today is Tuesday");
};
greet();

console.log(` `);
console.log(`--------------------step 2: Arrow Function with 3 args and no return value --------------------`);
let multiplication = (num1, num2, num3 = 1) => {
  let result = num1 * num2 * num3;
  console.log(`Multiplication of ${num1},${num2},${num3} is : ${result}`);
};

multiplication(5, 5, 2);
multiplication(10, 4);

console.log(` `);
console.log(`--------------------step 3: Arrow Function with 5 args and return value --------------------`);
let addition = (num1, num2, num3, num4, num5) => {
  let result = num1 + num2 + num3 + num4 + num5;
  //console.log(`Addition of ${num1},${num2},${num4},${num5} is : ${result}`);
  return result;
};

const add1 = addition(100, 100, 200, 349, 756);
console.log(`Addition of given inputs is: ${add1}`);

const add2 = addition("I am", " learning", " ES6", " features", " in depth");
console.log(`Addition of given inputs is: ${add2}`);



