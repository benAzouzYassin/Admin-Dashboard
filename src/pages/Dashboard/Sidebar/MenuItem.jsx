import { useNavigate } from "react-router-dom";

function MenuItem({ Icon, pageName, selectedPage, changeSelected, route }) {
  const navigate = useNavigate();
  const handleClick = () => {
    changeSelected(pageName);
    navigate(`/${pageName}`);
  };
  return (
    <div
      onClick={handleClick}
      className={` flex h-10  lg:w-[95%] rounded-r-lg items-center gap-3 hover:cursor-pointer hover:bg-[#f4c7cbe2] transition-all duration-300 ${
        pageName === selectedPage
          ? "bg-[#f799a354] before:w-2 before:h-full before:bg-[#ff919d]"
          : "hover:p-4"
      }`}
    >
      <Icon
        className="
      ml-3"
      />{" "}
      {pageName}
    </div>
  );
}
export default MenuItem;
