import React from 'react'
import { IoLogoYoutube } from "react-icons/io5";
import Booking from './Booking';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <img src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_640.png" className='w-[180px]'/>
        <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer'>Home</li>
        <li  className='hover:font-bold cursor-pointer'onClick={<Booking/>}>Booking</li>
        <li className='hover:font-bold cursor-pointer'>About us</li>
        <li className='hover:font-bold cursor-pointer'>Contact us</li>
        </ul>
        <button className='bg-red-500 rounded-full text-white flex items-center'>
        Subscribe <IoLogoYoutube className='ml-3 text-[20px]'/></button>
  </div>
  )
}

export default Navbar;