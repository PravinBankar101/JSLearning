

console.log(`------------------------ Step 1: ------------------------`);
const arrayNums = [20, 3, 4, 56, 90, 400, 49];
let arrayNumsClone = arrayNums; //shallow copy
arrayNumsClone.push(55, 66);
console.log(`Original Array: ${arrayNums}`);
console.log(`Updated Shallow cloned array: ${arrayNumsClone}`);

console.log(` `);
console.log(`------------------------ Step 2: ------------------------`);
let arrayNumsClone_WithSpread = [...arrayNums]; //deep clone using spread operator
arrayNums.push(10, 25);
console.log(`Updated Original array : ${arrayNums}`);
console.log(`Deep cloned array : ${arrayNumsClone_WithSpread}`);

console.log(` `);
console.log(`------------------------ Step 3: ------------------------`);
let arrayEven = [2, 30, 14, 8];
let mergedArray = [...arrayNums, ...arrayEven];
console.log(`Merged array of arrayNums and arrayEven : ${mergedArray}`);


//console.log(`------------------------ Step 4: ------------------------`);
const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,000INR",
    aug_month: "50,000INR",
    jun_month: "65,000INR",
  },
  address: {
    locality: {
      colony: "OM Vrundavan Society",
      street: "Kanch Pokli, 431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"],
};


console.log(` `);
console.log(`------------------------ Step 5: ------------------------`);
console.log(
  `Employee Address details: ${employee_info.address.locality.colony}, ${employee_info.address.locality.street}, 
                          ${employee_info.address.city}, ${employee_info.address.state}, ${employee_info.address.country}`
);
console.log(`Employee Mobile numbers : ${employee_info.mobiles}`);



console.log(` `);
console.log(`------------------------ Step 6: ------------------------`);
let employee_info_DeepClone = JSON.parse(JSON.stringify(employee_info));  //deep copy
let SalaryUpdate_OnClone = employee_info_DeepClone.salary.july_month = "80,000INR";
let Salary_original = employee_info.salary.july_month;


// console.log(`Updated value of salary for cloned object is --->`);
// console.table(employee_info_DeepClone.salary);
// console.log(`Value of salary for Original object is ---->`);
// console.table(employee_info.salary);
console.log(`Value of July month salary for Original object is : ${Salary_original}`);
console.log(`Updated value of July month salary for cloned object is : ${SalaryUpdate_OnClone}`);




console.log(` `);
let Country_Original= employee_info.address.country;
let CountryUpdate_OnOriginal = employee_info.address.country = "United Kingdom";
console.log(`Value Of Country for original object is : ${Country_Original}`);
console.log(`Updated value of Country for original object is : ${CountryUpdate_OnOriginal}`);



