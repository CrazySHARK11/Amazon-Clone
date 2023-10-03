import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

const Prodrow = ( ) => {
    return (
        <div className="productcard bg-gray-200 border-2 p-4 gap-8 flex">
            <img src="https://5.imimg.com/data5/GLADMIN/Default/2021/10/SH/KV/XW/118981820/the-lean-startup.jpeg" alt="" className='object-contain w-[150px]' />
            <span className='text-[1.2em] flex flex-col gap-3 items-start'>
                <p>The LeanStartup: How Constant Innovation Creates Radically Successfull Businesses Paperback</p>
                <p>$ <span className="font-bold">11.96</span></p>
                <div className="ratings flex gap-2">
                    <BsFillStarFill className='text-yellow-400' />
                    <BsFillStarFill className='text-yellow-400' />
                    <BsFillStarFill className='text-yellow-400' />
                    <BsFillStarFill className='text-yellow-400' />
                    <BsFillStarFill className='text-yellow-400' />
                </div>

                <button className='bg-yellow-400 border-[1px] border-black px-2 py-1 ' >Remove</button>
            </span>

        </div>
    )
}

export default Prodrow