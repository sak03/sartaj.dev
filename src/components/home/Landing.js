"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaGithubSquare, FaLinkedin, FaPhoneAlt, FaTwitterSquare } from "react-icons/fa";
import { FiArrowUpRight, FiDownload, FiMail } from 'react-icons/fi';
import landingImg from '../../assets/landingImg/landing.jpg';

const Landing = () => {
    const [callMode, setCallMode] = useState(null);
    const [isNumberCopied, setIsNumberCopied] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        const updateCallMode = () => setCallMode(mediaQuery.matches ? 'desktop' : 'mobile');

        updateCallMode();
        mediaQuery.addEventListener('change', updateCallMode);

        return () => mediaQuery.removeEventListener('change', updateCallMode);
    }, []);

    const copyMobileNoToClipboard = () => {
        navigator.clipboard.writeText("+919958564890");
        setIsNumberCopied(true);
        setTimeout(() => setIsNumberCopied(false), 2500);
    };

    return (
        <section className='landing-section landing-section-pro'>
            <div className='landing-section1 landing-visual-panel'>
                <div className='landing-visual-kicker'>
                    <span>Portfolio</span>
                    <span>Full-stack engineering</span>
                </div>
                <div className='landing-image-frame'>
                    <Image src={landingImg} width={680} height={760} priority alt='Developer working on a web application' />
                </div>
                <div className='landing-visual-stack' aria-label='Primary technology stack'>
                    <span>React</span>
                    <span>Next.js</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>Laravel</span>
                    <span>Livewire</span>
                </div>
            </div>

            <div className='landing-section2 landing-copy-panel'>
                <p className='portfolio-eyebrow'>SARTAJ ALAM</p>
                <h1>
                    Full Stack Developer building <span>clean, fast, and maintainable</span> web products.
                </h1>
                <p className='landing-lead'>
                    I work with React, Next.js, Vue.js, Laravel, Livewire, FluxUI, Node.js, and modern UI systems with TailwindCSS to turn practical product ideas into responsive, production-ready experiences.
                </p>

                <div className='landing-socials' aria-label='Social links'>
                    <a href='https://github.com/sak03' target='_blank' rel="noopener noreferrer" aria-label='GitHub'><FaGithubSquare /></a>
                    <a href='https://www.linkedin.com/in/sak03/' target='_blank' rel="noopener noreferrer" aria-label='LinkedIn'><FaLinkedin /></a>
                    <a href='https://x.com/sartaj_03' target='_blank' rel="noopener noreferrer" aria-label='X'><FaTwitterSquare /></a>
                </div>

                <div className='landing-actions'>
                    <Link href='/projects' className='portfolio-btn portfolio-btn-primary'>
                        View Projects
                        <FiArrowUpRight aria-hidden='true' />
                    </Link>
                    <a
                        className='portfolio-btn portfolio-btn-secondary'
                        href='https://drive.google.com/file/d/11_B2NTzYyvlynrw9XSXtQIRMGbR8STKx/view'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Resume
                        <FiDownload aria-hidden='true' />
                    </a>
                    <a
                        className='portfolio-btn portfolio-btn-secondary'
                        href="mailto:sartaj2394@gmail.com?subject=Project%20enquiry&body=Hi%20Sartaj%2C%20I%20would%20like%20to%20connect."
                    >
                        Email
                        <FiMail aria-hidden='true' />
                    </a>
                    {callMode === 'mobile' ? (
                        <a className='portfolio-btn portfolio-btn-secondary landing-call-mobile' href="tel:+919958564890">
                            Call
                            <FaPhoneAlt aria-hidden='true' />
                        </a>
                    ) : null}
                    {callMode === 'desktop' ? (
                        <button className='portfolio-btn portfolio-btn-secondary landing-call-desktop' type='button' onClick={copyMobileNoToClipboard}>
                            Call
                            <FaPhoneAlt aria-hidden='true' />
                        </button>
                    ) : null}
                </div>

                {isNumberCopied ? <small className='landing-copy-alert' role='status'>Phone number copied to clipboard.</small> : null}

                <div className='landing-stat-grid' aria-label='Professional highlights'>
                    <div>
                        <strong>5+</strong>
                        <span>Years building web UI</span>
                    </div>
                    <div>
                        <strong>Full Stack</strong>
                        <span>Frontend-first delivery</span>
                    </div>
                    <div>
                        <strong>Next.js</strong>
                        <span>React and Laravel stack</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
