import React from 'react' 

const HomeCards = ({name, description, image, loadingArrays}) => {

  return (
    <div className='bg-slate-200 p-2 min-w-[100px] md:min-w-[150px] max-w-[100px] md:max-w-[150px] shadow  py-5 px-4 cursor-pointer flex flex-col'>
      {name ? (
        <>
           <h3 className="font-semibold text-black text-center capitalize text-lg">
            {name}
          </h3>
          <div className="w-24 md:w-36 md:min-h-[150px] min-h-[150px]">
            <img src={image} className="h-full w-full" />
          </div>
          <h3 className=" text-red-400 text-center capitalize text-sm">
            {description}
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
