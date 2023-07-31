

function checkMarriageEligibility(gender, age) {
    /*  var ageValue = +age;
  
    if (gender !="Male" || gender != "Female" || isNaN(ageValue)) {
      console.log(`You entered gender '${gender}' and age '${age}': Invalid input `);
  
  
    } else {
      if (gender == "Male" && age >= 21) {
        console.log(
          `You entered gender '${gender}' and age '${age}' : You are eligible for Marriage`
        );
      } else {
        if (gender == "Female" && age >= 18) {
          console.log(
            `You entered gender '${gender}' and age '${age}' : You are eligible for Marriage`
          );
        }
      }
    }
  }
  */
  
    if (gender == "Male" && age >= 21) {
      console.log(
        `You entered gender '${gender}' and age '${age}' : You are eligible for Marriage`
      );
    } else if (gender == "Female" && age >= 18) {
      console.log(
        `You entered gender '${gender}' and age '${age}' : You are eligible for Marriage`
      );
    } else if (
      (gender == "Male" && age < 21) ||
      (gender == "Female" && age < 18)
    ) {
      console.log(
        `You entered gender '${gender}' and age '${age}': You are not eligible for marriage `
      );
    } else {
      console.log(
        `You entered gender '${gender}' and age '${age}': Invalid input `
      );
    }
  }
  
  checkMarriageEligibility("Male", 17);
  checkMarriageEligibility("Male",25);
  checkMarriageEligibility("Female",28);
  checkMarriageEligibility("Female",16);
  checkMarriageEligibility("Other",35);
  checkMarriageEligibility("Other",41);
  
  