

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
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

console.log(`========================= Step 1 : Employees working in TCS =========================`);

let arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];


const employeeTcs = arrayEmployees.filter((employee)=> {
    return employee.emp_company==='TCS';
  });
  //console.log(employeeTcs);

  for (const employee of employeeTcs) {
    console.log(`Company Name: ${employee.emp_company}, Employee Name: ${employee.emp_name}`);
  }

console.log(` `);
console.log(`========================= Step 2 : Average salary of employees from Wipro =========================`);

const employeeWipro = arrayEmployees.filter((employee) => {
  return employee.emp_company === "Wipro";
});
//console.log(employeeWipro);

for (const employee of employeeWipro) {
  console.log(`Company Name: ${employee.emp_company}, Employee Name: ${employee.emp_name}, Employee Salary: ${employee.emp_salary}`);
}

let SumSalaryWipro = 0;
for (const employee of employeeWipro) {
  SumSalaryWipro = SumSalaryWipro + employee.emp_salary;
}

let averageSalaryWipro = SumSalaryWipro / employeeWipro.length;
console.log(`The average salary of employees from Wipro is: ${averageSalaryWipro}`);


console.log(` `);
console.log(`========================= Step 3 : Average salary of employees from Wipro or Infy  =========================`);


const employees_WiproOrInfy = arrayEmployees.filter((employee) => {
    return employee.emp_company === "Wipro" || employee.emp_company === "Infy"  ;
  });
  //console.log(employees_WiproOrInfy);
  
  for (const employee of employees_WiproOrInfy) {
    console.log(`Company Name: ${employee.emp_company}, Employee Name: ${employee.emp_name}, Employee Salary: ${employee.emp_salary}`);
  }
  
  let SumSalary_WiproOrInfy = 0;
  for (const employee of employees_WiproOrInfy) {
    SumSalary_WiproOrInfy = SumSalary_WiproOrInfy + employee.emp_salary;
  }
  
  let averageSalary_WiproOrInfy = SumSalary_WiproOrInfy / employees_WiproOrInfy.length;
  
  console.log(`The average salary of employees from Wipro or Infy is: ${averageSalary_WiproOrInfy}`);

