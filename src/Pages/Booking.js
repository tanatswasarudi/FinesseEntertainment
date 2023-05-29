import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AllProduct from "../components/AllProduct";

const Booking = () => {
  const { filterby } = useParams();
  const DataProduct = useSelector((state) => state.product.productList);

  const productDisplay = DataProduct.filter((el) => el._id === filterby)[0];
  
  return (
    <div className="py-2 md:p-4">
      <div className="w-full max-w-3xl m-auto md:flex ">
        <div className="max-w-sm shadow overflow-hidden w-full p-5">
          <img src={productDisplay.image} className="hover:scale-105 h-full" />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className=" flex text-center px-2 text-black text-2xl capitalize font-medium">
            {" "}
            {productDisplay.name}{" "}
          </h3>
          <p className="flex text-center px-2 text-black text-2xl capitalize font-medium">
            {productDisplay.category}
          </p>
          <p className="flex text-center px-2  text-2xl font-bold">
            <span className="text-red-500">$</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className="px-2">
          <button className="flex items-center flex-col justify-center px-4 bg-red-500 mb-3 py-1 rounded hover:bg-red-950">Book Now</button>
          </div>
          <p className="text-slate-600 px-2">Description:</p>
          <p className="text-black text-base px-2">{productDisplay.description}</p>
        </div>
      </div>

      <AllProduct heading={"Related Product"}/>
    </div>
  );
};

export default Booking;
