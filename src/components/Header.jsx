import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-700">
      <h2 className="text-2xl font-semibold">Dashboard Overview</h2>

      <div className="flex items-center gap-4">
        <select className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md">
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>Last Year</option>
        </select>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
          Export Report
        </button>
      </div>
    </header>
  );
};

export default Header;
