
const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];


console.log(`========================= Step 1 =========================`);

const newArray= arrayNumbers.map((currentElement)=>{
    return currentElement+10;
});

console.log('Original Array: ' , arrayNumbers);
console.log('New Array after adding 10 into each element: ', newArray);


console.log(` `);
console.log(`========================= Step 2 =========================`);

 const newArray2= arrayNumbers.map((currentValue)=>{
    return currentValue*currentValue*currentValue;
});

console.log('Original Array: ' , arrayNumbers);
console.log('New Array after taking cube of each element: ', newArray2);

console.log(` `);
console.log(`========================= Step 3 =========================`);

newArray3= arrayNumbers.map((currentValue,indexValue)=>{
    return currentValue+indexValue;
});

console.log('Original Array: ' , arrayNumbers);
console.log('New Array after adding index value into the each element: ', newArray3);



