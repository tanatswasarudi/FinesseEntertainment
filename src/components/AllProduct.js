import React, { useEffect, useState } from 'react'
import FilterProduct from './FilterProduct'
import CardFeature from './CardFeature'
import { useSelector } from 'react-redux'

const AllProduct = ({heading}) => {
    const DataProduct = useSelector((state)=>state.product.productList)
    const categoryList = [...new Set(DataProduct.map(el=>el.category))]
  console.log(categoryList)

  //filter data display
  const [filterby,setFilterBy] = useState("")
const [dataFilter,setDataFilter] = useState([])

useEffect(()=>{
  setDataFilter(DataProduct)
},[DataProduct])

const handleFilterProduct = (category)=>{
  const filter = DataProduct.filter(el=>el.category.toLowerCase() === category.toLowerCase())
  setDataFilter(()=>{
    return[
      ...filter
    ]
  })
}
  return (
    <div className='my-7'>
    <h2 className='font-bold text-2xl text-slate-950 mb-8'>
      {heading}
    </h2>

    <div className='flex gap-6 justify-center overflow-scroll'>
      {
        categoryList[0] && categoryList.map(el =>{
          return(
            <FilterProduct category={el} onClick={()=>handleFilterProduct(el)}/> 
          )
        })
      }
     
    </div>
    <div className='flex flex-wrap justify-center gap-3'>
        {
          dataFilter.map(el =>{
            return(
              <CardFeature
              key={el._id}
              id={el._id}
              image={el.image}
              name={el.name}
              category={el.category}
              price={el.price}
              />
            )
          })
        }
    </div>
    </div>
  )
}

export default AllProduct
