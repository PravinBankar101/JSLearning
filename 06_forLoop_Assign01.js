

//Step 1:
console.log(``);
console.log(`----------------Step 1:----------------`);

console.log(`The numbers from 5 to 15 by incrementing by 1 are :`);
for (let index= 5 ; index <=15 ; index++) {
    console.log(index);
}

/*
//imp-->  Way to log for loop output horizontally.
          //here we are storing all values in a single string and after completing
          // all iteration the updated whole string is log on console.
var result= " ";
for (let index = 5; index <= 15 ; index++) {
   result= result.concat(index).concat("  ")
    
}
console.log(`${result}`);
*/



//Step 2:
console.log(``);
console.log(`----------------Step 2:----------------`);

console.log(`The numbers from 50 to 40 by decrementing by 1 are :`);
for (let index = 50 ; index >=40 ; index--) {
    console.log(index);  
}


//Step 3:
console.log(``);
console.log(`----------------Step 3:----------------`);

console.log(`First 15 odd numbers are :`);
for (let index = 1; index < 30 ; index=index+2) {
    console.log(index);      
}


//Step 4:
console.log(``);
console.log(`----------------Step 4:----------------`);

console.log(`First 10 even numbers are : `);
for (let index = 0; index < 20 ; index=index+2) {
    console.log(index);  
}


//Step 5:
console.log(``);
console.log(`----------------Step 5:----------------`);

console.log(`Table of 5 in original/forward/ascending order is : `);
for (let index = 5; index <=50 ; index=index+5) {
    console.log(index);
}


//Step 6:
console.log(``);
console.log(`----------------Step 6:----------------`);

console.log(`The Table of 10 in original/forward/ascending order is  :`);
for (let index = 10 ; index <=100 ; index=index+10) {
    console.log(index);  
}


//Step 7:
console.log(``);
console.log(`----------------Step 7:----------------`);
console.log(`The Table of 10 in reverse/descending order is  :`);

for (let index = 100; index >=10 ; index=index-10) {
    console.log(index); 
}

