import Link from 'next/link';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentDate = new Date();

  return (
    <footer className='footer-pro' role="contentinfo" aria-label="Site Footer">
      <div className='footer-cta'>
        <div>
          <p className='portfolio-eyebrow'>LET'S BUILD</p>
          <h2>Need a clean portfolio, frontend, or full-stack web app?</h2>
        </div>
        <Link href='/contact' className='portfolio-btn portfolio-btn-primary'>
          Start a conversation
          <FiArrowUpRight aria-hidden='true' />
        </Link>
      </div>

      <div className='footer-section footer-main'>
        <div>
          <Link href='/' className="pointer footer-brand-name" aria-label="Go to homepage">
            <span className='footer-brand-name1'>SARTAJ</span><span className='footer-brand-name2'>ALAM</span>
          </Link>
          <p className='footer-sub-item'>Full Stack Developer focused on React, Next.js, Vue.js, Laravel, Livewire, FluxUI, and practical product UI with TailwindCSS.</p>
        </div>

        <div>
          <h3 className='footer-item'>Explore</h3>
          <nav aria-label="Footer Important Links" className='footer-link-list'>
            <Link href="/projects">Projects</Link>
            <Link href="/work-experiences">Experience</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/blogs">Blogs</Link>
          </nav>
        </div>

        <div>
          <h3 className='footer-item'>Contact</h3>
          <a href='mailto:sartaj2394@gmail.com' className='footer-email-link'>
            <FiMail aria-hidden='true' />
            sartaj2394@gmail.com
          </a>
          <div className='footer-social-list'>
            <a href='https://github.com/sak03' target='_blank' rel="noopener noreferrer" aria-label='GitHub'><FaGithubSquare /></a>
            <a href='https://www.linkedin.com/in/sak03/' target='_blank' rel="noopener noreferrer" aria-label='LinkedIn'><FaLinkedin /></a>
            <a href='https://x.com/sartaj_03' target='_blank' rel="noopener noreferrer" aria-label='X'><FaTwitterSquare /></a>
          </div>
        </div>
      </div>

      <div className='footer-bottom-row'>
        <span>&copy; {currentDate.getFullYear()} Sartaj Alam</span>
        <span>Designed and maintained by Sartaj Alam</span>
      </div>
    </footer>
  );
};

export default Footer;
