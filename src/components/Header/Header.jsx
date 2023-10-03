import React from 'react'
import logo from "../../image/logo.svg"
import { BsFillCartFill, BsFillGeoAltFill ,BsList,BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom"

const Header = () => {
  return (
     <header className='bg-[#131921]'>
        <div className="wrap">
            <nav className='flex justify-center items-center gap-6  py-3'>
                <Link to="/" id="logo" className="">
                <img src={logo} alt="" width={110} />
                </Link>

                <a href="#" className='text-white leading-tight'> <span className="text-gray-400"> Hello </span> <br />
                    <BsFillGeoAltFill className='text-white inline' /> Select Your Location
                </a>
    
           <div className="search_section flex items-center">
              <select name="categories" id="categories" className=' bg-gray-300  text-gray-600 py-[12.5px] px-3 rounded-lg rounded-r-none'>
              <option value="Kids">ALL</option>
              <option value="Kids">Kids</option>
              <option value="Kids">Kids</option>
              <option value="Kids">Kids</option>
              <option value="Kids">Kids</option>
              <option value="Kids">Kids</option>
               <option value="Kids">Kids</option>
               <option value="Kids">Kids</option>
               <option value="Kids">Kids</option>
               <option value="Kids">Kids</option>
               <option value="Kids">Kids</option>
               <option value="Kids">Kids</option>
               <option value="Kids">Kids</option>
               <option value="Kids">Kids</option>
               <option value="Kids">Kids</option>
               <option value="Kids">Kids</option>
               <option value="Kids">Kids</option>
               <option value="Kids">Kids</option>
                <option value="Kids">Kids</option>
              </select>        
                <input className='min-w-[15%] w-[600px] px-5 py-3 ' type="search" name="search" id="search" placeholder='Search Amazon.in' />
              <button className='bg-[#F3A847] rounded-lg rounded-l-none cursor-pointer p-4'><BsSearch /></button>
    </div>

      <a href="#" className=" text-white lang flex items-center gap-1 ">
      <img src="https://flagemoji.net/img/flags/india-flag.png" width={20} alt="flag" />
      ENG
      </a>     

      <a href="#" className='leading-tight text-gray-300'>
        Hello , sign in <br />
        <span className="text-white font-medium">Account & Lists</span>
      </a>

      <a href="#" className='leading-tight text-gray-300'>
       Returns <br />
        <span className="text-white font-medium"> & Orders</span>
      </a>

      <Link to="/checkout" className='text-[#F3A847] flex gap-2'>
        <BsFillCartFill className='text-white text-[1.5em]' />
        0 
      </Link>

            </nav>
        </div>

        <div className="bottom_header py-2 bg-[#262d36] ">
          <div className="wrap">
            <nav className="flex gap-6 font-medium text-white">
           <a href="#" className='flex items-center gap-1 text-lg'>
           <BsList className='text-[1.3em]' /> All
           </a>
           <a href="#">Amazon MiniTV</a>
           <a href="#"> Sell</a>
           <a href="#">Electronics</a>
           <a href="#">Best Sellers </a>
           <a href="#">Mobile</a>
           <a href="#">Today's Deal</a>
           <a href="#">Prime</a>
 
           
            </nav>
          </div>
        </div>
     </header>
  )
}

export default Header