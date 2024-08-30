document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit-btn").addEventListener("click", grabValues);
});

function grabValues(event) {
  event.preventDefault();
  const fName = document.getElementById("f-Name").value;
  const lname = document.getElementById("l-Name").value;
  const id = document.getElementById("id").value;
  const title = document.getElementById("title").value;
  const salary = document.getElementById("an-sal").value;

  const tbody = document.getElementById("t-body");
  const newT = document.createElement("tr");
  newT.classList.add("tdata");
  tbody.appendChild(newT);
  newT.innerHTML = `  
  <td>${fName}</td>
  <td>${lname}</td>
   <td>${id}</td>
    <td>${title}</td>
     <td>${salary}</td>
     <td>
     <button class="remButt" onClick="removeRow(event)">Remove</button>
     </td>
      `;
}

function removeRow(event) {
  event.target.closest(".tdata").remove();
}
