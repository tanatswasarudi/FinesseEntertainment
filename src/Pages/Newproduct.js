import React, { useState } from 'react'
import Stars from '../Assets/nightfall2.jpg'
import {ImPriceTag} from 'react-icons/im'
import {BiUpload} from 'react-icons/bi'
import { imagetobase64 } from '../utility/imagetobase64'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const Newproduct = () => {
  const [data,setData] = useState({
    name : " ",
    category : "",
    image : "",
    price : "",
    description: ""
  })
  const DataProduct = useSelector(state => state.product )
  console.log(DataProduct)

 const handleOnChange = (e) =>{
  const {name,value} = e.target
  setData((preve)=>{
    return{
      ...preve,
     [name] : value
    }

  })

 }
  const handleUpload = async(e)=>{
    const data = await imagetobase64(e.target.files[0])
    //console.log(data)

    setData((preve)=>{
      return{
        ...preve,
        image : data
      }

    })
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
      
      const {name, image, category, price, description} = data;
      if(name && image && category && price && description){
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/uploadProduct`,{
          method : "POST",
          headers :{
            "content-type" : "application/json"
          },
          body : JSON.stringify(data)
        })
  
        const fetchRes = await fetchData.json()
        console.log(fetchRes)
        toast(fetchRes.message)
        alert("UPLOAD SUCCESFUL")
        setData (()=>{
          return{
            name : " ", 
            category : "",
            image : "",
            price : "",
            description: ""
          }
        })

      }
      else{
        toast("Enter Missing Fields")
      }

 
  }

  return (
    <div  className="bg-cover bg-center h-screen"
    style={{ backgroundImage: `url(${Stars})` }}
    >


      <div className='p-4'>
      <form className='w-full m-auto max-w-sm  drop-shadow-sm flex flex-col p-3 bg-slate-100 ' onSubmit={handleSubmit}>
        <label htmlFor='name' className=''>Name</label>
        <input type={"text"} name='name' className='bg-slate-300 my-1 p-1' onChange={handleOnChange} value={data.name}/>

        <label htmlFor='category'>Category</label>
        <select className='bg-slate-300 border my-1 p-1' id='category' name='category' onChange={handleOnChange} value={data.category}>
          <option value={"other"}>Select Category</option>
          <option value={"chairs & tables"}>Chairs & Tables</option>
          <option value={"tents"}>Tents</option>
          <option value={"decor & cutlery"}>Decor & Cutlery</option>
          <option value={"pa system"}>PA system</option>
          <option value={"trending"}>Trending & News</option>
          
        </select>
        <label htmlFor='image'>Image
        <div className='h-40 my-3 rounded w-full bg-slate-300 flex items-center cursor-pointer justify-center'>
      
        {
          data.image ?  <img src={data.image} alt='' className='h-full'/> : <span className='text-4xl'><BiUpload/></span>
        }
         
        
         <input type={"file"} id='image' accept='image/*' className='hidden ' onChange={handleUpload}/>
        </div>
        </label>
        

        <label htmlFor='price'>Price</label>
        <div className=' flex items-center bg-slate-300'>
        <span className=''><ImPriceTag/></span>
        <input type={"price"} name='price' id='price' className='bg-slate-300 w-full' onChange={handleOnChange} value={data.price}/>
        </div>
        <div className='mt-2'>
        <label htmlFor='description'>Description</label>
        <textarea rows={3} id='description' name='description' className='bg-slate-300 w-full' onChange={handleOnChange} value={data.description}/>
        </div>
        <button className='bg-red-500 hover:bg-red-950 text-white font-medium drop-shadow my-1'>Save</button>
      </form>
      </div>
    </div>
  )
}

export default Newproduct
