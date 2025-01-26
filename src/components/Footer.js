import React from 'react'

const Footer = () => {
  const currentDate = new Date()
  return (
    <div className='bg-white'>
      <div className='px-5 flex justify-between'>
        <div>
          <h3 className='footer-item'>Sartaj Alam</h3>
          <p>Your complete Web Solutions</p>
        </div>
        <div>
          <h3>Expert in</h3>
          <p>Front End Web development</p>
        </div>
        <div>
          <h3>Follow me</h3>
          <p>Li</p>
        </div>
      </div>
      <div>
        <div className='footer-line'></div>
        &copy; {currentDate.getFullYear()}</div>
    </div>
  )
}

export default Footer