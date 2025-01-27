"use client"
import React from 'react'
import landingImg from '../../assets/landingImg/landing.jpg'
import Image from 'next/image';
import { Typewriter } from "react-simple-typewriter";

const Landing = () => {
  return (
      <div className='landing-section'>
          <div><Image src={landingImg} width={600} height={400} alt='landing image'/> </div>
          <div className='landing-title-section'>
              <h3 className='landing-title'>Hi, I am Sarta Alam</h3>
              <h1 className="text-3xl font-bold">
                  <Typewriter
                      words={["Hi, I'm Sartaj Alam."]}
                      loop={false} // Set to true if you want the effect to loop
                      cursor
                      cursorStyle="_"
                      typeSpeed={70} // Typing speed in ms
                      deleteSpeed={50} // Deleting speed in ms
                      delaySpeed={1000} // Delay before typing starts again
                  />
              </h1>
              <div>
                  <span className='pointer'><a href='https://drive.google.com/file/d/11_B2NTzYyvlynrw9XSXtQIRMGbR8STKx/view' target='_blank'>My Resume</a></span>
                <span>Email Me</span>
              </div>
        </div>
    </div>
  )
}

export default Landing