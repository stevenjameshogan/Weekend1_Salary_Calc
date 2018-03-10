/* jshint esversion: 6 */

// declare global variables
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

function updateEmployees(){ // takes user input, appends to DOM table, pushes to Employee array
  let firstNameIn = $('#firstName').val();
  let lastNameIn = $('#lastName').val();
  let idIn = $('#idNumber').val();
  let titleIn = $('#jobTitle').val();
  let salaryIn = $('#annualSalary').val();
  let fNameHtml = '<td>' + firstNameIn + '</td>';
  let lNameHtml = '<td>' + lastNameIn + '</td>';
  let idHtml = '<td>' + idIn+ '</td>';
  let titleHtml = '<td>' + titleIn+ '</td>';
  let salaryHtml = '<td>' + salaryIn + '</td>';
  $('#empTable').append('<tr>' + fNameHtml + lNameHtml + idHtml + titleHtml + salaryHtml + '</tr>');
  let employeeEntry = new Employee(firstNameIn, lastNameIn, idIn, titleIn, salaryIn);
  employeeArray.push(employeeEntry);
  clearInputs();
}

function clearInputs(){ // clears input fields after employee is submitted
  $( '.input' ).val( '' );
}
