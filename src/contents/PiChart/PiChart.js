import React, { useContext } from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import { chartContext } from "../../components/Dashboard/Dashboard";

const PiChart = () => {
  const chartData = useContext(chartContext);
  return (
    <div className="border-4 m-5 mx-auto rounded-md">
      <PieChart width={320} height={350}>
        <Pie
          data={chartData}
          dataKey="investment"
          nameKey="month"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={chartData}
          dataKey="sell"
          nameKey="revenue"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PiChart;
