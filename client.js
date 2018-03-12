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
  $('#empTable').on('click', '.deleteButton', deleteEmployee);
}

function updateEmployees(){ // takes user input, appends to DOM table, pushes to Employee array
  // store user inputs in unique variables
  let firstNameIn = $('#firstName').val();
  let lastNameIn = $('#lastName').val();
  let idIn = $('#idNumber').val();
  let titleIn = $('#jobTitle').val();
  let salaryIn = parseInt($('#annualSalary').val());
  // store HTML appends in unique variables
  let fNameHtml = '<td>' + firstNameIn + '</td>';
  let lNameHtml = '<td>' + lastNameIn + '</td>';
  let idHtml = '<td>' + idIn+ '</td>';
  let titleHtml = '<td>' + titleIn+ '</td>';
  let salaryHtml = '<td>$' + salaryIn + '</td>';
  let buttonHtml = '<td><button type="Button" class="deleteButton">Delete</button>';
  // append user entry and new delete button to the DOM in HTML table row
  $('#empTable').append('<tr>' + fNameHtml + lNameHtml + idHtml + titleHtml + salaryHtml + buttonHtml + '</tr>');
  // create new Employee instance using user inputs
  let employeeEntry = new Employee(firstNameIn, lastNameIn, idIn, titleIn, salaryIn);
  // add new Employee object to the main employee Array for storage and future access
  employeeArray.push(employeeEntry);
  updateSalaries(salaryIn);
  clearInputs();
}

function updateSalaries(salary) { // updates monthly salary budget, appends to DOM
  let monthlySalary = salary / 12;
  monthlySalaryTotal = monthlySalaryTotal + monthlySalary;
  $('#budgetDisplay').empty();
  $('#budgetDisplay').append(monthlySalaryTotal.toFixed(2));
  budgetCheck(monthlySalaryTotal);
}

function clearInputs(){ // clears input fields after employee is submitted
  $( '.input' ).val( '' );
}

function budgetCheck(total) { // checks if monthly budget is >= 20k, if so changes color to red
  if (total >= 20000) {
    $('#budgetDisplay').css("background-color", "red");
  }
}

function deleteEmployee() { // deletes the selected employee row from the DOM using closest() function
  $(this).closest('tr').empty();
}
