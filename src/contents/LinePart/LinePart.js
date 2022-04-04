import React, { useContext } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartContext } from "../../components/Dashboard/Dashboard";

const LinePart = () => {
  const chartData = useContext(chartContext);

  return (
    <div className="border-4 m-5 mx-auto rounded-md">
      <LineChart
        width={320}
        height={350}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
        <Line type="monotone" dataKey="revenue" stroke="#FF5733" />
      </LineChart>
    </div>
  );
};

export default LinePart;
