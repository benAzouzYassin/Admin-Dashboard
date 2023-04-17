import { createContext, useState } from "react";

export const PagesContext = createContext();

export function PagesContextProvider(props) {
  const pages = ["Dashboard", "Orders", "Customers", "Products", "Analytics"];
  const [activePage, setActivePage] = useState(pages[0]);
  return (
    <PagesContext.Provider value={{ pages, activePage, setActivePage }}>
      {props.children}
    </PagesContext.Provider>
  );
}
