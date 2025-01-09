let employees = [];
let employeeId = 1; // This will generate a unique ID for each employee

// Function to add employee
function addEmployee() {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;
    
    // Check if all fields are filled
    if (name === "" || profession === "" || age === "") {
        document.getElementById("error").style.display = "block";
        document.getElementById("success").style.display = "none";
        return; // Stop if fields are empty
    }

    // Add employee to the array
    const newEmployee = { id: employeeId++, name, profession, age };
    employees.push(newEmployee);

    // Show success message
    document.getElementById("success").style.display = "block";
    document.getElementById("error").style.display = "none";

    // Clear form inputs
    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";

    // Display the added employees
    displayEmployees();
}

// Function to delete employee
function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees(); // Update the displayed list
}

// Function to display the list of employees
function displayEmployees() {
    const employeeListDiv = document.getElementById("employeeList");
    employeeListDiv.innerHTML = ""; // Clear the existing list

    if (employees.length === 0) {
        employeeListDiv.innerHTML = "<p>Data not found</p>"; // Show message if no employees
    } else {
        employees.forEach(employee => {
            const employeeDiv = document.createElement("div");
            employeeDiv.innerHTML = `
                <p>Name: ${employee.name}, Profession: ${employee.profession}, Age: ${employee.age} 
                <button onclick="deleteEmployee(${employee.id})">Delete</button></p>
            `;
            employeeListDiv.appendChild(employeeDiv);
        });
    }
}
