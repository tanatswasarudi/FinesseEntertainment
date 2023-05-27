import React from 'react'
import {BiChair} from 'react-icons/bi'

const FilterProduct = ({category,onClick}) => {
  return (
    <div onClick={onClick}>
        <div className='text-7xl p-5 bg-yellow-500 rounded-full cursor-pointer hover:to-blue-950'>
             <BiChair/>
           </div>
           <p className='text-center font-medium my-1 capitalize'>{category}</p>
            
    </div>
  )
}

export default FilterProduct
