import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function createData(product, trackingId, date, status, details) {
  return { product, trackingId, date, status, details };
}

const rows = [
  createData(
    "Lasania chicken Frie",
    128745452,
    "2 march 2022",
    "Approved",
    "Details"
  ),
  createData("Mouth Fresher", 45875452, "12 march 2022", "Pending", "Details"),
  createData("CupCake", 789745452, "30 june 2022", "Delivered", "Details"),
  createData("computer", 84874522, "30 mai 2022", "Canceled", "Details"),
];
function RecentOrdersTable() {
  const getRowStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "#34d399";

      case "Pending":
        return "#fde68a";

      case "Delivered":
        return "#60a5fa";

      case "Canceled":
        return "#fb7185";
    }
  };
  const getDetails = (id) => {
    console.log("will get details from an api and render them");
  };
  return (
    <TableContainer component={Paper} className="mt-10">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <span className="text-md font-semibold">Product</span>
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-md font-semibold">Tracking ID</span>
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-md font-semibold">Date</span>
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-md font-semibold">Status</span>
            </TableCell>
            <TableCell>
              <span className="text-md font-semibold"> </span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.product}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell> {row.trackingId}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Typography
                  className="p-2 w-fit rounded-2xl text-[#27272a]"
                  sx={{
                    background: getRowStatusColor(row.status),
                  }}
                >
                  {row.status}
                </Typography>
              </TableCell>
              <TableCell>
                <button
                  onClick={() => getDetails(row.trackingId)}
                  className="text-md bg-blue-400 p-2 rounded-xl text-white hover:bg-blue-300"
                >
                  details
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RecentOrdersTable;
