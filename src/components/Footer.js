import Link from 'next/link';
import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  const currentDate = new Date()
  return (
    <footer className='bg-white' role="contentinfo" aria-label="Site Footer">
      <div className='px-5 footer-section py-3'>
        <div className='mt-3'>
          <div className="header-brand-part flex items-center pointer">
            <Link href={'/'} className="pointer footer-brand-name" aria-label="Go to homepage">
              <span className='footer-brand-name1'>SARTAJ</span><span className='footer-brand-name2 ml-1 px-2 py-1'>ALAM</span>
            </Link>
          </div>
          <p className='footer-sub-item'>Your complete web solutions</p>
        </div>
        <div className='mt-3'>
          <h3 className='footer-item'>Expert In</h3>
          <p className='footer-sub-item'>Front End, Full Stack</p>
        </div>
        <div className='mt-3'>
          <h3 className='footer-item'>Important Links</h3>
          <nav aria-label="Footer Important Links">
            <ul>
              <li><a href="/work-experience" className='footer-sub-item'>Work</a>, <a href="/projects" className='footer-sub-item'>Projects</a>, <a href="/skills" className='footer-sub-item'>Skills</a></li>
            </ul>
          </nav>
        </div>
        <div className='mt-3'>
          <h3 className='footer-item'>Follow me</h3>
          <div className='flex'>
            <a href='https://github.com/sak03' target='_blank' rel="noopener noreferrer" className='footer-sub-item-icon'><FaGithubSquare /></a>
            <a href='https://www.linkedin.com/in/sak03/' target='_blank' rel="noopener noreferrer" className='footer-sub-item-icon mx-2'><FaLinkedin /></a>
            <a href='https://x.com/sartaj_03' target='_blank' rel="noopener noreferrer" className='footer-sub-item-icon'><FaTwitterSquare /></a>
          </div>
        </div>
      </div>
      <div className='footer-line'></div>
      <div className='px-5 footer-section py-5'>
        <span className='footer-bottom mt-2'> &copy; {currentDate.getFullYear()}</span>
        <span className='footer-bottom mt-2'>Made with love ❤️ by Sartaj</span>
        <span className='footer-bottom mt-2'>Maintained by @Sartaj</span>
      </div>
    </footer>
  )
}

export default Footer