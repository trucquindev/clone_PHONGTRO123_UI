import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { path } from "../../ultils/constain";
import Header from "./Header";
import SideBar from "./SideBar";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";
const System = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, []);
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(actions.getCurrentUser());
    }, 500);
  }, [isLoggedIn]);
  if (!isLoggedIn) return <Navigate to={`/${path.LOGIN}`} replace={true} />;
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Header />
      <div className="flex w-full flex-auto h-screen">
        <SideBar />
        <div className="flex-auto bg-white shadow-md h-full p-4 overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default System;
