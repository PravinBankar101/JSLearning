
//wap to remove duplicate elements from array--(1)by using for loop (2)Dont use set or spread operator

console.log(
    `---------- Remove duplicate elements from the array by using for loop ---------- `
  );
  
  function removeDuplicates(array) {
    let tempArray = [];
  
    //using traditional for loop
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
  
      if (!tempArray.includes(element)) {
        tempArray.push(element);
      }
    }
  
    /*
  //using for of loop:-
    for (const elem of array) {
          
          if (!(tempArray.includes(elem))) {
  
              tempArray.push(elem);
              
          }
      }
  */
  
    console.log(` Array after removing duplicate elements: ${tempArray} `);
  }
  
  let array = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];
  console.log(` Original array: ${array} `);
  removeDuplicates(array);

  