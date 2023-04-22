import React from "react";
import Chart from "react-apexcharts";
import { chartData } from "./data";
function Reviews() {
  return (
    <div className=" w-[85vw] lg:w-full">
      <h1 className="mt-4 text-3xl font-bold ">Reveiws</h1>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
  );
}

export default Reviews;
