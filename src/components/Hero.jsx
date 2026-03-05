import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { HiArrowRight, HiMail } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

/* Generate random streak lines for background */
const streaks = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    height: `${60 + Math.random() * 140}px`,
    delay: `${Math.random() * 8}s`,
    duration: `${4 + Math.random() * 6}s`,
    color: i % 3 === 0 ? '#6272f2' : i % 3 === 1 ? '#fb923c' : '#a5bbfb',
}));

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
        >
            {/* Streaks Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {streaks.map((s) => (
                    <div
                        key={s.id}
                        className="streak"
                        style={{
                            left: s.left,
                            top: s.top,
                            height: s.height,
                            width: '1.5px',
                            background: `linear-gradient(to bottom, transparent, ${s.color}, transparent)`,
                            animationDuration: s.duration,
                            animationDelay: s.delay,
                        }}
                    />
                ))}
            </div>

            {/* Glow Orbs */}
            <div className="glow-orb w-96 h-96 bg-primary-700/20 top-1/4 -left-32" />
            <div className="glow-orb w-80 h-80 bg-accent-500/10 bottom-1/4 -right-24" />

            {/* Grid Overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-primary-900/40 border border-primary-700/40 text-primary-300 text-sm mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Available for opportunities
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-4"
                >
                    <span className="gradient-text">{portfolioData.personalInfo.title}</span>
                    <br />
                    <span className="gradient-text">{portfolioData.personalInfo.subtitle}</span>
                </motion.h1>

                {/* Summary */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-justify"
                >
                    {portfolioData.summary}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <Link to="projects" smooth duration={600} offset={-64}>
                        <button className="btn-primary text-base px-8 py-4">
                            View Projects
                            <HiArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                    <Link to="contact" smooth duration={600} offset={-64}>
                        <button className="btn-outline text-base px-8 py-4">
                            <HiMail className="w-5 h-5" />
                            Contact Me
                        </button>
                    </Link>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center justify-center gap-4"
                >
                    <a
                        href={portfolioData.personalInfo.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl border border-dark-300 text-gray-400 hover:text-white 
                       hover:border-primary-600 hover:bg-dark-400 transition-all duration-300"
                    >
                        <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                        href={portfolioData.personalInfo.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl border border-dark-300 text-gray-400 hover:text-white 
                       hover:border-primary-600 hover:bg-dark-400 transition-all duration-300"
                    >
                        <FiLinkedin className="w-5 h-5" />
                    </a>
                    <a
                        href={`mailto:${portfolioData.personalInfo.email}`}
                        className="p-3 rounded-xl border border-dark-300 text-gray-400 hover:text-white 
                       hover:border-primary-600 hover:bg-dark-400 transition-all duration-300"
                    >
                        <HiMail className="w-5 h-5" />
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex flex-col items-center gap-2 mt-8"
                >
                    <span className="text-gray-600 text-xs">Scroll down</span>
                    <div className="w-5 h-8 border-2 border-gray-700 rounded-full flex justify-center pt-1">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1 h-1 bg-primary-400 rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
