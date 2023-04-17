import { Box } from "@mui/material";
import Menu from "./Menu";

function Sidebar() {
  return (
    <Box sx={{ transition: "all 300ms ease" }}>
      <div className="flex pl-6 items-center">
        <Box
          className="w-14 h-14  "
          sx={{
            background: "url(/imgs/logo.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></Box>
        <p className="text-2xl font-semibold flex ml-2 h-fit items-center">
          Sh<span className="text-[#ff919d]">o</span>ps
        </p>
      </div>

      {/*MENU*/}
      <Menu className="flex flex-col mt-14 gap-8 " />
    </Box>
  );
}

export default Sidebar;
