import React from "react"; 
import { Link } from "react-router-dom";

const CardFeature = ({ image, name, price, category,id }) => {
  return (
    <div className="w-full min-w-[200px] max-w-[200px]  gap-3  hover:shadow-lg  py-5 px-4 cursor-pointer flex flex-col">
      
      <Link to={ `/booking/${id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})}>
      <div className="h-28  flex justify-center items-center">
        <img src={image} className=" h-full" />
      </div>
      <h3 className="font-bold  text-blue-600 text-center capitalize text-md  mt-2">
        {" "}
        {name}{" "}
      </h3>
      <p className="text-center text-black capitalize font-medium">
        {category}
      </p>
      <p className="text-center  font-bold">
        <span className="text-red-500">$</span>
        <span>{price}</span>
      </p>
      <button className="flex items-center flex-col justify-center w-full bg-yellow-500 mb-3 py-1 px-4 rounded hover:bg-yellow-300">Book</button>
      </Link>
    </div>
    
  );
};

export default CardFeature;
