import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

const Product = () => {
  return (
    <div className="product_card max-w-[100%] flex flex-col items-center bg-white p-5 prodShadow">
       <div className="description flex flex-col gap-3 ">
       <p className='text-[1.2em]'>The LeanStartup: How Constant Innovation Creates Radically Successfull Businesses Paperback</p>
        <p className='text-[1.2em]'>$ <b>11.96</b> </p>
       
        <div className="ratings flex gap-2">
        <BsFillStarFill className='text-yellow-400' />
        <BsFillStarFill className='text-yellow-400' />
        <BsFillStarFill className='text-yellow-400' />
        <BsFillStarFill className='text-yellow-400' />
        <BsFillStarFill className='text-yellow-400' />
        </div>
       </div>
        <div className="prod_img flex flex-col items-center">
     <img src="https://5.imimg.com/data5/GLADMIN/Default/2021/10/SH/KV/XW/118981820/the-lean-startup.jpeg" alt="" className='object-contain w-[150px]' />
     <button className="bg-yellow-500 border-2 border-black outline-black  mt-4 font-bold  px-2" >
        Add to cart
     </button>
        </div>
    </div>
  )
}

export default Product