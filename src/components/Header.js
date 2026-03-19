"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBriefcase, FaCogs, FaFileSignature, FaHeadphones, FaHome, FaUserAlt, FaBloggerB } from "react-icons/fa";
import MobileSidebar from './MobileSidebar';


const Header = () => {
  const pathName = usePathname();
  // console.log("pathName", pathName)
  return (
    <header className='header-brand' role="banner" aria-label="Site Header">
      <nav aria-label="Main Navigation" role="navigation" className="w-full flex items-center justify-between">
        <Link href={'/'} className="pointer brand-name" aria-label="Go to homepage">
          <span className='brand-name1'>SARTAJ</span><span className='brand-name2'>ALAM</span>
        </Link>
        <div className='flex my-2 header-item-div' role="menubar">
          <Link href={'/'} legacyBehavior>
            <a role="menuitem" tabIndex={0} aria-current={pathName === '/' ? 'page' : undefined} className={`header-item${pathName === '/' ? "-active" : ""} flex`}> <FaHome className='mt-1 mx-1' style={{ fontSize: "23px" }} /> Home </a>
          </Link>
          <Link href={'/work-experience'} legacyBehavior>
            <a role="menuitem" tabIndex={0} aria-current={pathName === '/work-experience' ? 'page' : undefined} className={`header-item${pathName === '/work-experience' ? "-active" : ""} mx-1 flex`}><FaBriefcase className='mt-2 mx-1' style={{ fontSize: "20px" }} /> Work</a>
          </Link>
          <Link href={'/projects'} legacyBehavior>
            <a role="menuitem" tabIndex={0} aria-current={pathName === '/projects' ? 'page' : undefined} className={`header-item${pathName === '/projects' ? "-active" : ""} flex`}><FaFileSignature className='mt-2 mx-1' style={{ fontSize: "20px" }} /> Projects</a>
          </Link>
          <Link href={'/skills'} legacyBehavior>
            <a role="menuitem" tabIndex={0} aria-current={pathName === '/skills' ? 'page' : undefined} className={`header-item${pathName === '/skills' ? "-active" : ""} mx-1 flex`}><FaCogs className='mt-2 mx-1' style={{ fontSize: "20px" }} /> Skills</a>
          </Link>
          <Link href={'/about'} legacyBehavior>
            <a role="menuitem" tabIndex={0} aria-current={pathName === '/about' ? 'page' : undefined} className={`header-item${pathName === '/about' ? "-active" : ""} flex`}><FaUserAlt className='mt-2 mx-1' style={{ fontSize: "20px" }} /> About</a>
          </Link>
          <Link href={'/blogs'} legacyBehavior>
            <a role="menuitem" tabIndex={0} aria-current={pathName === '/blogs' ? 'page' : undefined} className={`header-item${pathName === '/blogs' ? "-active" : ""} flex`}><FaBloggerB className='mt-2 mx-1' style={{ fontSize: "20px" }} /> Blogs</a>
          </Link>
          <Link href={'/contact'} legacyBehavior>
            <a role="menuitem" tabIndex={0} aria-current={pathName === '/contact' ? 'page' : undefined} className={`header-item${pathName === '/contact' ? "-active" : ""} mx-1 flex`}><FaHeadphones className='mt-2 mx-1' style={{ fontSize: "20px" }} /> Contact</a>
          </Link>
        </div>
        <div className='header-hamberger'>
          <div className='hamberger'>
            <MobileSidebar />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header