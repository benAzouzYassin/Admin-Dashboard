function MenuItem({ Icon, pageName, selectedPage, changeSelected }) {
  return (
    <div
      onClick={() => changeSelected(pageName)}
      className={` flex h-10 w-[95%] rounded-r-lg items-center gap-3 hover:cursor-pointer hover:bg-[#f4c7cbe2] transition-all duration-300 ${
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
