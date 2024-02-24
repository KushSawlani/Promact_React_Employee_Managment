import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

function Add({ employees, setEmployees, setIsAdding }) {
  // State variables to manage form input values
  const [fullname, setFullname] = useState("");
  const [department, setDepartment] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [experience, setExperience] = useState();
  
  // Ref for focusing on input field
  const textInput = useRef(null);

  // useEffect to focus on input field on component mount
  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, []);

  // Function to add a new employee to the list
  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  // Event handler for form submission
  const handleAdd = (e) => {
    e.preventDefault();

    // Validation for required fields
    if (!fullname || !experience || !department || !birthdate) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required.",
        showConfirmButton: true,
        timer: 1500,
      });
    }

    // Generating an id for the new employee
    const id = employees.length + 1;
    // Creating a new employee object
    const newEmployee = {
      id,
      fullname,
      department,
      experience,
      birthdate,
    };

    // Adding the new employee to the list
    addEmployee(newEmployee);

    // Resetting the form and closing the add employee modal
    setIsAdding(false);

    // Showing success message using SweetAlert
    Swal.fire({
      icon: "success",
      title: "Added",
      text: `${fullname}'s data has been added`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // JSX for the Add Employee form
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleAdd} className="space-y-4">
        <h1 className="text-2xl font-semibold mb-4">Add Employee</h1>
        {/* Input field for Full Name */}
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-600"
        >
          First Name
        </label>
        <input
          id="fullname"
          type="text"
          name="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="border rounded-md p-2 w-full"
          ref={textInput} // Reference for focusing on this input field
        />

        {/* Input field for Department */}
        <label
          htmlFor="department"
          className="block text-sm font-medium text-gray-600"
        >
          Department
        </label>
        <input
          id="department"
          type="text"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        {/* Input field for Experience */}
        <label
          htmlFor="experience"
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

        {/* Input field for Birth Date */}
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

        {/* Buttons for adding and canceling */}
        <div className="mt-4 flex space-x-2">
          <input
            type="submit"
            value="Add"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 cursor-pointer"
          />
          <input
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
            className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 hover:bg-gray-400 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
