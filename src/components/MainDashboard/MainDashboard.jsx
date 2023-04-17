import { useState } from "react";
import Card from "./Card";
import { cardsData } from "./data";
import ExpandedCard from "./ExpandedCard";
function MainDashboard() {
  const [activeCard, setActiveCard] = useState(null);

  const closedCardsElement = cardsData.map((cardData, index) => (
    <Card {...cardData} key={index} id={index} setActiveCard={setActiveCard} />
  ));

  return (
    <div>
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="flex">
        {activeCard === null && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full w-full">
            {closedCardsElement}
          </div>
        )}

        {activeCard != null && (
          <ExpandedCard
            data={cardsData[activeCard]}
            className="self-center  ml-[10%] mt-10 rounded-2xl flex flex-col"
            close={() => setActiveCard(null)}
          />
        )}
      </div>
    </div>
  );
}

export default MainDashboard;
