import React from "react";
import bgImage from "../Assets/contact.jpg";
import banner from "../Assets/banner.jpg"
import { FaWhatsappSquare } from "react-icons/fa";
import {IoMdCall} from 'react-icons/io'
import GoogleMaps from "../components/GoogleMaps";


const About = () => {
 
  return (
    <div
      className="bg-cover min-h-screen bg-center h-full"
      style={{ backgroundImage: `url(${bgImage})`}}
  >  

  <div className=" justify center mb-4">
    <img src={banner} alt="" className="w-full"/>
  </div>
  <div>
    <h1 className="text-2xl">
      About Us
    </h1>
    <p className="text-blue-600">
      jeRHFJNFKFHEFSJF
    </p>
    <p className="text-blue-800">
      fhsfjlsjsgfsghjgshgh
      heshhhghhghgfhghghfgjsgkjgkfkfkgkgdkshgsdfhgh
    </p>
  </div>
  <h1>My Google Map</h1>
      <div>
        <GoogleMaps />
      </div>
  </div>
  );
};



export default (About)