import React, { useState } from "react"; // Import React and useState hook
import Swal from "sweetalert2"; // Import SweetAlert2 library

function Edit({ employees, selectedemployee, setEmployees, setISEditing }) {
  // Destructure props and extract required variables and functions
  const id = selectedemployee.id; // Extract id of selected employee

  // Define state variables and their setter functions using useState hook
  const [fullname, setFullname] = useState(selectedemployee.fullname);
  const [department, setDepartment] = useState(selectedemployee.department);
  const [experience, setExperience] = useState(selectedemployee.experience);
  const [birthdate, setBirthdate] = useState(selectedemployee.birthdate);

  // Function to handle update of employee data
  const handleUpdate = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if any required field is empty
    if (!fullname || !department || !experience || !birthdate) {
      // If any field is empty, show error message using SweetAlert2
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required",
        showConfirmButton: true,
      });
    }

    // Create updatedEmployee object with new data
    const updatedEmployee = {
      id: id,
      fullname: fullname,
      department: department,
      experience: experience,
      birthdate: birthdate,
    };

    // Create a copy of employees array
    const updatedEmployees = [...employees];

    // Find index of selected employee in updatedEmployees array
    const index = updatedEmployees.findIndex((employee) => employee.id === id);

    // If selected employee is found
    if (index !== -1) {
      // Update employee data at found index with updatedEmployee data
      updatedEmployees[index] = updatedEmployee;

      // Update employees state with updatedEmployees array
      setEmployees(updatedEmployees);

      // Show success message using SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Updated",
        text: `${updatedEmployee.fullname} 's data has been updated`,
        showConfirmButton: false,
        timer: 1500,
      });

      // Exit editing mode by setting isEditing state to false
      setISEditing(false);
    } else {
      // If selected employee is not found, log error message to console
      console.error("Employee not found");
    }
  };

  // JSX structure for edit form component
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleUpdate} className="space-y-4">
        <h1 className="text-2xl font-semibold mb-4">Update Employee</h1>
        {/* Input field for Full Name */}
        <label
          htmlFor="fullname"
          className="block text-sm font-medium text-gray-600"
        >
          Full Name
        </label>
        <input
          id="fullname"
          type="text"
          name="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        {/* Input field for department */}
        <label
          htmlFor="department"
          className="block text-sm font-medium text-gray-600"
        >
          department
        </label>
        <input
          id="department"
          type="department"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        {/* Input field for Experience */}
        <label
          htmlFor="expereince" // Typo: Should be "experience"
          className="block text-sm font-medium text-gray-600"
        >
          Experience (in years)
        </label>
        <input
          id="experience"
          type="number"
          name="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        {/* Input field for BirthDate */}
        <label
          htmlFor="birthdate"
          className="block text-sm font-medium text-gray-600"
        >
          BirthDate
        </label>
        <input
          id="date"
          type="date"
          name="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="border rounded-md p-2 w-full"
          max={new Date().toISOString().split("T")[0]}
        />

        {/* Buttons for submitting or canceling edit */}
        <div className="mt-4 flex space-x-2">
          {/* Submit Button */}
          <input
            type="submit"
            value="Update"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 cursor-pointer"
          />
          {/* Cancel Button */}
          <input
            type="button"
            value="Cancel"
            onClick={() => setISEditing(false)}
            className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 hover:bg-gray-400 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default Edit; // Export Edit component
