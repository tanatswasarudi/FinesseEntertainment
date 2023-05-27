import React, { useState } from "react";
import pic from "../Assets/finesse.jpg";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  console.log(userData.email);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const handleLogout = () => {
    dispatch(logoutRedux());
  };
  console.log(process.env.REACT_APP_ADMIN_EMAIL);
  return (
    <header className="fixed drop-shadow-md shadow h-20 w-full z-50 ">
      {/*desktop*/}

      <div className="flex items-center shadow bg-slate-600 justify-between">
        <div className="">
          <img src={pic} className="w-23 h-20" />
        </div>
        <div className="flex items-center gap-3 md:gap-7">
          <nav className="hidden md:flex gap-4 md:gap-6 text-base text-cyan-500 md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"booking/647088ad12910f3979832dc9"}>Booking</Link>
            <Link to={"about"}>News</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className=" px-2 cursor-pointer" onClick={handleShowMenu}>
            <div className="text-3xl w-8 h-8 rounded-full overflow-hidden shadow drop-shadow">
              {userData.image ? (
                <img src={userData.image} alt="" className="h-full w-full" />
              ) : (
                <FaUserAlt />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-slate-200 py-1 px-1 w-17 flex items-center flex-col m-auto cursor-pointer shadow drop-shadow-md min-w-[100px]">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link to={"newproduct"} className="bg-slate-200 w-17">
                    Newproduct
                  </Link>
                )}

                {userData.username ? (
                  <p
                    className="cursor-pointer text-black px-2 bg-slate-600"
                    onClick={handleLogout}
                  >
                    {" "}
                    Logout ({userData.username}){" "}
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="cursor-pointer justify-center bg-slate-200 "
                  >
                    {" "}
                    Login{" "}
                  </Link>
                )}
                <nav className="flex items-center flex-col text-base md:text-lg bg-black text-cyan-500 md:hidden rounded">
                  <Link to={""}className="px-2 py-1">Home</Link>
                  <Link to={"booking/647088ad12910f3979832dc9"}className="px-2 py-1">Booking</Link>
                  <Link to={"about"}className="px-2 py-1">News</Link>
                  <Link to={"contact"}className="px-2 py-1">Contact</Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*mobile*/}
    </header>
  );
};

export default Header;
