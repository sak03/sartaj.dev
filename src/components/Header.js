import React from 'react'
import { FaHome, FaUser, FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className='px-5 flex justify-between bg-white'>
      <h3 className='pointer brand-name'><span className='brand-name1'>SARTAJ</span> <span className='brand-name2'>ALAM</span></h3>
      <div className='flex my-2'>
        <span className='header-item-active flex'><FaHome className='mt-1 mx-1' style={{fontSize:"23px"}}/> Home</span>
        <span className='header-item mx-4 flex'><FaUserAlt className='mt-2 mx-1' style={{ fontSize: "20px" }}/> About</span>
        <span className='header-item'>Work</span>
        <span className='header-item mx-4'>Skills</span>
        <span className='header-item'>Projects</span>
        <span className='header-item mx-4'>Contact</span>
      </div>
    </div>
  )
}

export default Header