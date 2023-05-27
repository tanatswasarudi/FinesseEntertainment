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
    >
    <div className='flex flex-col gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' >
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
  );
};



export default (About)