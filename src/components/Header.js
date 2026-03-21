"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileSidebar from './MobileSidebar';


const Header = () => {
  const pathName = usePathname();
  const hideCenterNav = pathName?.startsWith('/blog/');
  // console.log("pathName", pathName)
  return (
    <header className='header-brand' role="banner" aria-label="Site Header">
      <nav aria-label="Main Navigation" role="navigation" className="w-full flex items-center justify-between">
        {/* Brand */}
        <div className="header-brand-part flex items-center self-center pointer">
          <Link href={'/'} className="pointer brand-name inline-flex items-center" aria-label="Go to homepage">
            <span className='brand-name1'>SARTAJ</span><span className='brand-name2'>ALAM</span>
          </Link>
        </div>
        {/* Center: Work, Projects, Skills, Blogs */}
        {!hideCenterNav ? (
          <div className='flex items-center self-center my-2 header-item-div' role="menubar">
            <Link href={'/work-experiences'} legacyBehavior>
              <a role="menuitem" tabIndex={0} aria-current={pathName === '/work-experiences' ? 'page' : undefined} className={`header-item${pathName === '/work-experiences' ? "-active" : ""} mx-1 inline-flex items-center`}>Work Experiences</a>
            </Link>
            <Link href={'/projects'} legacyBehavior>
              <a role="menuitem" tabIndex={0} aria-current={pathName === '/projects' ? 'page' : undefined} className={`header-item${pathName === '/projects' ? "-active" : ""} inline-flex items-center mx-5`}>Projects</a>
            </Link>
            <Link href={'/skills'} legacyBehavior>
              <a role="menuitem" tabIndex={0} aria-current={pathName === '/skills' ? 'page' : undefined} className={`header-item${pathName === '/skills' ? "-active" : ""} mx-1 inline-flex items-center`}>Skills</a>
            </Link>
            <Link href={'/blogs'} legacyBehavior>
              <a role="menuitem" tabIndex={0} aria-current={pathName === '/blogs' ? 'page' : undefined} className={`header-item${pathName === '/blogs' ? "-active" : ""} inline-flex items-center ml-5`}>Blogs</a>
            </Link>
          </div>
        ) : <div />}
        {/* Right: About, Contact */}
        <div className='flex items-center self-center mb-2 header-item-div' role="menubar">
          {!hideCenterNav ? (
            <Link href={'/about'} legacyBehavior>
              <a role="menuitem" tabIndex={0} aria-current={pathName === '/about' ? 'page' : undefined} className={`header-item${pathName === '/about' ? "-active" : ""} mr-5 inline-flex items-center`}>About</a>
            </Link>
          ) : null}
          <Link href={'/contact'} legacyBehavior>
            <a role="menuitem" tabIndex={0} aria-current={pathName === '/contact' ? 'page' : undefined} className={`header-item${pathName === '/contact' ? "-active" : ""} mx-1 inline-flex items-center`}>Contact</a>
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
