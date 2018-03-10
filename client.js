/* jshint esversion: 6 */
// declare global variables

let firstNameIn = $('#firstName').val();
let lastNameIn = $('#lastName').val();
let idIn = $('#idNumber').val();
let titleIn = $('#jobTitle').val();
let salaryIn = $('#annualSalary').val();
let employeeArray = [];

$(readyNow);

function readyNow(){ // functions to call after DOM loads
  console.log('JQ');
  eventHandlers();
}

class Employee { // establishes employee class
  constructor(firstName, lastName, idNumber, jobTitle, annualSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
  }
}

function eventHandlers() { // listens for user submissions and inputs
  $('#submitButton').on('click', updateEmployees);
}

function updateEmployees(){ // takes user input, creates new Employee instance, adds to Employee array
}

function appendEmpTable(){ // appends employee info as new row in table

}
