class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinayak = new Employee(88, "vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_vinayak,
    emp_mahi,
];

console.log(
    `------------------------------------ Step 1: Employees working in "TCS" ------------------------------------`
);

arrayEmployees.forEach((objectEmployee) => {
    if (objectEmployee.emp_company == "TCS") {
        console.log(
            `Employee name: ${objectEmployee.emp_name} , Company name: ${objectEmployee.emp_company}`
        );
    }
});

console.log(` `);
console.log(
    `------------------------------------ Step 2: Employees working in "Finance" department ------------------------------------`
);

arrayEmployees.forEach((objectEmployee) => {
    if (objectEmployee.emp_dept == "Finance") {
        console.log(
            `Employee name: ${objectEmployee.emp_name} , Department name: ${objectEmployee.emp_dept}`
        );
    }
});

console.log(` `);
console.log(
    `------------------------------------ Step 3: Employees whose name start with "R"------------------------------------`
);
arrayEmployees.forEach((objectEmployee) => {
    if (objectEmployee.emp_name.startsWith("R") == true) {
        console.log(
            `Employee id: ${objectEmployee.emp_id}, Employee Name: ${objectEmployee.emp_name}, Employee Dept: ${objectEmployee.emp_dept}, Employee Salary: ${objectEmployee.emp_salary}, Employee Company: ${objectEmployee.emp_company}`
        );
    }
});

console.log(` `);
console.log(
    `------------------------------------ Step 4: Employees having salary > 75000------------------------------------`
);
arrayEmployees.forEach((objectEmployee) => {
    if (objectEmployee.emp_salary > 75000) {
        console.log(
            `Employee Name: ${objectEmployee.emp_name}, Employee Company: ${objectEmployee.emp_company}, Employee Salary: ${objectEmployee.emp_salary}`
        );
    }
});

console.log(` `);
console.log(
    `------------------------------------ Step 5: Employees having salary >= 50000 and Department is "IT"------------------------------------`
);
arrayEmployees.forEach((objectEmployee) => {
    if (objectEmployee.emp_dept == "IT" && objectEmployee.emp_salary >= 50000) {
        console.log(
            `Employee id: ${objectEmployee.emp_id}, Employee Name: ${objectEmployee.emp_name}, Employee Department: ${objectEmployee.emp_dept}, Employee Salary: ${objectEmployee.emp_salary}, Employee Company: ${objectEmployee.emp_company}`
        );
    }
});

console.log(` `);
console.log(
    `------------------------------------ Step 6: Employees from the company "Infy"------------------------------------`
);
arrayEmployees.forEach((objectEmployee) => {
    if (objectEmployee.emp_company == "Infy") {
        console.log(
            `Employee id: ${objectEmployee.emp_id}, Employee Name: ${objectEmployee.emp_name}, Employee Department: ${objectEmployee.emp_dept}, Employee Salary: ${objectEmployee.emp_salary}, Employee Company: ${objectEmployee.emp_company}`
        );
    }
});
