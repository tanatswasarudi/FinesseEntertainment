import React from "react";
import { Link } from "react-router-dom"; 



const NewsFeature = ({ image, price,  description,id}) => {
  return (
    
      <div className="bg-slate-200 gap-3 min-w-[600px]  max-w-3xl m-auto md:flex w-full ">
      <Link to={ `/booking/${id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})}>
      <div className="px-4 max-w-sm overflow-hidden w-full">
        <img src={image} className="h-full" />
      </div>
      <p className="text-slate-600 px-2 text-base flex flex-col">Offer:</p>
      <p className="flex text-center px-2  text-2xl font-bold">
      
            <span className="text-red-500">$</span>
            <span>{price}</span>
          </p>
          <p className="text-slate-600 px-2 mt-1">Comment:</p>
          <p className="text-black text-base px-2 mb-3 overflow-scroll scrollbar-none scroll-smooth">{description}</p>
      </Link>
      </div>
    
  );
};

export default NewsFeature;
