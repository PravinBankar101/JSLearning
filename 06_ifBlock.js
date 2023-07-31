
console.log('----------------if block----------------');
var num = 23;
if (num>30) {
    console.log(num);
}
console.log(`After if block`);

console.log(``);
console.log('----------------if else statement----------------');
var num = 23;
if (num%2==0) {
    console.log(`${num} is even`);
} else {
    console.log(`${num} is odd`);
}


console.log(`----------------------------------`);

function voteEligibility(age, name){
    // if block to handle all invalid scenarios
    var ageValue = +age;
    if (age<=0 || age>120 || isNaN(ageValue)) {  //*imp* here -->isNan() is used to handle inputs like age="Virat", age=null , age= undefined
        console.log(`${name} your age ${age} is invalid`); 
    
    } else {
       // if block to handle all valid scenarios
        if (age>=18) {
            console.log(`${name} you are eligible for vote`);
        } else {
            console.log(`${name} you are not eligible for vote`);
        }
    }
}

 


voteEligibility(23, "Jenny");
voteEligibility(-20, "Jenny");
voteEligibility("UK", "Jenny");
voteEligibility("30", "Jenny");
voteEligibility(null, "Jenny");
voteEligibility(undefined, "Jenny");

voteEligibility(150, "Jenny");