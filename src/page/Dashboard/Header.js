import React from "react"; // Import React library

function Header({ setIsAdding }) {
  // Header component accepting setIsAdding function as prop
  return (
    <div className="w-screen">
      {/* Outer container */}
      <div className="bg-gray-100 py-3 w-full">
        {/* Background and padding */}
        <div className="container mx-auto flex items-center justify-center">
          {/* Centered container */}
          <header className="text-center space-y-4">
            {/* Header content */}
            <h1 className="text-4xl font-bold text-indigo-700">
              {/* Title */}
              Employee Management System
            </h1>
            {/* Button to add employee */}
            <div className="flex justify-start w-screen px-2">
              {/* Button container */}
              <button
                // Add Employee button
                className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2  focus:outline-none"
                onClick={() => setIsAdding(true)} // onClick event to trigger setIsAdding function
              >
                {/* Button text */}
                Add Employee
              </button>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default Header; // Export Header component
