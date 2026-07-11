"use client"

import { useMemo, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const initialForm = {
    name: '',
    email: '',
    projectType: 'Website / Portfolio',
    message: '',
};

const ContactForm = () => {
    const [form, setForm] = useState(initialForm);

    const mailtoHref = useMemo(() => {
        const subject = encodeURIComponent(`Project enquiry from ${form.name || 'Portfolio visitor'}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType}\n\nMessage:\n${form.message}`
        );

        return `mailto:sartaj2394@gmail.com?subject=${subject}&body=${body}`;
    }, [form]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = mailtoHref;
    };

    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            <div className='contact-form-row'>
                <label>
                    <span>Name</span>
                    <input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder='Your name'
                        required
                    />
                </label>
                <label>
                    <span>Email</span>
                    <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder='you@example.com'
                        required
                    />
                </label>
            </div>

            <label>
                <span>Project Type</span>
                <select name='projectType' value={form.projectType} onChange={handleChange}>
                    <option>Website / Portfolio</option>
                    <option>React / Next.js App</option>
                    <option>Laravel / Backend Work</option>
                    <option>Bug Fixing / Optimization</option>
                    <option>Long-term Collaboration</option>
                </select>
            </label>

            <label>
                <span>Message</span>
                <textarea
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='Tell me what you want to build, improve, or fix.'
                    rows={6}
                    required
                />
            </label>

            <button type='submit' className='portfolio-btn portfolio-btn-primary contact-submit'>
                <FaPaperPlane aria-hidden='true' />
                Send With Email App
            </button>
            <p className='contact-form-note'>
                This form works without a database or SMTP. It opens your email app with the message already prepared.
            </p>
        </form>
    );
};

export default ContactForm;
