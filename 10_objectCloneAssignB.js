

//step 1:

console.log(`----------------------- Step 1: -----------------------`);

let bankSbi = {

    bankName: "State Bank of India",
    accNumber: "53626412563",
    ifsc:       "SBIN000967",
    interestRate: 8.4 

}
//console.log(bankSbi);
console.table(bankSbi);

console.log(` `);
console.log(`----------------------- Step 2: -----------------------`);

let bankLocation = {
    street : "M. G. road",
    city : "Delhi",
    pinCode : 110002

}

//console.log(bankLocation);
console.table(bankLocation);



console.log(` `);
console.log(`----------------------- Step 3: Clone the objects using Object.assign() method -----------------------`);

const mergedBank = Object.assign({}, bankSbi, bankLocation);
console.table(mergedBank);



console.log(` `);
console.log(`----------------------- Step 3: Clone the objects using Spread Operator -----------------------`);
const mergedBankUsingSpread = {...bankSbi, ...bankLocation};
console.table(mergedBankUsingSpread);




console.log(` `);
console.log(`----------------------- Step 4: -----------------------`);

let rateOfInterest = {
  homeLoanInterest: "10%",
  personalLoanInterest: "13%",
  duelInterest: "7%",
};
console.log(rateOfInterest);


console.log(` `);
console.log(`----------------------- Step 5:Merge all the 3 objects created in above steps -----------------------`);

let sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);




console.log(` `);
console.log(`----------------------- Step 6:Traverse the Merged object using for in loop-----------------------`);

console.log("SBI Bank Details are--> ");
for (const property in sbiDetails) {
  if (Object.hasOwnProperty.call(sbiDetails, property)) {
    const element = sbiDetails[property];
    console.log(`${property} : ${element}`);
  }
}


