import React from "react";
import { Link } from "react-router-dom";

const Homecard = ({ name, image, category, price, loadingArray,id }) => {
  return (
    <div className=" bg-slate-200 p-2 shadow min-w-[150px]">
      {name ? (
        <>
        <Link to={ `/booking/${id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})}>
          <div className="w-36 min-h-[150px]">
            <img src={image} className="h-full w-full" />
          </div>
          <h3 className="font-semibold text-black text-center capitalize text-lg">
            {" "}
            {name}{" "}
          </h3>
          <p className="text-center text-black capitalize font-medium">
            {category}
          </p>
          <p className="text-center font-bold">
            <span className="text-red-500">$</span>
            <span>{price}</span>
          </p>
          </Link>
        </>
      )
      : 
      <div className="flex justify-center items-center">
      <p>{loadingArray}</p>
      </div>
    }
    </div>
  );
};

export default Homecard;
