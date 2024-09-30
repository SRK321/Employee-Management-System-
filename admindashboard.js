// Selecting elements
const dashboard = document.getElementById('dashboard');
const employeeList = document.getElementById('employeeList');
const addEmployee = document.getElementById('addEmployee');
const content = document.getElementById('content');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

// Event listeners for sidebar links and big buttons
document.getElementById('bigEmpListBtn').addEventListener('click', loadEmployeeList);
document.getElementById('bigAddEmpBtn').addEventListener('click', loadAddEmployeeForm);

// Function to toggle sidebar visibility
sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('hide');
});

// Function to load the dashboard section
function loadDashboard() {
    content.innerHTML = `
        <h1 class="mb-4">Admin Dashboard</h1>
        <p>Welcome to the Admin Dashboard. You can manage employees from here.</p>

        <!-- Square Buttons in a Row -->
        <div class="row mt-4">
            <div class="col-md-6 text-center">
                <button class="btn btn-primary btn-lg btn-square" id="bigEmpListBtn">Employee List</button>
            </div>
            <div class="col-md-6 text-center">
                <button class="btn btn-success btn-lg btn-square" id="bigAddEmpBtn">Add Employee</button>
            </div>
        </div>
    `;

    // Reassign event listeners for dynamically created buttons
    document.getElementById('bigEmpListBtn').addEventListener('click', loadEmployeeList);
    document.getElementById('bigAddEmpBtn').addEventListener('click', loadAddEmployeeForm);
}

