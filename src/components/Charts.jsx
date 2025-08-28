// src/components/Charts.jsx
import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  // Follower Growth Data (Line Chart)
  const followerGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Followers",
        data: [80, 82, 85, 87, 90, 98.5], // Example numbers
        borderColor: "#ec4899",
        backgroundColor: "#ec4899",
        tension: 0.4, // smooth curve
        fill: false,
      },
    ],
  };

  const followerGrowthOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { ticks: { color: "#9ca3af" } },
      y: { ticks: { color: "#9ca3af" } },
    },
  };

  // Engagement by Platform Data (Bar Chart)
  const engagementData = {
    labels: ["Instagram", "Twitter", "Facebook", "LinkedIn"],
    datasets: [
      {
        label: "Engagement",
        data: [50000, 32000, 27000, 18000], // Example data
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"],
      },
    ],
  };

  const engagementOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { ticks: { color: "#9ca3af" } },
      y: { ticks: { color: "#9ca3af" } },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
     
    
      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Follower Growth</h3>
        <Line data={followerGrowthData} options={followerGrowthOptions} />
      </div>

     
      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Engagement by Platform</h3>
        <Bar data={engagementData} options={engagementOptions} />
      </div>
    </div>
  );
};

export default Charts;
