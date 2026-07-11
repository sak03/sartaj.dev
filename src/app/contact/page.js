import ContactForm from '@/components/contact/ContactForm';
import { FaEnvelope, FaGithubSquare, FaLinkedin, FaPhoneAlt, FaTwitterSquare, FaWhatsapp } from 'react-icons/fa';

const contactLinks = [
    {
        label: 'Email',
        value: 'sartaj2394@gmail.com',
        href: 'mailto:sartaj2394@gmail.com?subject=Project%20enquiry&body=Hi%20Sartaj%2C%20I%20would%20like%20to%20discuss%20a%20project.',
        icon: <FaEnvelope />,
    },
    {
        label: 'Call',
        value: '+91 99585 64890',
        href: 'tel:+919958564890',
        icon: <FaPhoneAlt />,
    },
    {
        label: 'WhatsApp',
        value: 'Quick chat',
        href: 'https://wa.me/919958564890?text=Hi%20Sartaj%2C%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.',
        icon: <FaWhatsapp />,
    },
];

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/sak03', icon: <FaGithubSquare /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sak03/', icon: <FaLinkedin /> },
    { label: 'X', href: 'https://x.com/sartaj_03', icon: <FaTwitterSquare /> },
];

const Contact = () => {
    return (
        <div className='portfolio-page contact-page'>
            <section className='portfolio-hero contact-hero'>
                <div>
                    <p className='portfolio-eyebrow'>CONTACT</p>
                    <h1 className='portfolio-hero-title'>Have a project, role, or idea? Let&apos;s talk.</h1>
                    <p className='portfolio-hero-text'>
                        Share what you want to build and I&apos;ll get back to you. For now, this page is backend-free, so the form opens your email app with a ready-to-send message.
                    </p>
                    <div className='contact-socials' aria-label='Social profiles'>
                        {socialLinks.map((item) => (
                            <a href={item.href} key={item.label} target='_blank' rel='noopener noreferrer' aria-label={item.label}>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className='contact-link-panel'>
                    {contactLinks.map((item) => (
                        <a className='contact-link-card' href={item.href} key={item.label} target={item.label === 'WhatsApp' ? '_blank' : undefined} rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}>
                            <span className='contact-link-icon' aria-hidden='true'>{item.icon}</span>
                            <span>
                                <strong>{item.label}</strong>
                                <small>{item.value}</small>
                            </span>
                        </a>
                    ))}
                </div>
            </section>

            <section className='portfolio-section contact-content-section'>
                <div>
                    <p className='portfolio-eyebrow'>START A CONVERSATION</p>
                    <h2 className='portfolio-section-title'>Tell me the useful details.</h2>
                    <p className='portfolio-body-text'>
                        A good first message usually includes the goal, timeline, current tech stack, and whether the work is a new build or improvement of an existing product.
                    </p>
                    <div className='contact-mini-list'>
                        <span>Web apps</span>
                        <span>Portfolio sites</span>
                        <span>Frontend fixes</span>
                        <span>API integration</span>
                    </div>
                </div>
                <ContactForm />
            </section>
        </div>
    );
};

export default Contact;
