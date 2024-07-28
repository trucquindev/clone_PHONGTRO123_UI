import React from "react";
import { useSelector } from "react-redux";
import avatar from "../assets/avata.png";
const User = () => {
  const { userData } = useSelector((state) => state.user);

  return (
    <div className="flex items-center gap-2">
      <img
        src={userData?.avatar || avatar}
        alt="avatar"
        className="rounded-full h-10 w-10 object-cover border-2 shadow-md border-white"
      />
      <div className="flex flex-col justify-center text-xs">
        <span>
          Xin chào, <span className="font-semibold">{userData.name}</span>
        </span>
        <span>
          Mã tài khoản:
          <span className="font-medium">
            {userData?.id?.replace(/[^0-9]/g, "").slice(1, 10)}
          </span>
        </span>
      </div>
    </div>
  );
};

export default User;
