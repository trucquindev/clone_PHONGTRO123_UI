import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Navigation, Search } from "./index";
import { Intro, Contact } from "../../componets";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { apiGetCurrentUser } from "../../services/user";
const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(actions.getProvinces());
  }, []);
  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(actions.getCurrentUser());
    }, 500);
  }, [isLoggedIn]);
  return (
    <div className="w-full flex flex-col items-center h-full gap-6">
      <Header />
      <Navigation />
      {isLoggedIn && <Search />}
      <div className="w-4/5 lg:w-3/5 flex flex-col items-start justify-start">
        <Outlet />
      </div>
      <Intro />
      <Contact />
      <div className="h-[50px]"></div>
    </div>
  );
};
export default Home;
