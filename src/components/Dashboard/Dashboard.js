import React, { createContext, useEffect, useState } from "react";
import AreaChart from "../../contents/AreaChart/AreaChart";
import CampChart from "../../contents/CampChart/CampChart";
import LinePart from "../../contents/LinePart/LinePart";
import PiChart from "../../contents/PiChart/PiChart";

export const chartContext = createContext();
const Dashboard = () => {
  const [chartData, setChartData] = useState([]);

  // Fetch Data
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((datas) => setChartData(datas));
  }, []);
  return (
    <>
      <h1 className="inline-block bg-slate-400 px-3 py-1 my-2 rounded-md font-bold text-2xl text-slate-100">
        Dashboard
      </h1>
      <chartContext.Provider value={chartData}>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:container mx-auto">
          <PiChart></PiChart>
          <AreaChart></AreaChart>
          <LinePart></LinePart>
          <CampChart></CampChart>
        </div>
      </chartContext.Provider>
    </>
  );
};

export default Dashboard;
