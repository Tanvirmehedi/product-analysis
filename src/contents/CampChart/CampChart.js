import React, { useContext } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartContext } from "../../components/Dashboard/Dashboard";

const CampChart = () => {
  const chartData = useContext(chartContext);
  return (
    <div className="border-4 m-5 mx-auto rounded-md p-3">
      <ComposedChart width={320} height={350} data={chartData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="investment" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default CampChart;
