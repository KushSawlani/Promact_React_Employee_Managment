import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

function Add({ employees, setEmployees, setIsAdding }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [experience, setExperience] = useState();
  const textInput = useRef(null);

  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, []);

  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!fullname || !experience || !email || !birthdate) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required.",
        showConfirmButton: true,
        timer: 1500,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      fullname,
      email,
      experience,
      birthdate,
    };

    addEmployee(newEmployee);

    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added",
      text: `${fullname}'s data has been added`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleAdd} className="space-y-4">
        <h1 className="text-2xl font-semibold mb-4">Add Employee</h1>
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
