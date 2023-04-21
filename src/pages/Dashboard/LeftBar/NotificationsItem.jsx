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
export default NotificationItem;
