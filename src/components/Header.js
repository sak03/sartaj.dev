import React from 'react'

const Header = () => {
  return (
    <div className='px-3 py-2 flex justify-between bg-white'>
      <div >
        <h3 className='brand-name'>Sartaj Alam</h3>
      </div>
      <div className='flex'>
        <span>Home</span>
        <span>About</span>
        <span>Work</span>
        <span>Skills</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </div>
  )
}

export default Header