// Function to load the "Add Employee" form dynamically inside the dashboard
// Function to load the "Add Employee" form inside the dashboard dynamically
function loadAddEmployeeForm() {
    // Inject CSS styles dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        /* General body styling */
        body {
            font-family: 'Poppins', sans-serif;
            background: #f7f7f7;
            padding: 30px;
        }
        /* Section header styling */
        .section-header {
            margin-bottom: 20px;
            text-align: center;
        }
        .section-header button {
            margin-right: 15px;
            margin-bottom: 10px;
        }
        /* Section content box */
        .section-content {
            display: none;
            margin-top: 20px;
            margin-bottom: 30px;
            padding: 20px;
            border: 1px solid #dee2e6;
            border-radius: 5px;
            background-color: #f8f9fa;
        }
        /* Custom button styling */
        .btn-custom {
            background-color: #007bff;
            color: white;
            border: none;
            width: 100%;
            padding: 10px;
            font-size: 16px;
        }
        .btn-custom:hover {
            background-color: #0056b3;
        }
        /* Form field margins */
        .form-group {
            margin-bottom: 15px;
        }
    `;
    document.head.appendChild(style);

    // Now set the inner HTML content of the `content` container
    content.innerHTML = `
        <div class="container">
            <h2 class="text-center mb-5">Add Employee</h2>
            <!-- Section buttons -->
            <div class="section-header">
                <button type="button" class="btn btn-primary" onclick="toggleSection('personalDetails')">Personal Details</button>
                <button type="button" class="btn btn-primary" onclick="toggleSection('professionalDetails')">Professional Details</button>
                <button type="button" class="btn btn-primary" onclick="toggleSection('projectDetails')">Project Details</button>
                <button type="button" class="btn btn-primary" onclick="toggleSection('financeDetails')">Finance</button>
            </div>

            <!-- Personal Details Section -->
            <div id="personalDetails" class="section-content">
                <h4>Personal Details</h4>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="Enter first name" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="Enter last name" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="dob">Date of Birth</label>
                        <input type="date" class="form-control" id="dob" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="contactNumber">Contact Number</label>
                        <input type="tel" class="form-control" id="contactNumber" placeholder="Enter contact number" required>
                    </div>
                </div>
            </div>

            <!-- Professional Details Section -->
            <div id="professionalDetails" class="section-content">
                <h4>Professional Details</h4>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="employmentCode">Employment Code (6 digits)</label>
                        <input type="number" class="form-control" id="employmentCode" placeholder="Enter 6 digit employment code" required disabled>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="companyEmail">Company Email</label>
                        <input type="email" class="form-control" id="companyEmail" placeholder="Enter company email" required disabled>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="officePhone">Office Phone</label>
                        <input type="tel" class="form-control" id="officePhone" placeholder="Enter office phone" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="city">City</label>
                        <input type="text" class="form-control" id="city" placeholder="Enter city" required>
                    </div>
                </div>
            </div>

            <!-- Project Details Section -->
            <div id="projectDetails" class="section-content">
                <h4>Project Details (Optional)</h4>
                <div class="form-group">
                    <label for="projectCode">Project Code</label>
                    <input type="text" class="form-control" id="projectCode" placeholder="Enter project code">
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="startDate">Start Date</label>
                        <input type="date" class="form-control" id="startDate">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="endDate">End Date</label>
                        <input type="date" class="form-control" id="endDate">
                    </div>
                </div>
            </div>

            <!-- Finance Section -->
            <div id="financeDetails" class="section-content">
                <h4>Finance</h4>
                <div class="form-group">
                    <label for="panCard">PAN Card</label>
                    <input type="text" class="form-control" id="panCard" placeholder="Enter PAN card" required>
                </div>
                <div class="form-group">
                    <label for="aadharCard">Aadhar Card</label>
                    <input type="text" class="form-control" id="aadharCard" placeholder="Enter Aadhar card" required>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="bankName">Bank Name</label>
                        <input type="text" class="form-control" id="bankName" placeholder="Enter bank name" required>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="branchName">Branch</label>
                        <input type="text" class="form-control" id="branchName" placeholder="Enter branch name" required>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="ifscCode">IFSC Code</label>
                        <input type="text" class="form-control" id="ifscCode" placeholder="Enter IFSC code" required>
                    </div>
                </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn btn-custom btn-block">Add Employee</button>
        </div>
    `;

    // Automatically show Personal Details section when page loads
    toggleSection('personalDetails');
}


// Function to toggle between different sections of the form
function toggleSection(sectionId) {
    document.querySelectorAll('.section-content').forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function loadEmployeeList() {
    // Adding internal CSS for modal and styles
    const style = document.createElement('style');
    style.innerHTML = `
        /* Modal styling */
        .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        }
        
        /* Modal Content */
        .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%; /* 80% of the screen */
            border-radius: 10px;
        }
        
        /* Close button */
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        
        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
        
        /* Button styling */
        .modal-footer {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
        }
        .modal-footer .btn {
            margin-left: 10px;
        }
    `;
    document.head.appendChild(style);

    // HTML structure for employee list
    content.innerHTML = `
        <h1 class="mb-4">Employee List</h1>
        <table class="table table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>Employment Code</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Manager</th>
                    <th>Current Project</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- Sample Data -->
                <tr>
                    <td>EMP001</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>Manager A</td>
                    <td>Project X</td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="viewEmployee('EMP001')">View</button>
                        <button class="btn btn-warning btn-sm" onclick="editEmployee('EMP001')">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteEmployee('EMP001')">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Modal for viewing employee details -->
        <div id="employeeModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="container">
                    <h2 class="text-center mb-5">Employee Details</h2>
                    <!-- Personal Details Section -->
                    <div id="modalPersonalDetails">
                        <h4>Personal Details</h4>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="modalFirstName">First Name</label>
                                <input type="text" class="form-control" id="modalFirstName" readonly>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="modalLastName">Last Name</label>
                                <input type="text" class="form-control" id="modalLastName" readonly>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="modalDob">Date of Birth</label>
                                <input type="date" class="form-control" id="modalDob" readonly>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="modalContactNumber">Contact Number</label>
                                <input type="tel" class="form-control" id="modalContactNumber" readonly>
                            </div>
                        </div>
                    </div>

                    <!-- Professional Details Section -->
                    <div id="modalProfessionalDetails">
                        <h4>Professional Details</h4>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="modalEmploymentCode">Employment Code</label>
                                <input type="text" class="form-control" id="modalEmploymentCode" readonly>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="modalCompanyEmail">Company Email</label>
                                <input type="email" class="form-control" id="modalCompanyEmail" readonly>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="modalOfficePhone">Office Phone</label>
                                <input type="tel" class="form-control" id="modalOfficePhone" readonly>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="modalCity">City</label>
                                <input type="text" class="form-control" id="modalCity" readonly>
                            </div>
                        </div>
                    </div>

                    <!-- Project Details Section -->
                    <div id="modalProjectDetails">
                        <h4>Project Details</h4>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="modalProjectName">Current Project</label>
                                <input type="text" class="form-control" id="modalProjectName" readonly>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="modalManager">Manager</label>
                                <input type="text" class="form-control" id="modalManager" readonly>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="modalProjectStatus">Project Status</label>
                                <input type="text" class="form-control" id="modalProjectStatus" readonly>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="modalJoiningDate">Joining Date</label>
                                <input type="date" class="form-control" id="modalJoiningDate" readonly>
                            </div>
                        </div>
                    </div>

                    <!-- Finance Details Section -->
                    <div id="modalFinanceDetails">
                        <h4>Finance Details</h4>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="modalSalary">Salary</label>
                                <input type="text" class="form-control" id="modalSalary" readonly>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="modalBonus">Bonus</label>
                                <input type="text" class="form-control" id="modalBonus" readonly>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="modalBankName">Bank Name</label>
                                <input type="text" class="form-control" id="modalBankName" readonly>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="modalAccountNumber">Account Number</label>
                                <input type="text" class="form-control" id="modalAccountNumber" readonly>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

        <!-- Modal for editing employee details -->
        <div id="editEmployeeModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="container">
                    <h2 class="text-center mb-5">Edit Employee Details</h2>
                    <!-- Personal Details Section -->
                    <div id="modalPersonalDetailsEdit">
                        <h4>Personal Details</h4>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="editFirstName">First Name</label>
                                <input type="text" class="form-control" id="editFirstName" required>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="editLastName">Last Name</label>
                                <input type="text" class="form-control" id="editLastName" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="editDob">Date of Birth</label>
                                <input type="date" class="form-control" id="editDob" required>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="editContactNumber">Contact Number</label>
                                <input type="tel" class="form-control" id="editContactNumber" required>
                            </div>
                        </div>
                    </div>

                    <!-- Professional Details Section -->
                    <div id="modalProfessionalDetailsEdit">
                        <h4>Professional Details</h4>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="editEmploymentCode">Employment Code</label>
                                <input type="text" class="form-control" id="editEmploymentCode" readonly>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="editCompanyEmail">Company Email</label>
                                <input type="email" class="form-control" id="editCompanyEmail" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="editOfficePhone">Office Phone</label>
                                <input type="tel" class="form-control" id="editOfficePhone" required>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="editCity">City</label>
                                <input type="text" class="form-control" id="editCity" required>
                            </div>
                        </div>
                    </div>

                    <!-- Modal footer with Update and Cancel buttons -->
                    <div class="modal-footer">
                        <button class="btn btn-secondary" onclick="closeEditModal()">Cancel</button>
                        <button class="btn btn-primary" onclick="updateEmployeeDetails()">Update</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Event listeners for closing modals
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.onclick = function() {
            const modal = button.closest('.modal');
            modal.style.display = "none";
        }
    });

    // Clicking outside of modal to close
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    };
}

