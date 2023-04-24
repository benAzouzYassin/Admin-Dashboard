import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { rows, columns } from "./data";
import { useContext } from "react";
import { PagesContext } from "../../context/PagesContext";
import { UilBars } from "@iconscout/react-unicons";
function Customers({ toggleSideBar }) {
  const navigate = useNavigate();
  const pagesContext = useContext(PagesContext);
  pagesContext.setActivePage("Customers");
  return (
    <div>
      <UilBars
        onClick={toggleSideBar}
        className="cursor-pointer lg:hidden mt-0"
      />
      <div className="bg-white h-[90vh] ml-5 mt-5 rounded-xl shadow-lg  lg:w-full w-[70vw]">
        <DataGrid
          onRowDoubleClick={(params) =>
            navigate(`/user/${params.row["User ID"]}`)
          }
          columns={columns}
          rows={rows}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </div>
    </div>
  );
}
export default Customers;
