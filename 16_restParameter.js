

function add(num1, num2, ...num) {

    console.log("num1:", num1, ",", "num2:", num2);
    console.log("num:", num);   //**here num2[rest parameter] accepts an indefinite number of arguments as an "array".
    console.log(`--------------------`);
  
  
  
    let sum = num1+num2;
    for (let index = 0; index < num.length; index++) {
        let element = num[index];
        sum = sum + element;
    }
  console.log(`Sum of all the given numbers is: ${sum}`);
  console.log(`--------------------------------------------------`);
  }
  
  add(5, 6);
  add(9, 5, 7);
  add(78, 90, 51, 68);
  add(89, 90, 45, 78, 90, 51, 68);