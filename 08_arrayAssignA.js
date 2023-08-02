



//Step1: 
var arrayFruits =["Banana","Orange", "Apple","Mango","Water Melon"];

console.log(`--------- Step 1: ---------`);
console.log(`Given array is : ${arrayFruits}`);
console.log(`Number of elements in given array: ${arrayFruits.length}`);
console.log(`First element : ${arrayFruits[0]} , Last element: ${arrayFruits[arrayFruits.length-1]}`);

//Step 2:
console.log(` `);
console.log(`--------- Step 2: ---------`);
arrayFruits.unshift("Papaya");
console.log(`Add "Papaya" before the "banana"--> Result: ${arrayFruits}`); //updated array


//Step 3: 
console.log(` `);
console.log(`--------- Step 3: ---------`);
arrayFruits.splice(4,1);
console.log(`Remove "Mango" from the array--> Result: ${arrayFruits}`); //updated array


//Step 4:
console.log(` `);
console.log(`--------- Step 4: ---------`);
arrayFruits.push("Pineapple");
console.log(`Add "pineapple" at last position--> Result: ${arrayFruits}`);    //updated array


//Step 5:
console.log(` `);
console.log(`--------- Step 5: ---------`);
arrayFruits.splice(4,0,"Dragon Fruit"); 
console.log(`Add "Dragon fruit" before "Water Melon"--> Result: ${arrayFruits}`); ////updated array



//Step 6:
console.log(` `);
console.log(`--------- Step 6: ---------`);
arrayFruits.splice(2,1,"Kiwi");
console.log(`Replace an element "Orange" with "Kiwi"--> Result: ${arrayFruits}`);  //updated array


//Step 7: 
console.log(` `);
console.log(`--------- Step 7: ---------`);
var res=arrayFruits.slice(1,5)    //result //here we use slice instead of splice because we want to log 
                                           //only a part of array and dont want to update the original array
console.log(`The elements starting from index 1 to 4 --> Result: ${res}`);   



//Step 8:
console.log(` `);
console.log(`--------- Step 8: ---------`);
var thirdLastElem =arrayFruits.length-3;
var res=arrayFruits.slice(thirdLastElem);
//console.log(`Last three elements --> Result: ${arrayFruits.slice(arrayFruits.length-3)}`);
console.log(`Last three elements --> Result: ${res}`);  //result

