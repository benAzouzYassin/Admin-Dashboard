import { Box } from "@mui/material";
import Menu from "./Menu";
import { UilMultiply } from "@iconscout/react-unicons";

function Sidebar({ isVisible, toggleSideBar }) {
  return (
    <Box
      sx={{ transition: "all 300ms ease" }}
      className={` ${
        isVisible ? "left-0" : "left-[-100%]"
      } w-1/2 absolute top-0 z-10 bg-[#ffe1bc] lg:h-[100%] h-[259vh] lg:w-auto lg:static lg:bg-none lg:block `}
    >
      <UilMultiply
        onClick={toggleSideBar}
        className="cursor-pointer lg:hidden ml-auto mt-2 mr-2 "
      />
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
