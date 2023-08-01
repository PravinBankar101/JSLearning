

//Step 1:-no of vowels-
// WAP to count total no of vowels in string
console.log(`----------------Step 1:----------------`);
function vowelCount(str) {
  let count = 0;
  let vowelspace = [];
  let index = 0;
  while (index < str.length) {
    let char = str.charAt(index);
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u" ||
      char == "A" ||
      char == "E" ||
      char == "I" ||
      char == "O" ||
      char == "U"
    ) {
      vowelspace.push(char); // or--> console.log(char);
      count = count + 1;
    }
    index++;
  }
  console.log(`The vowels are: ${vowelspace.join(", ")}`);
  console.log(`Total number of vowels is: ${count}`);
}

vowelCount("I am very good IT Developer");

//Step 2:
//WAP write a function to get sum of cube of nos from 1 to 5.
console.log(``);
console.log(`----------------Step 2:----------------`);

function sumOfCubeOfNum() {
  let sumOfCube = 0;
  for (let index = 1; index <= 5; index++) {
    const cubeOfNum = index * index * index;
    sumOfCube = sumOfCube + cubeOfNum;
    console.log(`The Cube of ${index} is : ${cubeOfNum}`);
  }
  console.log(
    `The Sum of Cube of first 5 numbers from 1 to 5 is : ${sumOfCube}`
  );
}

sumOfCubeOfNum();

//Step 3:
//  WAP to get the odd positioned characters in string without considering empty spaces
console.log(``);
console.log(`----------------Step 3:----------------`);

function oddPositionedChars(str) {
  let oddCharsResult = [];

  for (let index = 0; index < str.length; index++) {
    const char = str.charAt(index);

    if (index % 2 != 0 && char != " ") {
      
      oddCharsResult.push(char);
      
    }
  }
  console.log(`The odd positioned characters in given string are : ${oddCharsResult.join(", ")}`);
}



console.log(`Given String is : "Hard work always pays back" `);
oddPositionedChars("Hard work always pays back");

console.log(` `);
console.log(`Given String is : "Soon I will be Angular IT Champ"`);
oddPositionedChars("Soon I will be Angular IT Champ");


