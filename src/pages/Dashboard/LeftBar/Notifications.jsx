import React from "react";
import Box from "@mui/material/Box";

export const notificationsData = [
  {
    profileImg: "/imgs/img1.png",
    name: "Andrew Thomas",
    text: "has ordered Apple smart watch 2500mh battery.",
    timePassed: "25 seconds ago",
  },
  {
    profileImg: "/imgs/img2.png",
    name: "Andrew Thomas",
    text: "has received Samsung gadget for charging battery.",
    timePassed: "30 minutes ago",
  },
  {
    profileImg: "/imgs/img3.png",
    name: "Andrew Thomas",
    text: "has ordered Apple smart watch, samsung gear 2500mh battery.",
    timePassed: "1 hour ago",
  },
];

function Notifications() {
  return (
    <div className="mt-8 w-full  bg-white p-5 h-fit rounded-xl">
      {notificationsData.map((notif) => (
        <NotificationItem
          profileImg={notif.profileImg}
          name={notif.name}
          text={notif.text}
          timePassed={notif.timePassed}
        />
      ))}
    </div>
  );
}

function NotificationItem({ profileImg, name, text, timePassed }) {
  return (
    <div className=" mb-3 text-xs flex items-center gap-2">
      <div className="mt-[-2px]">
        <img src={`${profileImg}`} width="90" alt="profile image" />
      </div>
      <div>
        <p className="leading-4">
          <span className="font-semibold">{name} </span>
          {text}
        </p>
        <p className="mt-1 text-gray-500">{timePassed}</p>
      </div>
    </div>
  );
}

export default Notifications;
