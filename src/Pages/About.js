import React from "react";
import bgImage from "../Assets/contact.jpg";
import { useSelector } from "react-redux";
import NewsFeature from "../components/NewsFeature";



const About = () => {
  const DataProduct = useSelector((state) => state.product.productList);
  const homeProductCartListChairs = DataProduct.filter(el => el.category === "trending",[])
  console.log(homeProductCartListChairs)

  

  return (
    <div
      className="bg-cover min-h-screen bg-center h-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >  <div className=" px-10 grid grid-cols-1 lg:grid-cols-2">
           <div className="text-cyan-500  ">
          <h1 className="text-2xl md:text-3xl relative inline font-bold">
            FINESSE ENTERTAINMENT OFFERS
            <span className="absolute left-1/2  bg-cyan-600 -bottom-2 -translate-x-1/2 h-[1px] w-[400px] md:w-[300px]">
            </span>
          </h1>
        </div>
           
    <div className='flex flex-col gap-5 py-20 overflow-scroll scrollbar-none scroll-smooth transition-all' >
          {
            homeProductCartListChairs.map(el=>{
              return(
                <NewsFeature
                key={el._id}
                id={el._id}
                name={el.name}
                category={el.category}
                image={el.image}
                price={el.price}
                description={el.description}
                />
              )
            })
           }
          
        </div>
    </div>
   

    </div>
  );
};



export default (About)