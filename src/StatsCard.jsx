import React from "react";

const StatsCard = ({ title, value, change, isPositive, icon }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl flex flex-col">
      <div className="flex items-center gap-2 text-gray-400">
        {icon} {title}
      </div>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
      <p
        className={`text-sm mt-1 ${
          isPositive ? "text-green-400" : "text-red-400"
        }`}
      >
        {change}
      </p>
    </div>
  );
};

export default StatsCard;
