import React,{useState} from 'react'
import {ImPriceTag} from 'react-icons/im'
import {BiUpload} from 'react-icons/bi'
import { imagetobase64 } from '../utility/imagetobase64'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const shows = () => {
    const [data,setData] = useState({
        name : " ",
        image : "",
        description: ""
      })
      const ProductData = useSelector(state => state.shows )
      console.log(ProductData)

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
          
          const {name, image, description} = data;
          if(name && image &&  description){
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/uploadshow`,{
              method : "POST",
              headers :{
                "content-type" : "application/json"
              },
              body : JSON.stringify(data)
            })
      
            const fetchRes = await fetchData.json()
            console.log(fetchRes)
            alert(fetchRes.message)
            setData (()=>{
              return{
                name : " ",            
                image : "",      
                description: ""
              }
            })
    
          }
          else{
            alert("Enter Missing Fields")
          }
    
     
      }
    
  return (
    <div>
        <div className='p-4'>
      <form className='w-full m-auto max-w-sm  drop-shadow-sm flex flex-col p-3 bg-slate-100 ' onSubmit={handleSubmit}>
        <label htmlFor='name' className=''>Name</label>
        <input type={"text"} name='name' className='bg-slate-300 my-1 p-1' onChange={handleOnChange} value={data.name}/>
        <label htmlFor='image'>Image
        <div className='h-40 my-3 rounded w-full bg-slate-300 flex items-center cursor-pointer justify-center'>   
        {
          data.image ?  <img src={data.image} alt='' className='h-full'/> : <span className='text-4xl'><BiUpload/></span>
        }  
         <input type={"file"} id='image' accept='image/*' className='hidden ' onChange={handleUpload}/>
        </div>
        </label>
        <div className='mt-2'>
        <label htmlFor='description'>Description</label>
        <textarea rows={3} id='description' name='description' className='bg-slate-300 w-full' onChange={handleOnChange} value={data.description}/>
        </div>
        <button className='bg-red-500 hover:bg-red-950 text-white font-medium drop-shadow my-1'>Post Event</button>
      </form>
      </div>
    </div>
  )
}

export default shows
