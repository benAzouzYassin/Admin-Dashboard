import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { rows, columns } from "./data";
function Customers() {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-[90vh] ml-5 mt-5 rounded-xl shadow-lg w-full ">
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
  );
}
export default Customers;
