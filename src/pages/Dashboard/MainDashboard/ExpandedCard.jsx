import { motion } from "framer-motion";
import Chart from "react-apexcharts";
import { UilSignOutAlt } from "@iconscout/react-unicons";

function ExpandedCard({ close, className, data }) {
  const chartData = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2017, 2018, 2019, 2020, 2021, 2022],
      },
    },
  };

  return (
    <motion.div
      initial={{
        x: "50%",
        width: 0,
        height: 0,
        opacity: 0,
        background: "white",
      }}
      animate={{
        x: 0,
        width: "80%",
        height: 500,
        opacity: 1,
        background: data.color.backGround,
      }}
      exit={{ opacity: 0, width: 0, height: 0 }}
      className={className}
    >
      <button onClick={() => close()} className="ml-auto mr-2 mt-5">
        <UilSignOutAlt />
      </button>
      <motion.h1 className="ml-auto mr-auto text-white font-bold text-3xl mt-8">
        {data.title}
      </motion.h1>
      <Chart
        options={chartData.options}
        series={data.series}
        type="area"
        height={350}
      />
    </motion.div>
  );
}
export default ExpandedCard;
