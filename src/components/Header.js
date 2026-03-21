"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileSidebar from './MobileSidebar';


const Header = () => {
  const pathName = usePathname();
  // console.log("pathName", pathName)
  return (
    <header className='header-brand' role="banner" aria-label="Site Header">
      <nav aria-label="Main Navigation" role="navigation" className="w-full flex items-center justify-between">
        {/* Brand */}
        <div className="header-brand-part flex items-center pointer">
          <Link href={'/'} className="pointer brand-name" aria-label="Go to homepage">
            <span className='brand-name1'>SARTAJ</span><span className='brand-name2'>ALAM</span>
          </Link>
        </div>
        {/* Center: Work, Projects, Skills, Blogs */}
        <div className='flex my-2 header-item-div' role="menubar">
          <Link href={'/work-experiences'} legacyBehavior>
            <a role="menuitem" tabIndex={0} aria-current={pathName === '/work-experiences' ? 'page' : undefined} className={`header-item${pathName === '/work-experiences' ? "-active" : ""} mx-1 flex`}>Work Experiences</a>
          </Link>
          <Link href={'/projects'} legacyBehavior>
            <a role="menuitem" tabIndex={0} aria-current={pathName === '/projects' ? 'page' : undefined} className={`header-item${pathName === '/projects' ? "-active" : ""} flex mx-5`}>Projects</a>
          </Link>
          <Link href={'/skills'} legacyBehavior>
            <a role="menuitem" tabIndex={0} aria-current={pathName === '/skills' ? 'page' : undefined} className={`header-item${pathName === '/skills' ? "-active" : ""} mx-1 flex`}>Skills</a>
          </Link>
          <Link href={'/blogs'} legacyBehavior>
            <a role="menuitem" tabIndex={0} aria-current={pathName === '/blogs' ? 'page' : undefined} className={`header-item${pathName === '/blogs' ? "-active" : ""} flex ml-5`}>Blogs</a>
          </Link>
        </div>
        {/* Right: About, Contact */}
        <div className='flex my-2 header-item-div' role="menubar">
          <Link href={'/about'} legacyBehavior>
            <a role="menuitem" tabIndex={0} aria-current={pathName === '/about' ? 'page' : undefined} className={`header-item${pathName === '/about' ? "-active" : ""} flex mr-5`}>About</a>
          </Link>
          <Link href={'/contact'} legacyBehavior>
            <a role="menuitem" tabIndex={0} aria-current={pathName === '/contact' ? 'page' : undefined} className={`header-item${pathName === '/contact' ? "-active" : ""} mx-1 flex`}>Contact</a>
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