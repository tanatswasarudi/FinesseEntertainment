import React, { useState, useEffect } from 'react' 

const HomeCards = ({name,description,image,loadingArrays}) => {


    const Slideshow = ({ image }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
          }, 3000);
      
          return () => {
            clearInterval(intervalId);
          };
        }, [image]);}
  return (
    <div className='bg-slate-200 p-2 min-w-[100px] max-w-[100px] hover:shadow-xl py-5 px-4 cursor-pointer flex flex-col'>
      {name ? (
        <>
           <h3 className="font-semibold text-black text-center capitalize text-lg">
            {" "}
            {name}{" "}
          </h3>
         <div className="md:w-60 w-20  min-h-[150px]">
         {image.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : 'h-full w-full'}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
          </div>

          <h3 className=" text-red-400 text-center capitalize text-sm">
            {" "}
            {description}{" "}
          </h3>
        </>
      ) :
      <div className="flex justify-center font-bold items-center">
      <p>{loadingArrays}</p>
      </div>
      }
      
    </div>
  )
}

export default HomeCards
