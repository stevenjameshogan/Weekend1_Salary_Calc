/* jshint esversion: 6 */

// declare global variables
let employeeArray = [];
let monthlySalaryTotal = 0;

$(readyNow);

function readyNow(){ // functions to call after DOM loads
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
  let salaryIn = parseInt($('#annualSalary').val());
  let fNameHtml = '<td>' + firstNameIn + '</td>';
  let lNameHtml = '<td>' + lastNameIn + '</td>';
  let idHtml = '<td>' + idIn+ '</td>';
  let titleHtml = '<td>' + titleIn+ '</td>';
  let salaryHtml = '<td>$' + salaryIn + '</td>';
  $('#empTable').append('<tr>' + fNameHtml + lNameHtml + idHtml + titleHtml + salaryHtml + '</tr>');
  let employeeEntry = new Employee(firstNameIn, lastNameIn, idIn, titleIn, salaryIn);
  employeeArray.push(employeeEntry);
  updateSalaries(salaryIn);
  clearInputs();
}

function clearInputs(){ // clears input fields after employee is submitted
  $( '.input' ).val( '' );
}

function updateSalaries(salary) { // updates monthly salary budget, appends to DOM
  let monthlySalary = salary / 12;
  monthlySalaryTotal = monthlySalaryTotal + monthlySalary;
  $('#budgetDisplay').empty();
  $('#budgetDisplay').append(monthlySalaryTotal.toFixed(2));
  budgetCheck(monthlySalaryTotal);
}

function budgetCheck(total) { // checks if monthly budget is >= 20k, if so changes color to red
  if (total >= 20000) {
    $('#budgetDisplay').css("background-color", "red");
  }
}
