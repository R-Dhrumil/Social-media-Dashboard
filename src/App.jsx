// src/App.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsGrid from "./components/StatsGrid";
import Charts from "./components/Charts";

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
     
      <Sidebar />

      
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 space-y-6">
          <StatsGrid />
          <Charts />
        </main>
      </div>
    </div>
  );
}

export default App;
