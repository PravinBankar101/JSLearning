const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];

console.log(`========================= Step 1 =========================`);

const newArray= arrayNumbers.filter((currentElement)=>{
    return currentElement > 50 ;

});

console.log('Given array: ', arrayNumbers);
console.log('Array of elements which are greater than 50: ', newArray );


console.log(` `);
console.log(`========================= Step 2 =========================`);

const newArray2= arrayNumbers.filter((currentElement)=>{
    return currentElement%2 === 0 ;

});

console.log('Array of elements which are Even : ', newArray2);


console.log(` `);
console.log(`========================= Step 3 =========================`);

const newArray3= arrayNumbers.filter((currentElement)=>{
    return currentElement%2 !== 0 ;

});

console.log('Array of elements which are Odd : ', newArray3);

console.log(` `);
console.log(`========================= Step 4 =========================`);

const newArray4= arrayNumbers.filter((currentElement)=>{
    return currentElement%5 === 0 ;

});

console.log('Array of elements which are multiple of 5 : ', newArray4);


console.log(` `);
console.log(`========================= Step 5 =========================`);

const newArray5= arrayNumbers.filter((currentElement)=>{
    return currentElement>20 && currentElement<50  ;

});

console.log('Array of elements which are between 20 and 50 : ', newArray5);

