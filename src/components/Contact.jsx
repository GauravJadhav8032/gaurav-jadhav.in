import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolioData';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiLoader } from 'react-icons/fi';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
    const [ref, inView] = useInView(0.1);
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                    reply_to: form.email,
                },
                PUBLIC_KEY
            );
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const info = portfolioData.personalInfo;

    return (
        <section id="contact" className="py-24 bg-dark-800 relative overflow-hidden">
            <div className="glow-orb w-80 h-80 bg-primary-800/20 top-10 -left-20" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary-400 font-mono text-sm mb-2">Let's connect</p>
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4" />
                    <p className="text-gray-400 max-w-xl mx-auto">
                        I'm always open to discussing new opportunities, interesting projects, or just having a tech chat. Drop me a message!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="lg:col-span-2 flex flex-col gap-4"
                    >
                        <ContactItem icon={<HiMail className="w-5 h-5" />} label="Email" value={info.email} href={`mailto:${info.email}`} />
                        <ContactItem icon={<HiPhone className="w-5 h-5" />} label="Phone" value={info.phone} href={`tel:${info.phone}`} />
                        <ContactItem icon={<HiLocationMarker className="w-5 h-5" />} label="Location" value={info.location} />

                        <div className="mt-4">
                            <p className="text-gray-500 text-xs mb-3 font-mono">Find me on:</p>
                            <div className="flex gap-3">
                                <SocialLink href={info.github} icon={<FiGithub className="w-5 h-5" />} label="GitHub" />
                                <SocialLink href={info.linkedin} icon={<FiLinkedin className="w-5 h-5" />} label="LinkedIn" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="lg:col-span-3 card flex flex-col gap-5"
                    >
                        <div className="grid sm:grid-cols-2 gap-5">
                            <InputField
                                label="Your Name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />
                            <InputField
                                label="Your Email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                                Message <span className="text-accent-500">*</span>
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Tell me about your project or just say hi..."
                                className="w-full bg-dark-700 border border-dark-300 rounded-xl px-4 py-3 
                           text-gray-100 text-sm placeholder-gray-600 resize-none
                           focus:border-primary-500 focus:ring-1 focus:ring-primary-500
                           transition-all duration-200"
                            />
                        </div>

                        {/* Status Message */}
                        {status === 'success' && (
                            <div className="flex items-center gap-2 text-green-400 text-sm bg-green-900/20 border border-green-700/40 rounded-xl px-4 py-3">
                                <HiCheckCircle className="w-5 h-5 shrink-0" />
                                <span>Message sent! I'll get back to you soon.</span>
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/20 border border-red-700/40 rounded-xl px-4 py-3">
                                <HiExclamationCircle className="w-5 h-5 shrink-0" />
                                <span>Something went wrong. Please try again or email me directly.</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className={`btn-primary justify-center py-4 text-base transition-all duration-300
                                ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}
                                ${status === 'success' ? '!bg-green-600 hover:!bg-green-500 !shadow-green-600/40' : ''}
                            `}
                        >
                            {status === 'loading' && (
                                <>
                                    <FiLoader className="w-5 h-5 animate-spin" />
                                    Sending…
                                </>
                            )}
                            {status === 'success' && (
                                <>
                                    <HiCheckCircle className="w-5 h-5" />
                                    Sent!
                                </>
                            )}
                            {(status === 'idle' || status === 'error') && (
                                <>
                                    Send Message
                                    <HiPaperAirplane className="w-5 h-5 rotate-90" />
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

function ContactItem({ icon, label, value, href }) {
    const content = (
        <div className="card flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-primary-900/50 text-primary-400 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                {icon}
            </div>
            <div>
                <p className="text-gray-500 text-xs">{label}</p>
                <p className="text-gray-200 text-sm font-medium">{value}</p>
            </div>
        </div>
    );
    if (href) return <a href={href} className="block hover:no-underline">{content}</a>;
    return content;
}

function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-dark-300 
                 text-gray-400 hover:text-white hover:border-primary-600 hover:bg-dark-400
                 transition-all duration-300 text-sm font-medium"
        >
            {icon}
            {label}
        </a>
    );
}

function InputField({ label, name, type, value, onChange, placeholder, required }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                {label} {required && <span className="text-accent-500">*</span>}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full bg-dark-700 border border-dark-300 rounded-xl px-4 py-3 
                   text-gray-100 text-sm placeholder-gray-600
                   focus:border-primary-500 focus:ring-1 focus:ring-primary-500
                   transition-all duration-200"
            />
        </div>
    );
}
