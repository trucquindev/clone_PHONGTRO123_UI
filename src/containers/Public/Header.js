import React, { useCallback, useEffect, useRef, useState } from "react";
import logo from "../../assets/logowithoutbg.png";
import { Button, User } from "../../componets";
import icons from "../../ultils/icons";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import menuManager from "../../ultils/menuManager";
import { path } from "../../ultils/constain";

const { BsPlusCircleDotted, FaChevronDown, CiLogout } = icons;
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const headerRef = useRef();
  const [searchParams] = useSearchParams();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const goLogin = useCallback(
    (flag) => {
      navigate(path.LOGIN, { state: { flag } });
    },
    [navigate]
  );

  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [searchParams.get("page")]);
  return (
    <div ref={headerRef} className="w-3/5">
      <div className="w-full flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[240px] h-[70px] object-container"
          />
        </Link>
        <div className="flex items-center gap-1">
          {!isLoggedIn && (
            <div className="flex items-center gap-1">
              <small>Phongtro123.com xin chào !</small>
              <Button
                text={"Đăng nhập"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => {
                  goLogin(false);
                }}
              />
              <Button
                text={"Đăng ký"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => {
                  goLogin(true);
                }}
              />
            </div>
          )}
          {isLoggedIn && (
            <div className="flex items-center gap-3 relative">
              <div className="flex flex-col">
                <User />
              </div>
              <Button
                text={"Quản lí tài khoản"}
                textColor="text-white"
                bgColor="bg-blue-700"
                px="px-4"
                onClick={() => setIsShowMenu((prev) => !prev)}
                IcAfter={FaChevronDown}
              />
              {isShowMenu && (
                <div className="absolute min-w-200 top-full right-0 bg-white shadow-md rounded-md p-4 flex flex-col">
                  {menuManager?.map((item) => {
                    return (
                      <Link
                        key={item?.id}
                        to={item?.path}
                        className=" hover:text-orange-500 text-blue-600 border-b border-gray-200 py-1 flex items-center gap-2"
                      >
                        {item?.icon}
                        {item.text}
                      </Link>
                    );
                  })}
                  <span
                    className="cursor-pointer hover:text-orange-500 text-blue-600 py-1 flex items-center gap-2"
                    onClick={() => {
                      setIsShowMenu(false);
                      dispatch(actions.logout());
                    }}
                  >
                    <CiLogout color="black" />
                    Đăng xuất
                  </span>
                </div>
              )}
            </div>
          )}
          <Button
            text={"Đăng tin mới"}
            textColor="text-white"
            bgColor="bg-secondary2"
            IcAfter={BsPlusCircleDotted}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
