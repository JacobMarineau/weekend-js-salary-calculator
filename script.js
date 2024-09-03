document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit-btn").addEventListener("click", grabValues);
});

function grabValues(event) {
  event.preventDefault();
  const fNameValue = document.getElementById("f-Name").value;
  const lNameValue = document.getElementById("l-Name").value;
  const idValue = document.getElementById("id").value;
  const titleValue = document.getElementById("title").value;
  const salaryValue = document.getElementById("an-sal").value;
  let fName = document.getElementById("f-Name");
  let lName = document.getElementById("l-Name");
  let id = document.getElementById("id");
  let title = document.getElementById("title");
  let salary = document.getElementById("an-sal");

  const tbody = document.getElementById("t-body");
  const newT = document.createElement("tr");
  newT.classList.add("tdata");
  tbody.appendChild(newT);
  newT.innerHTML = `  
  <td>${fNameValue}</td>
  <td>${lNameValue}</td>
   <td>${idValue}</td>
    <td>${titleValue}</td>
     <td>${salaryValue}</td>
     <td>
     <button class="remButt" onClick="removeRow(event)">Remove</button>
     </td>
      `;
  resetValues();
}

function resetValues() {
  document.getElementById("f-Name").value = "";
  document.getElementById("l-Name").value = "";
  document.getElementById("id").value = "";
  document.getElementById("title").value = "";
  document.getElementById("an-sal").value = "";
}

function removeRow(event) {
  const row = event.target.closest(".tdata");
  const salaryPosition = row.children[4];
  const salary = salaryPosition.textContent;

  subtractSalaries(salary);
  row.remove();
}
let totalSalaries = 0;
function addSalaries() {
  const salary = document.getElementById("an-sal").value;
  const display = document.getElementById("h-three");
  const salaries = parseInt(salary);
  if (!isNaN(salaries)) {
    totalSalaries += salaries;
  }
  display.innerText = `Total Salaries: $${totalSalaries.toFixed(2)}`;
}
function subtractSalaries(salary) {
  const display = document.getElementById("h-three");
  const salaries = parseInt(salary);
  if (!isNaN(salaries)) {
    totalSalaries -= salaries;
  }
  display.innerText = `Total Salaries: $${totalSalaries.toFixed(2)}`;
}
