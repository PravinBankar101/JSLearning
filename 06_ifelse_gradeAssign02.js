


var voteEligible = function(age){

    var ageValue = +age;
    if (age <= 0 || age > 130 || isNaN(ageValue)) {
        console.log(` You are having age '${age}' is : Invalid Data`);
        
    } else {

        if (age >= 18 ) {

            console.log(` You are having age '${age}' is :  eligible for vote `);
        } else {

            console.log(` You are having age '${age}' is : not eligible for vote `);
            
        }
        
    }
}

voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);
