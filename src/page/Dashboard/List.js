import React from 'react';

function List({ employees, handleEdit, handleDelete }) {
  // List component receiving employees array and edit/delete handlers as props

  return (
    <div className="overflow-x-auto w-screen">
      {/* Container for horizontal scrolling */}
      <table className="w-full border-collapse">
        {/* Table element */}
        <thead className="bg-blue-500 text-white">
          {/* Table header */}
          <tr>
            {/* Table header columns */}
            <th className="px-4 py-2 text-center">#</th>
            <th className="px-4 py-2 text-center">Full Name</th>
            <th className="px-4 py-2 text-center">Email</th>
            <th className="px-4 py-2 text-center">Experience</th>
            <th className="px-4 py-2 text-center">BirthDate</th>
            <th className="px-4 py-2 col-span-2 text-center">Action</th>
            {/* Edit and Delete action column */}
          </tr>
        </thead>
        <tbody>
          {/* Table body */}
          {employees.length > 0 ? ( // Check if employees array is not empty
            employees.map((employee, i) => ( // Map through each employee
              <tr key={employee.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                {/* Table row for each employee */}
                <td className="border px-4 py-2 text-center">{i + 1}</td>
                {/* Display employee number */}
                <td className="border px-4 py-2 text-center">{employee.fullname}</td>
                {/* Display employee full name */}
                <td className="border px-4 py-2 text-center">{employee.email}</td>
                {/* Display employee email */}
                <td className="border px-4 py-2 text-center">{employee.experience}</td>
                {/* Display employee experience */}
                <td className="border px-4 py-2 text-center">{employee.birthdate}</td>
                {/* Display employee birthdate */}
                <td className="border px-4 py-2 text-center">
                  {/* Action buttons for editing and deleting */}
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => handleEdit(employee.id)}
                  >
                    Edit
                  </button>
                  {/* Edit button */}
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2 transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                  {/* Delete button */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              {/* Rendered when there are no employees */}
              <td className="border px-4 py-2 col-span-7 text-center">No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
