import Link from 'next/link';
import { FaCode, FaLayerGroup, FaRocket, FaServer } from 'react-icons/fa';
import { SiLaravel, SiNextdotjs, SiReact } from 'react-icons/si';

const highlights = [
    {
        title: 'Frontend Craft',
        description: 'I build responsive, accessible interfaces with React, Next.js, reusable components, and clean SCSS/Tailwind patterns.',
        icon: <SiReact />,
    },
    {
        title: 'Backend Thinking',
        description: 'I can own API integration, Laravel/Node flows, database-aware UI decisions, and production debugging with calm execution.',
        icon: <FaServer />,
    },
    {
        title: 'Product Mindset',
        description: 'I care about what users need, what the business needs, and what future developers will have to maintain.',
        icon: <FaLayerGroup />,
    },
];

const values = [
    'Clean component architecture',
    'Mobile-first responsive layouts',
    'Performance and SEO awareness',
    'API integration and real-world debugging',
    'Readable code with practical naming',
    'Reliable delivery with ownership',
];

const About = () => {
    return (
        <div className='portfolio-page about-page'>
            <section className='portfolio-hero'>
                <div>
                    <p className='portfolio-eyebrow'>ABOUT ME</p>
                    <h1 className='portfolio-hero-title'>I build web products that feel clean, fast, and easy to use.</h1>
                    <p className='portfolio-hero-text'>
                        I&apos;m Sartaj Alam, a Full Stack Web Developer focused on React, Next.js, Laravel, Node.js, and modern web interfaces.
                        My work sits between thoughtful UI, maintainable code, and practical business delivery.
                    </p>
                    <div className='portfolio-actions'>
                        <Link href='/projects' className='portfolio-btn portfolio-btn-primary'>View Projects</Link>
                        <Link href='/contact' className='portfolio-btn portfolio-btn-secondary'>Contact Me</Link>
                    </div>
                </div>
                <div className='about-hero-card' aria-label='Professional summary'>
                    <span className='about-hero-mark' aria-hidden='true'><FaCode /></span>
                    <h2>Full Stack Developer</h2>
                    <p>Frontend-heavy engineer with backend understanding, production ownership, and a strong eye for usable interfaces.</p>
                    <div className='about-stack-list'>
                        <span><SiNextdotjs /> Next.js</span>
                        <span><SiReact /> React</span>
                        <span><SiLaravel /> Laravel</span>
                        <span><FaRocket /> Delivery</span>
                    </div>
                </div>
            </section>

            <section className='portfolio-section'>
                <p className='portfolio-eyebrow'>WHAT I DO</p>
                <h2 className='portfolio-section-title'>I turn ideas into stable, scalable web experiences.</h2>
                <div className='portfolio-card-grid'>
                    {highlights.map((item) => (
                        <article className='portfolio-card' key={item.title}>
                            <span className='portfolio-card-icon' aria-hidden='true'>{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className='portfolio-section about-story-section'>
                <div>
                    <p className='portfolio-eyebrow'>MY APPROACH</p>
                    <h2 className='portfolio-section-title'>Simple process, serious execution.</h2>
                    <p className='portfolio-body-text'>
                        I like to understand the problem first, then choose the simplest architecture that can support the feature properly.
                        I keep UI states clear, components reusable, and integrations predictable so the project stays easier to grow after launch.
                    </p>
                </div>
                <div className='about-values'>
                    {values.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
