
//Step 1:
console.log(
    `--------- Step 1: Find total elements available or length ---------`
  );
  const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
  console.log(`Total elements in array : ${arrayNumbers.length}`);
  
  //Step 2 :
  console.log(` `);
  console.log(
    `--------- Step 2: First element and last element of array---------`
  );
  console.log(
    `First element: ${arrayNumbers[0]} , Last element: ${
      arrayNumbers[arrayNumbers.length - 1]
    }`
  );
  
  //Step 3 :
  console.log(` `);
  console.log(
    `--------- Step 3: Third last element using length property of array---------`
  );
  console.log(`Third last element: ${arrayNumbers[arrayNumbers.length - 3]}`);
  
  //Step 4 :
  console.log(` `);
  console.log(`--------- Step 4:Find all even numbers in array ---------`);
  for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
  
    if (element % 2 == 0) {
      console.log(element);
    }
  }
  
  
  
  //Step 5 :
  console.log(` `);
  console.log(`--------- Step 5: Find all Odd numbers in array ---------`);
  for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
  
    if (element % 2 != 0) {
      console.log(element);
    }
  }
  
  
  
  //Step 6 :
  console.log(` `);
  console.log(`--------- Step 6: Find all even positioned numbers from array and sum it and log on console ---------`);
  let result=0;
  for (let index = 0; index < arrayNumbers.length; index++) {
      const element = arrayNumbers[index];
    
      if (index % 2 == 0) {
          console.log(`The element at even position ${index} is: ${element}`);
        result= result + element;
      }
    }
  
    console.log(`The Sum of all even positioned elements from array is: ${result}`);
  
  
    //Step 7 :
  console.log(` `);
  console.log(`--------- Step 7: Find all Odd positioned numbers from array and sum it and log on console ---------`);
  let res=0;
  for (let index = 0; index < arrayNumbers.length; index++) {
      const element = arrayNumbers[index];
    
      if (index % 2 != 0) {
          console.log(`The element at Odd position ${index} is: ${element}`);
        res= res + element;
      }
    }
  
    console.log(`The Sum of all Odd positioned elements from array is: ${res}`);
  
  
  
    //Step 8 :
  console.log(` `);
  console.log(`--------- Step 8:Find the sum of all elements in array ---------`);
  let res2=0;
  for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
       res2=res2 + element;
    }
  console.log(`The sum of all elements in array: ${res2}`);
  
  
   //Step 9 :
   console.log(` `);
   console.log(`--------- Step 9:Find the numbers which are multiple of 5 in array ---------`);
   for (let index = 0; index < arrayNumbers.length; index++) {
     const element = arrayNumbers[index];
   
     if (element % 5 == 0) {
       console.log(element);
     }
   }
  
    //Step 10 :
    console.log(` `);
    console.log(`--------- Step 10: Check is number 115 available in array ---------`);
    console.log(`Is number 115 available: ${arrayNumbers.includes(115)}`);
  
  
    //Step 11 :
    console.log(` `);
    console.log(`--------- Step 11: Check is number 23 available in array ---------`);
    console.log(`Is number 23 available: ${arrayNumbers.includes(23)}`);
  
  
      //Step 12 :
      console.log(` `);
      console.log(`--------- Step 12: Insert numbers 55,66 before index 3 and log array ---------`);
      console.log(arrayNumbers);
      let insertNum=arrayNumbers.splice(3,0,55,66);
      console.log(`After inserting 55,66 before index 3 in array, Updated array is: ${arrayNumbers}`);
  
  
       //Step 13 :
       console.log(` `);
       console.log(`--------- Step 12: Delete 3 elements starting from index 4 and log array ---------`);
       console.log(arrayNumbers);
       let delNum = arrayNumbers.splice(4,3);
       console.log(`After Deleting 3 elements starting from index 4, Updated array is: ${arrayNumbers}`);
  
       





       