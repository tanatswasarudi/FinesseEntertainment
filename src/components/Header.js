import React, { useState } from "react";
import pic from "../Assets/finesse.jpg";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { FaWhatsappSquare } from "react-icons/fa";
import {IoMdCall} from 'react-icons/io'
import {AiFillHome,AiOutlineUserAdd} from 'react-icons/ai'
import {TbBrandBooking} from 'react-icons/tb'
import {MdRoundaboutRight,MdProductionQuantityLimits} from 'react-icons/md'
import {FcBusinessContact} from 'react-icons/fc'
import {BiUserMinus}from 'react-icons/bi'
import {BsSpeakerFill} from 'react-icons/bs'

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
  const phoneNumber = '+263 783-677-124'; // Replace with the desired recipient's phone number

  const handleCallRequest = () => {
    const message = 'Please call me back!'; // Customize the call request message
    const callUrl = `tel:${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(callUrl);
  };

  const connectWithWhatsApp = () => {
    // Replace the following with your WhatsApp number
    const phoneNumber = '+263 783-677-124';

    // Create the WhatsApp URL
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    // Open the WhatsApp URL
    window.open(url);
  }


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
            <Link to={"about"}>About</Link>
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
              <div className="absolute  bg-purple-700 right-2 py-1 font-serif w-36 flex items-center flex-col m-auto cursor-pointer shadow rounded min-w-[100px]">
                <nav className="flex items-center flex-col text-base w-32 px-2 py-1 md:text-lg bg-black text-cyan-500 ">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link to={"newproduct"} className="   hover:text-cyan-900 ">
                    <MdProductionQuantityLimits/>
                  Newproduct
                  </Link> &&
                   <Link to={"shows"} className="">
                    <BsSpeakerFill/>
                  Shows
                 </Link>
                )}

                {userData.username ? (
                  <p
                    className=""
                    onClick={handleLogout}
                  >
                    {" "}
                    <BiUserMinus/>
                   <span className="text-sm mb-6">Logout({userData.username}){" "}</span>
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="mb-6"
                  >
                    {" "}
                    <AiOutlineUserAdd/>
                    Login{" "}
                  </Link>
                )}
                
                  <Link to={""}className="mb-6 "><AiFillHome/>Home</Link>
                  <Link to={"booking/647088ad12910f3979832dc9"}className="mb-6"><TbBrandBooking/>Booking</Link>
                  <Link to={"about"}className="mb-6"><MdRoundaboutRight/>About</Link>
                  <Link to={"contact"}className="mb-6"><FcBusinessContact/>Contact</Link>
                  <FaWhatsappSquare onClick={connectWithWhatsApp} className="text-3xl mb-6 text-green-600"/>
                  <IoMdCall onClick={handleCallRequest} className="text-blue-500 text-3xl"/>

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
