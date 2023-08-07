


console.log(`-----------------------Part 1-----------------------`);


class Vehicle {
  constructor(modelName, companyName, exShowroomPrice, mileage, maxSpeed) {
    this.modelName = modelName;
    this.companyName = companyName;
    this.exShowroomPrice = exShowroomPrice;
    this.mileage = mileage;
    this.maxSpeed = maxSpeed;
  }
}

let vehicleFortuner = new Vehicle(
  "fortuner",
  "Toyota",
  "35 lacs",
  "10 kmpl",
  "190 km/hr "
);

let vehicleHarrier = new Vehicle(
  "Harrier",
  "Tata",
  "20 lacs",
  "15 kmpl",
  "180 km/hr "
);

let vehicleCiaz = new Vehicle(
  "Ciaz",
  "Maruti Suzuki",
  "12 lacs",
  "20 kmpl",
  "190 km/hr"
);

let vehicleScorpio = new Vehicle(
  "Scorpio",
  "Mahindra",
  "16 lacs",
  "15 kmpl",
  "165 km/hr "
);

let vehicleCreta = new Vehicle(
  "Creta",
  "Hyundai",
  "14 lacs",
  "16 kmpl",
  "195 km/hr "
);

const arrayOfVehicles = [
  vehicleFortuner,
  vehicleHarrier,
  vehicleCiaz,
  vehicleScorpio,
  vehicleCreta
];


console.log(`-------Traversing Array----------`);
for (const vehicleObj of arrayOfVehicles) {

    console.log(
        `Vehicle Details is--> Model Name: ${vehicleObj.modelName}, Company: ${vehicleObj.companyName}, ExShowroom Price: ${vehicleObj.companyName}, Mileage:${vehicleObj.mileage}, Top Speed: ${vehicleObj.maxSpeed} `
      );
    
}






console.log(` `);
console.log(`-----------------------Part 2-----------------------`);

class College{

collegeName;
collegeUniversity;
collegeLocation;
collegeGrade;
constructor (collegeName,collegeUniversity,collegeLocation,collegeGrade){
    this.collegeName=collegeName;
    this.collegeUniversity= collegeUniversity;
    this.collegeLocation = collegeLocation;
    this.collegeGrade = collegeGrade;
}
 display(){
    console.log(` College details--> College Name: ${this.collegeName}, University: ${this.collegeUniversity},
                  Location: ${this.collegeLocation}, Grade: ${this.collegeGrade}  `);
} 


}


let collegeFirst= new College("PCCCOE","SPPU","Pimpri Chinchwad","A");
let collegeSecond= new College("VJTI","Mumbai University","Mumbai","A+");
let collegeThird = new College("TKIT","Kolhapur ","Kolhapur","A");
let collegeFourth = new College("MIT","SPPU","kothrud","A+");

collegeFirst.display();
console.log(` `);
collegeSecond.display();
console.log(` `);
collegeThird.display();
console.log(` `);
collegeFourth.display();




console.log(` `);
console.log(`-----------------------Part 3-----------------------`);

function traverseObject(collegeObj) {

    console.log(`${collegeObj.collegeName} College Details: `);

    for (const key in collegeObj) {
        if (Object.hasOwnProperty.call(collegeObj, key)) {
            const element = collegeObj[key];
           // console.log(`The Given College Details-->  ${key}:- ${element}`); 
           console.log(` ${key}:- ${element} `);
        }
    }
    console.log(`-------------------------------------------------------`);
}

traverseObject(collegeFirst);
traverseObject(collegeSecond);
traverseObject(collegeThird);
traverseObject(collegeFourth);