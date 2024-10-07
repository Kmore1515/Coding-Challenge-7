// Task 1: Create a Department Structure
 const company = {

         departments: [
    
             {
    
                 departmentName: 'Marketing', // Marketing Department with employees and their subordinates.
    
                 employees: [
    
                     {
    
                         name: 'Kyle',
    
                         salary: 100000,
    
                         subordinates: [
    
                             {
    
                                 name: 'Nicolas',
    
                                 salary: 80000,
    
                                 subordinates: [
    
                                     {
    
                                         name: 'Brandon',
    
                                         salary: 60000,
    
                                         subordinates: []
    
                                     }
    
                                 ]
    
                             }
    
                         ]
    
                     },
    
                     {
    
                         name: 'Jeremy',
    
                         salary: 90000,
    
                         subordinates: []
    
                     }
    
                 ]
    
             },
    
             {
    
                 departmentName: 'Sales', // Sales department with employees and their subordinates.
    
                 employees: [
    
                     {
    
                         name: 'Jennifer',
    
                         salary: 85000,
    
                         subordinates: [
    
                             {
    
                                 name: 'Bill',
    
                                 salary: 70000,
    
                                 subordinates: []
    
                             }
    
                         ]
    
                     },
    
                     {
    
                         name: 'Billy',
    
                         salary: 95000,
    
                         subordinates: []
    
                     }
    
                 ]
    
             }
    
         ]
    
     };

// Task 2: Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary(departmentName) {
let totalDepartmentSalary = employee.salary;

for (let subordinate of company.departments[0].employees) {
    totalDepartmentSalary += calculateDepartmentSalary(subordinate);
}
    return totalDepartmentSalary;
}
const totalDepartmentSalary = calculateDepartmentSalary(company.departments[0]);
console.log(`The Total Salary for the Marketing Department is $${totalDepartmentSalary}`);

