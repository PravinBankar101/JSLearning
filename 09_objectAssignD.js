


let professor={

    profName : "Suraj Jadhav",
    profAge : 45,
    profGender : "Male",
    profContactNo : 9876598765,
    profEmail : "surajjadhav@gmail.com",

    degrees : {
        engineering : "BTech-CSE",
        masters : "Data Science",
        phd : "Advanced Computing",

        getDegrees : function(){
           return  `Professor Degrees : ${this.engineering}, ${this.masters}, ${this.phd} `;
        }

    },

    certificates : ["Hacker Rank Certificate", "certificate in IFE course", " Certificate in Adv Programming"]


}



console.log(`--------------------------- Step 1 : ---------------------------`);
console.log(professor);


console.log(` `);
console.log(`--------------------------- Step 2 : ---------------------------`);
console.log(professor.degrees);    

console.log(` `);
console.log(`--------------------------- Step 3 : ---------------------------`);
console.log(professor.certificates);


console.log(` `);
console.log(`--------------------------- Step 4 : ---------------------------`);
console.log(professor.degrees.getDegrees());


console.log(` `);
console.log(`--------------------------- Step 5 : ---------------------------`);
professor.profExperience= "14 years" ;
console.log(professor.profExperience);


console.log(` `);
console.log(`--------------------------- Step 6 : ---------------------------`);
professor.profEmail="surajj@gmail.com";
console.log(professor);


console.log(` `);
console.log(`--------------------------- Step 7 : ---------------------------`);
professor.certificates.push("Oracle Certified");
console.log(professor.certificates);


console.log(` `);
console.log(`--------------------------- Step 8 : ---------------------------`);
let index=professor.certificates.length -1 ;
let res = professor.certificates.slice(index);
console.log(res);


