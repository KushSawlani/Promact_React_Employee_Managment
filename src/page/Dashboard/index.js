// Import necessary libraries and components
import Swal from "sweetalert2"; // SweetAlert2 for showing alerts
import Header from "./Header"; // Header component
import List from "./List"; // List component
import Add from "./Add"; // Add component
import Edit from "./Edit"; // Edit component
import { employeesData } from "../../data/index"; // Sample employee data
import { useState } from "react"; // useState hook for managing state

function Dashboard() {
  // Define state variables using useState hook
  const [employees, setEmployees] = useState(employeesData); // Employee data
  const [selectedemployee, setSelectedEmployee] = useState(null); // Selected employee for editing
  const [isAdding, setIsAdding] = useState(false); // Flag for showing add employee form
  const [isEditing, setISEditing] = useState(false); // Flag for showing edit employee form

  // Function to handle editing of employee data
  const handleEdit = (id) => {
    // Filter the employee whose id matches the provided id
    const [employee] = employees.filter(employee => employee.id === id);
    // Set the selected employee for editing
    setSelectedEmployee(employee);
    // Set editing mode to true
    setISEditing(true);
  };

  // Function to handle deletion of an employee
  const handleDelete = (id) => {
    // Show confirmation dialog using SweetAlert2
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure you want to delete',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'No, cancel',
    }).then(result => {
      if (result.value) { // If user confirms deletion
        // Filter the employee whose id matches the provided id
        const [employee] = employees.filter(employee => employee.id === id);
        // Show success message using SweetAlert2
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${employee.fullname}'s data has been deleted`,
          showConfirmButton: false,
          timer: 1500
        });
        // Remove the employee from the list
        setEmployees(employees.filter(employee => employee.id !== id));
      };
    });
  }

  // Render the Dashboard component
  return (
    <div className="container">
      {/* Conditional rendering based on isAdding and isEditing flags */}
      {!isAdding && !isEditing && (
        <>
          {/* Render Header and List components */}
          <Header setIsAdding={setIsAdding} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <>
          {/* Render Add component */}
          <Add
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
          />
        </>
      )}
      {isEditing && (
        <>
          {/* Render Edit component */}
          <Edit
            employees={employees}
            selectedemployee={selectedemployee}
            setEmployees={setEmployees}
            setISEditing={setISEditing}
          />
        </>
      )}
    </div>
  );
}

export default Dashboard; // Export Dashboard component
