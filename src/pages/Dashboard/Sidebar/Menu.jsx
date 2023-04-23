import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
import MenuItem from "./MenuItem";
import { useContext } from "react";
import { PagesContext } from "../../../context/PagesContext";

function Menu({ className }) {
  const menuIcons = [
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
  ];
  const pagesContext = useContext(PagesContext);
  const pages = pagesContext.pages;
  const menuElements = menuIcons.map((Icon, index) => {
    return (
      <MenuItem
        key={index}
        Icon={Icon}
        pageName={pages[index]}
        selectedPage={pagesContext.activePage}
        changeSelected={pagesContext.setActivePage}
        route="/orders"
      />
    );
  });

  return (
    <div className={className}>
      {menuElements}
      <UilSignOutAlt className="ml-3 mt-2 hover:scale-110 hover:cursor-pointer" />
    </div>
  );
}

export default Menu;
