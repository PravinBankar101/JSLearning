
function monthOfYear(monthNumber) {
    switch (monthNumber) {
      case 1:
        console.log(`You have entered '${monthNumber}' which is : 'January'`);
        break;
  
      case 2:
        console.log(`You have entered '${monthNumber}' which is : 'February'`);
        break;
  
      case 3:
        console.log(`You have entered '${monthNumber}' which is : 'March'`);
        break;
  
      case 4:
        console.log(`You have entered '${monthNumber}' which is : 'April'`);
        break;
  
      case 5:
        console.log(`You have entered '${monthNumber}' which is : 'May'`);
        break;
  
      case 6:
        console.log(`You have entered '${monthNumber}' which is : 'June'`);
        break;
  
      case 7:
        console.log(`You have entered '${monthNumber}' which is : 'July'`);
        break;
  
      case 8:
        console.log(`You have entered '${monthNumber}' which is : 'August'`);
        break;
  
      case 9:
        console.log(`You have entered '${monthNumber}' which is : 'September'`);
        break;
  
      case 10:
        console.log(`You have entered '${monthNumber}' which is : 'October'`);
        break;
  
      case 11:
        console.log(`You have entered '${monthNumber}' which is : 'November'`);
        break;
  
      case 12:
        console.log(`You have entered '${monthNumber}' which is : 'December'`);
        break;
  
      default:
          console.log(`You have entered '${monthNumber}' which is : 'Invalid input' `);
        break;
    }
  }
  
  monthOfYear(0);
  monthOfYear(2);
  monthOfYear(5);
  monthOfYear(12);
  monthOfYear(15);
  monthOfYear(100);
  monthOfYear(null);
  monthOfYear(undefined);