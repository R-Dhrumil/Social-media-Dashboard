import React from "react";
import StatsCard from "../StatsCard";
import { Users, ThumbsUp, MessageSquare, Share2 } from "lucide-react";

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        title="Total Followers"
        value="98.5K"
        change="+1.2% vs last month"
        isPositive={true}
        icon={<Users size={18} />}
      />
      <StatsCard
        title="Total Likes"
        value="215.3K"
        change="+3.8% vs last month"
        isPositive={true}
        icon={<ThumbsUp size={18} />}
      />
      <StatsCard
        title="Total Comments"
        value="14.1K"
        change="-0.5% vs last month"
        isPositive={false}
        icon={<MessageSquare size={18} />}
      />
      <StatsCard
        title="Total Shares"
        value="8.2K"
        change="+2.1% vs last month"
        isPositive={true}
        icon={<Share2 size={18} />}
      />
    </div>
  );
};

export default StatsGrid;
