import React from "react";
import { BarChart2, FileText, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-gray-800 p-6 flex flex-col space-y-8">
      <h1 className="text-pink-400 text-xl font-bold">Analytics Hub</h1>

      <nav className="flex flex-col space-y-4">
        <a
          href="#"
          className="flex items-center gap-2 text-gray-300 hover:text-white"
        >
          <BarChart2 size={18} /> Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-gray-300 hover:text-white"
        >
          <FileText size={18} /> Reports
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-gray-300 hover:text-white"
        >
          <Settings size={18} /> Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