// Function to open the edit modal and populate fields
function editEmployee(empCode) {
    const modal = document.getElementById("editEmployeeModal");

    // Fetch employee details (for now, using sample data)
    const employeeData = {
        firstName: "John",
        lastName: "Doe",
        dob: "1990-01-01",
        contactNumber: "1234567890",
        employmentCode: empCode,
        companyEmail: "john.doe@example.com",
        officePhone: "0987654321",
        city: "New York",
    };

    // Populate the edit modal with employee data
    document.getElementById("editFirstName").value = employeeData.firstName;
    document.getElementById("editLastName").value = employeeData.lastName;
    document.getElementById("editDob").value = employeeData.dob;
    document.getElementById("editContactNumber").value = employeeData.contactNumber;
    document.getElementById("editEmploymentCode").value = employeeData.employmentCode;
    document.getElementById("editCompanyEmail").value = employeeData.companyEmail;
    document.getElementById("editOfficePhone").value = employeeData.officePhone;
    document.getElementById("editCity").value = employeeData.city;

    // Show the edit modal
    modal.style.display = "block";
}

// Function to close the edit modal
function closeEditModal() {
    const modal = document.getElementById("editEmployeeModal");
    modal.style.display = "none";
}

// Function to update employee details
function updateEmployeeDetails() {
    // Data validation
    const firstName = document.getElementById("editFirstName").value.trim();
    const lastName = document.getElementById("editLastName").value.trim();
    const dob = document.getElementById("editDob").value;
    const contactNumber = document.getElementById("editContactNumber").value.trim();
    const companyEmail = document.getElementById("editCompanyEmail").value.trim();
    const officePhone = document.getElementById("editOfficePhone").value.trim();
    const city = document.getElementById("editCity").value.trim();

    // Basic validation
    if (!firstName || !lastName || !dob || !contactNumber || !companyEmail || !officePhone || !city) {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate sending data to the server
    alert('Employee details updated successfully!');
    closeEditModal();
}

// Function to open the view modal and populate fields
function viewEmployee(empCode) {
    const modal = document.getElementById("employeeModal");

    // Fetch employee details (for now, using sample data)
    const employeeData = {
        firstName: "John",
        lastName: "Doe",
        dob: "1990-01-01",
        contactNumber: "1234567890",
        employmentCode: empCode,
        companyEmail: "john.doe@example.com",
        officePhone: "0987654321",
        city: "New York",
        currentProject: "Project X",
        manager: "Manager A",
        projectStatus: "Active",
        joiningDate: "2020-02-15",
        salary: "$5000",
        bonus: "$500",
        bankName: "ABC Bank",
        accountNumber: "1234567890"
    };

    // Populate personal details
    document.getElementById("modalFirstName").value = employeeData.firstName;
    document.getElementById("modalLastName").value = employeeData.lastName;
    document.getElementById("modalDob").value = employeeData.dob;
    document.getElementById("modalContactNumber").value = employeeData.contactNumber;

    // Populate professional details
    document.getElementById("modalEmploymentCode").value = employeeData.employmentCode;
    document.getElementById("modalCompanyEmail").value = employeeData.companyEmail;
    document.getElementById("modalOfficePhone").value = employeeData.officePhone;
    document.getElementById("modalCity").value = employeeData.city;

    // Populate project details
    document.getElementById("modalProjectName").value = employeeData.currentProject;
    document.getElementById("modalManager").value = employeeData.manager;
    document.getElementById("modalProjectStatus").value = employeeData.projectStatus;
    document.getElementById("modalJoiningDate").value = employeeData.joiningDate;

    // Populate finance details
    document.getElementById("modalSalary").value = employeeData.salary;
    document.getElementById("modalBonus").value = employeeData.bonus;
    document.getElementById("modalBankName").value = employeeData.bankName;
    document.getElementById("modalAccountNumber").value = employeeData.accountNumber;

    // Show the modal
    modal.style.display = "block";
}


// Example of delete function placeholder
function deleteEmployee(empCode) {
    // Simulate delete operation
    if (confirm(`Are you sure you want to delete employee with code ${empCode}?`)) {
        alert(`Employee ${empCode} deleted successfully!`);
    }
}



// Event listeners for sidebar navigation
dashboard.addEventListener('click', loadDashboard);
employeeList.addEventListener('click', loadEmployeeList);
addEmployee.addEventListener('click', loadAddEmployeeForm);

// Initial Load
loadDashboard();  // Load dashboard by default
