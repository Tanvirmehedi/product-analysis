import { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartContext } from "../../components/Dashboard/Dashboard";

const AreaChart = () => {
  const chartData = useContext(chartContext);
  return (
    <div className="border-4 m-5 mx-auto rounded-md p-3">
      <BarChart width={420} height={350} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sell" fill="#8884d8" />
        <Bar dataKey="investment" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default AreaChart;
