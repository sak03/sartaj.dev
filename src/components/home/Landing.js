"use client"
import React from 'react'
import landingImg from '../../assets/landingImg/landing.jpg'
import Image from 'next/image';
import { Typewriter } from "react-simple-typewriter";

const Landing = () => {


    return (
        <div className='landing-section'>
            <div className='landing-section1'><Image src={landingImg} width={600} height={400} alt='landing image' /> </div>
            <div className='landing-section2'>
                <h1>
                    <Typewriter
                        words={["Hi, I'm Sartaj Alam."]}
                        loop={1} // Set to true if you want the effect to loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={150} // Typing speed in ms
                        deleteSpeed={150} // Deleting speed in ms
                        delaySpeed={1000} // Delay before typing starts again
                    />
                </h1>
                <h1>A Full Stack Web Developer.</h1>
                <p className='mt-3'>
                    As a Web Developer, I build scalable, full-stack web applications with MongoDB, Express.js, React, and Node.js. I focus on delivering responsive, interactive, and efficient solutions while adhering to clean code and best practices. Passionate about innovation, I stay updated with the latest web technologies to create robust applications.
                </p>
                <div className='mt-5'>
                    <span className='resume-download'><a href='https://drive.google.com/file/d/11_B2NTzYyvlynrw9XSXtQIRMGbR8STKx/view' target='_blank'>MY RESUME</a></span>
                    <span className='email-me'>EMAIL ME</span>
                </div>
            </div>
        </div>
    )
}

export default Landing