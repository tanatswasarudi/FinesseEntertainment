import React, {  useRef } from 'react'
import {  useSelector } from 'react-redux';
import {BsFillSpeakerFill,BsFillTelephoneInboundFill} from 'react-icons/bs'
import Homecard from '../components/Homecard'
import CardFeature from '../components/CardFeature';
import {GrNext,GrPrevious} from 'react-icons/gr' 
import AllProduct from '../components/AllProduct';
import HomeCards from '../components/HomeCards';

const Home = () => {
  const DataProduct = useSelector((state)=>state.product.productList)
  console.log(DataProduct)
  const homeProductCartList = DataProduct.slice(3,7)
  const homeProductCartListChairs = DataProduct.filter(el => el.category === "chairs & tables",[])
  console.log(homeProductCartListChairs)

  //Events
  const ProductData = useSelector((state)=>state.shows.showsList)
  console.log(ProductData)
  const homeShowsCartLIst = ProductData.slice(1,2)

  const LoadingArray = new Array(4).fill(null)
  const LoadingArrays = new Array(2).fill(null)

    const slideProductRef = useRef()
  const nextProduct = ()=>{
    slideProductRef.current.scrollLeft += 200 
  }
  const prevProduct = ()=>{
    slideProductRef.current.scrollLeft -= 200
  }
  const phoneNumber = '+263 783-677-124'; // Replace with the desired recipient's phone number

  const handleCallRequest = () => {
    const message = 'Please call me back!'; // Customize the call request message
    const callUrl = `tel:${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(callUrl);
  };
  


  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-3 grid grid-cols-2  '>

        <div className='w-1/2'>
        <div className='flex flex-row items-center bg-slate-400 w-60 px-2 gap-3 overflow-hidden rounded-full'>
          <p className='text-gray-500 font-serif text-base items-center px-2'>Finesse  Entertainment</p>
             <BsFillSpeakerFill className='text-2xl'/>
        </div>
          <h2 className='text-2xl md:text-7xl font-bold py-3'>Upcoming Shows<span className='text-blue-900 '>This Week</span></h2>
          <div className='flex flex-wrap gap-10 mr-4 shadow hover:shadow-lg'>
            {
              homeShowsCartLIst[0] ? 
              homeShowsCartLIst.map(el=>{
                return(
                  <HomeCards/>
                )
              }) :
              LoadingArrays.map((el,index)=>{
                return(
                  <HomeCards
                  key={index}
                  loadingArrays={"Wait While Loading..."}
                  />
                )
              })
            }
          </div>
          <button className='font-bold mt-6 bg-blue-500 md:text-base font-mono text-slate-200 px-4 py-2 hover:bg-blue-400 rounded' onClick={handleCallRequest}>CALL<BsFillTelephoneInboundFill/></button>
        </div>
        
        <div className='w-1/2 flex flex-wrap gap-7 p-4 mt-8 justify-center'>
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
