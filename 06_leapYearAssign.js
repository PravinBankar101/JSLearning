
var leapYear = function (year) {
    var yearValue = +year;
  
    if (isNaN(yearValue) || year == null) {
      console.log(`The year '${year}' is: Invalid Input`);
      return ;
    }
  
    
    if (year % 100 != 0) {
      if (year % 4 == 0) {
        console.log(`The year '${year}' is: Leap year`);
      } else {
        console.log(`The year '${year}' is: Not a Leap year`);
      }
  
  
    } else if (year % 100 == 0) {
      if (year % 100 == 0 && year % 400 == 0) {
        console.log(`The year '${year}' is: Leap year`);
      } else {
        console.log(`The year '${year}' is: Not a Leap year`);
      }
    }
  };
  
  leapYear(2020);
  leapYear(1999);
  leapYear(1600);
  leapYear(2022);
  leapYear(1945);
  leapYear(null);
  leapYear("Twenty Twenty");
  leapYear(undefined);
  leapYear(NaN);
  leapYear(1750);
  