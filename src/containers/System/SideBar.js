import React from "react";
import { useSelector } from "react-redux";
import avata from "../../assets/avata.png";
import menuSidebarSystem from "../../ultils/menuSidebarSystem";
import { NavLink } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";
import icons from "../../ultils/icons";
const activeStyle =
  "hover:bg-gray-300 py-1 flex items-center justify-center text-sm font-bold bg-gray-200 gap-2 rounded-md py-2";
const notActiveStyle =
  "hover:bg-gray-200 py-1 flex items-center text-sm gap-2 rounded-md py-2 cursor-pointer";

const SideBar = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const { CiLogout } = icons;
  return (
    <div className="w-[240px] flex-none p-4 flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <img
            src={userData?.avatar || avata}
            alt="avatar"
            className="w-12 h-12 object-cover rounded-full border-2 border-white"
          />
          <div className="flex flex-col text-sm justify-center">
            <span className="font-semibold">{userData.name}</span>
            <small>{userData.phone}</small>
          </div>
        </div>
        <span className="text-sm">
          Mã thành viên:{" "}
          <small className="font-medium">
            {userData?.id?.replace(/[^0-9]/g, "").slice(1, 10)}
          </small>
        </span>
      </div>
      <div>
        {menuSidebarSystem?.map((item) => {
          return (
            <NavLink
              key={item?.id}
              to={item?.path}
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
            >
              {item?.icon}
              {item.text}
            </NavLink>
          );
        })}
        <span
          className={notActiveStyle}
          onClick={() => {
            dispatch(actions.logout());
          }}
        >
          <CiLogout color="black" />
          Đăng xuất
        </span>
      </div>
    </div>
  );
};

export default SideBar;
