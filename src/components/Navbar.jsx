import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX, HiDownload } from 'react-icons/hi';
import { portfolioData } from '../data/portfolioData';

const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-dark-800/90 backdrop-blur-md border-b border-dark-300/50 shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        to="home"
                        smooth
                        duration={500}
                        className="cursor-pointer flex items-center gap-2"
                    >
                        <span className="text-xl font-bold gradient-text">
                            {portfolioData.personalInfo.name.split(' ')[0]}
                        </span>
                        <span className="text-xl font-bold text-white">
                            {portfolioData.personalInfo.name.split(' ')[1]}
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link}
                                to={link.toLowerCase()}
                                smooth
                                duration={500}
                                offset={-64}
                                spy
                                activeClass="text-primary-400"
                                className="px-4 py-2 text-gray-400 hover:text-white text-sm font-medium
                           transition-colors duration-200 rounded-lg hover:bg-dark-400 cursor-pointer"
                            >
                                {link}
                            </Link>
                        ))}
                    </div>

                    {/* Download Button */}
                    <div className="hidden md:flex items-center">
                        <a
                            href={portfolioData.personalInfo.resumeLink}
                            className="btn-primary text-sm"
                        >
                            <HiDownload className="w-4 h-4" />
                            Resume
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-dark-800/95 backdrop-blur-md border-b border-dark-300/50">
                    <div className="px-4 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link}
                                to={link.toLowerCase()}
                                smooth
                                duration={500}
                                offset={-64}
                                className="px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-400 
                           rounded-lg cursor-pointer transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {link}
                            </Link>
                        ))}
                        <a
                            href={portfolioData.personalInfo.resumeLink}
                            className="btn-primary mt-2 justify-center"
                        >
                            <HiDownload className="w-4 h-4" />
                            Download Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
