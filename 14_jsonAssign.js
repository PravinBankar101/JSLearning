


let jsonEmployeeInfo = `{
    "name" : "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
     "age":23,
    "doj": "11-12-2019",
     "married": false,
    "addrerss":{
        "street":"32, Laham st.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
    }`;
    

    console.log(`------------------Step 1: convert json to object------------------`);
    const objectEmployeeInfo = JSON.parse(jsonEmployeeInfo);
    
    console.log(`EmployeeInfo json details are:`, jsonEmployeeInfo);
    console.log(`EmployeeInfo object details are:`, objectEmployeeInfo);
    

    console.log(``);
    console.log(`------------------Step 2: log on console 'Dev'------------------`)
    console.log(objectEmployeeInfo.role[0]);

    console.log(``);
    console.log(`------------------Step 3: log only last name 'Melon'------------------`)
    let nameArray = objectEmployeeInfo.name.split(" ");
    console.log(nameArray[1]);

    console.log(``);
    console.log(`------------------Step 4: log only joining year of employee '2019'------------------`)
    let dateValue = new Date(objectEmployeeInfo.doj); // convert the string to date form
    console.log(`Date of Joining is : `, dateValue);
    console.log(`Year of joining is : `, dateValue.getFullYear());   // use getFullYear() to access only year



