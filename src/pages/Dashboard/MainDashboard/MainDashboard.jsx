import { useState } from "react";
import { UilBars } from "@iconscout/react-unicons";
import Card from "./Card";
import { cardsData } from "./data";
import ExpandedCard from "./ExpandedCard";
import RecentOrdersTable from "./RecentOrdersTable";
import { useContext } from "react";
import { PagesContext } from "../../../context/PagesContext";
function MainDashboard({ toggleSideBar }) {
  const [activeCard, setActiveCard] = useState(null);

  const closedCardsElement = cardsData.map((cardData, index) => (
    <Card {...cardData} key={index} id={index} setActiveCard={setActiveCard} />
  ));
  const pagesContext = useContext(PagesContext);
  pagesContext.setActivePage("Dashboard");
  return (
    <div className="relative ">
      <div className="flex items-center gap-2  ">
        <UilBars onClick={toggleSideBar} className="cursor-pointer lg:hidden" />
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </div>
      <div className="flex">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full w-[85vw] lg:w-full">
          {closedCardsElement}
        </div>

        {activeCard != null && (
          <ExpandedCard
            data={cardsData[activeCard]}
            className="self-center  ml-[10%] mt-10 rounded-2xl flex flex-col absolute top-10"
            close={() => setActiveCard(null)}
          />
        )}
      </div>
      <h1 className="text-4xl font-bold mt-10">Recent Orders</h1>
      <RecentOrdersTable />
    </div>
  );
}

export default MainDashboard;
