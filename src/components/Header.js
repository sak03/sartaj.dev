"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaHome, FaUser, FaUserAlt } from "react-icons/fa";

const Header = () => {
  const pathName = usePathname();
  console.log("pathName", pathName)
  return (
    <div className='px-5 flex justify-between bg-white'>
      <h3 className='pointer brand-name'><span className='brand-name1'>SARTAJ</span> <span className='brand-name2'>ALAM</span></h3>
      <div className='flex my-2'>
        <Link href={'/'}>
          <span className={`header-item${pathName === '/' ? "-active" : ""} flex`}> <FaHome className='mt-1 mx-1' style={{ fontSize: "23px" }} /> Home </span></Link>
        <Link href={'/about'}>
          <span className={`header-item${pathName === '/about' ? "-active" : ""} mx-4 flex`}><FaUserAlt className='mt-2 mx-1' style={{ fontSize: "20px" }} /> About</span>
        </Link>
        <Link href={'/work'}>
          <span className='header-item'>Work</span></Link>
        <Link href={'/skills'}>
          <span className='header-item mx-4'>Skills</span></Link>
        <Link href={'/projects'}>
          <span className='header-item'>Projects</span></Link>
        <Link href={'/contact'}>
          <span className='header-item mx-4'>Contact</span></Link>
      </div>
    </div>
  )
}

export default Header