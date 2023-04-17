import { motion } from "framer-motion";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Card({ title, value, barValue, Icon, id, setActiveCard, color }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      style={{
        background: color.backGround,
        boxShadow: isHovering ? color.boxShadow : "",
      }}
      className=" rounded-xl h-48 p-4 bg-slate-50 mt-10 hover:cursor-pointer"
      layoutId={id}
      onClick={() => setActiveCard(id)}
    >
      <Icon className="ml-auto text-white"></Icon>
      <div className="flex">
        <div className="w-24">
          <CircularProgressbar
            value={barValue}
            maxValue={100}
            text={`${barValue}%`}
            styles={{
              // Customize the root svg element
              root: {},
              // Customize the path, i.e. the "completed progress"
              path: {
                // Path color
                stroke: `white`,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "round",
                // Customize transition animation
                transition: "stroke-dashoffset 0.5s ease 0s",
              },
              trail: {
                stroke: "none",
              },
              // Customize the text
              text: {
                // Text color
                fill: "white",
                fontWeight: "600",
                // Text size
                fontSize: "18px",
              },
            }}
          />
          <motion.h5 className=" text-xl text-white font-bold mt-2  ">
            {title}
          </motion.h5>
        </div>

        <div className="flex flex-col ml-auto  ">
          <motion.h2 className="text-3xl font-semibold mt-[30%] text-white">
            ${value}
          </motion.h2>
          <motion.p className=" mt-auto text-[14px] font-semibold text-white ">
            Last 24 hours
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
