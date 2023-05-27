import React, {  useRef } from 'react'
import {  useSelector } from 'react-redux';
import {BsFillSpeakerFill} from 'react-icons/bs'
import Homecard from '../components/Homecard'
import CardFeature from '../components/CardFeature';
import {GrNext,GrPrevious} from 'react-icons/gr' 
import AllProduct from '../components/AllProduct';

const Home = () => {
  const DataProduct = useSelector((state)=>state.product.productList)
  console.log(DataProduct)
  const homeProductCartList = DataProduct.slice(3,7)
  const homeProductCartListChairs = DataProduct.filter(el => el.category === "chairs & tables",[])
  console.log(homeProductCartListChairs)

  const LoadingArray = new Array(4).fill(null)

    const slideProductRef = useRef()
  const nextProduct = ()=>{
    slideProductRef.current.scrollLeft += 200
  }
  const prevProduct = ()=>{
    slideProductRef.current.scrollLeft -= 200
  }

  


  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-3 '>

        <div className='md:w-1/2'>
        <div className='flex flex-row items-center bg-slate-400 w-36 px-2 gap-3 overflow-hidden rounded-full'>
          <p className='text-gray-500 text-sm'>Finesse Entertainment</p>
          <BsFillSpeakerFill className='text-2xl'/>
        </div>
          <h2 className='text-4xl md:text-7xl font-bold py-3'>The Best Service in <span className='text-blue-900 '>The City</span></h2>
          <p className='py-3 text-base max-w-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dignissim nulla, non pellentesqut tur, efficitur id nulla sed, dignissim vulputate nibh. Phasellus pharetra congue lectus, non luctus urna congue id. Proin posuere ligula sit amet faucibus dapibus. Cras sed mauris arcu. .</p>
          <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 hover:bg-yellow-400 rounded'>Book Now</button>
        </div>
        
        <div className='md:w-1/2 flex flex-wrap gap-7 p-4 justify-center'>
         {
            homeProductCartList[0] ?
            homeProductCartList.map(el =>{
              return(
                <Homecard
                key={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
                description={el.description}
                />
              )
            }) 
            :
            LoadingArray.map((el,index)=>{
              return(
                <Homecard
                key={index}
                loadingArray={"loading..."}
                />
              )
            })
         }
        </div>
      </div>
         
      <div className='pt-14'>
        <div className='flex items-center w-full'>
          <h2 className='font-bold text-2xl text-slate-950 mb-4'>Chairs & Tables</h2>
           <div className='ml-auto flex gap-4'>
          <button onClick={prevProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1'><GrPrevious/></button>
          <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1'><GrNext/></button>
        </div>
        </div>
       
          
        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>
          {
            homeProductCartListChairs.map(el=>{
              return(
                <CardFeature
                key={el._id}
                id={el._id}
                name={el.name}
                category={el.category}
                price={el.price}
                image={el.image}
                />
              )
            })
           }
          
        </div>
        </div>
        <AllProduct heading={"Your Product"}/>
        
    </div>
  )
}

export default Home
