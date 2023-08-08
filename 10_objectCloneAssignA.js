

//step 1:
let personalDetails = {
    fullName: "Pravin Bankar",
    Age: 25,
    Address: "At Post-Indapur, Dist-Pune",
    MobileNo: "9876 9876 98",
  };
  
  
  
  //step2:
  
  let collegeDetails = {
    collegeName: "JSPM Narhe",
    Branch: "Mechanical Engg",
    University: "Pune University"
  };
  
  
  
  //step 3:
  let mergedDetailsObject = Object.assign({}, personalDetails, collegeDetails);
  
  console.log(
    `After merging two objects 'personaldetails' and 'collegeDetails',the merged object is: `
  );
  console.table(mergedDetailsObject);
  
  console.log(` `);
  console.log(`------------step 4: ---------------`);
  
  let myFriends = ["Suraj", "Ranjeet", "Sachin", "Mohit", "Yash"];
  
  Object.freeze(myFriends); 
  
  for (const element of myFriends) {
    console.log(element);
  }
  
  
  
  console.log(` `);
  console.log(`------------step 5: ---------------`);
  
  function reverseSubstring(str, startIndex, endIndex) {
  
    if (startIndex >= endIndex || startIndex < 0 || endIndex > str.length) {
      return "Invalid input";
    }
  
    let reversedPart = "";
    for (let i = endIndex; i >= startIndex; i--) {
      reversedPart = reversedPart + str[i];
    }
    return reversedPart;
  }
  
  
  
  
  const originalString = "Codemind Technology";
  
  let startIndex = originalString.indexOf("Technology");
  console.log(`Start index of word "Technology" in a given string "Codemind Technology" is : ${startIndex}`);
  let endIndex = originalString.length - 1;
  console.log(`End index of word "technology" in a given string "Codemind Technology" is : ${endIndex}`);
  
  const reversedString = reverseSubstring(originalString, startIndex, endIndex);
  
  console.log(`The Output is: "${reversedString}"`); 
  
  
  
  