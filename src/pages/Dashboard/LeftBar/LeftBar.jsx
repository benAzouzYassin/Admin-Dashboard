import Notifications from "./Notifications";
import Reviews from "./Reviews";

function LeftBar() {
  return (
    <div className="ml-4 pr-5">
      <h1 className="text-3xl font-bold">Updates</h1>
      <Notifications />
      <Reviews />
    </div>
  );
}
export default LeftBar;
