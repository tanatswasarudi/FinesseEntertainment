import React from "react";
import { BsChevronBarRight, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import {IoMdCall} from 'react-icons/io'
import { Link } from "react-router-dom";
import {BiChevronRight} from 'react-icons/bi'
import {home} from "../Pages/Home"


const Footer = ({id}) => {
  return (
    <footer className="bg-gray-900 text-gray-200 items-center">
      <div className="p-10"> 
        <div className="max-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5 pb-4">
            <h4 className="pb-4 text-red-500">Company</h4>
              <p className="text-gray-500">
              <span className="flex flex-row items-center cursor-pointer font-serif hover:text-yellow-500"><MdEmail/><strong>Email:</strong>finesseentertainment@gmail.com</span><br/>
              <span className="flex flex-row items-center cursor-pointer font-serif hover:text-yellow-500"><BsFacebook /><strong>Facebook: </strong>FinesseEntertainment</span><br/>
              <span className="flex flex-row items-center cursor-pointer font-serif hover:text-yellow-500"><FaWhatsappSquare /><strong>WhatsApp:</strong>+918264420815</span><br/>
              </p>
              
            </div>
            <div className="mb-5 items-center cursor-pointer">
            <h4 className="text-red-500 pb-4 ">Useful Links</h4>
            <ul className="text-gray-500">
              <li className="pb-4"><span className="flex items-center flex-row hover:text-yellow-500 "><Link to={""} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})}> </Link> <BsChevronBarRight/>HOME</span></li>
              <li className="pb-4"><span className="flex items-center flex-row hover:text-yellow-500"><Link to={"booking/647088ad12910f3979832dc9"}></Link><BsChevronBarRight/>BOOKING</span> </li>
              <li className="pb-4"><span className="flex items-center flex-row hover:text-yellow-500"><Link to={"about"}> </Link><BsChevronBarRight/>NEWS</span></li>
              <li className="pb-4"><span className="flex items-center flex-row hover:text-yellow-500"><Link to={"contact"}> </Link><BsChevronBarRight/>CONTACT</span></li>
            </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-red-500 pb-4">Our Services</h4>
              <ul className="text-gray-500">
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Tents</li>
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Decor</li>
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>PA System</li>
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Web Design</li>
               
              </ul>
            </div>
            <div className="mb-5">
              <ul>
              <li className="pb-4 text-red-500">Book Today</li>
              <li className="flex flex-row items-center font-serif hover:text-yellow-500 text-gray-500"><IoMdCall/> <strong>Phone:</strong>+263 783-677-124</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-10 ">
          <h4 className="text-yellow-500 hover:text-red-500 ">Developed by: WEBTECH</h4>
          <p className="flex flex-row items-center font-serif hover:text-red-500 text-gray-500"><MdEmail/><strong>Email:</strong>tanatswasarudi09@gmail.com</p>
          <p className="flex flex-row items-center font-serif hover:text-red-500 text-gray-500"><IoMdCall/> <strong>Call:</strong>+91 826-44208-15 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
