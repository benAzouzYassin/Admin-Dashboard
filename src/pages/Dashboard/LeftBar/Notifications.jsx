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
    text: "has ordered Apple smart watch 2500mh battery.",
    timePassed: "60 seconds ago",
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
    <div className="bg-neutral-300 mb-2 text-sm flex">
      <Box
        className="w-24 h-14"
        sx={{
          background: `url(${profileImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <div>
        <p>
          <span className="font-semibold">{name}</span>
          {text}
        </p>
        <p className="pl-5">{timePassed}</p>
      </div>
    </div>
  );
}

export default Notifications;
