import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Edit({ employees, selectedemployee, setEmployees, setISEditing }) {
  const id = selectedemployee.id;

  const [fullname, setFullname] = useState(selectedemployee.fullname);

  const [email, setEmail] = useState(selectedemployee.email);
  const [experience, setExperience] = useState(selectedemployee.experience);
  const [birthdate, setBirthdate] = useState(selectedemployee.birthdate);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(fullname, email, birthdate, experience);
    console.log(typeof birthdate);
    if (!fullname || !email || !experience || !birthdate) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required",
        showConfirmButton: true,
      });
    }

    const updatedEmployee = {
      id: id,
      fullname: fullname,
      email: email,
      experience: experience,
      birthdate: birthdate,
    };

    const updatedEmployees = [...employees];
    const index = updatedEmployees.findIndex((employee) => employee.id === id);

    if (index !== -1) {
      updatedEmployees[index] = updatedEmployee;
      setEmployees(updatedEmployees);

      Swal.fire({
        icon: "success",
        title: "Updated",
        text: `${updatedEmployee.fullname} 's data has been updated`,
        showConfirmButton: false,
        timer: 1500,
      });

      setISEditing(false);
    } else {
      console.error("Employee not found");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleUpdate} className="space-y-4">
        <h1 className="text-2xl font-semibold mb-4">Update Employee</h1>
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

        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        <label
          htmlFor="expereince"
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
        />

        <div className="mt-4 flex space-x-2">
          <input
            type="submit"
            value="Update"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 cursor-pointer"
          />
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

export default Edit;
