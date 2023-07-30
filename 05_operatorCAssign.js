

var checkEligibilty = function (gradScore, hscScore, sscScore, candidateName) {
    var result =
      gradScore >= 70 || hscScore >= 80 || sscScore >= 90
        ?`Congrats "${candidateName}" you are eligible for TCS interview`
        :`Unfortunately "${candidateName}" you are not eligible for TCS interview `;
  
    console.log(result);
  };
  
  checkEligibilty(80, 86, 90, "Pravin");
  checkEligibilty(70, 65, 55, "Suraj");
  checkEligibilty(60, 79, 88, "Ram");

  