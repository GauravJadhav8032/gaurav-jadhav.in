import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const year = new Date().getFullYear();

export default function Footer() {
    const { name, github, linkedin, email } = portfolioData.personalInfo;

    return (
        <footer className="bg-dark-900 border-t border-dark-300/50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Name */}
                    <p className="text-gray-500 text-sm">
                        © {year}{' '}
                        <span className="font-semibold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                            {name}
                        </span>{' '}

                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-600 hover:text-primary-400 transition-colors duration-200"
                            title="GitHub"
                        >
                            <FiGithub className="w-5 h-5" />
                        </a>
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-600 hover:text-primary-400 transition-colors duration-200"
                            title="LinkedIn"
                        >
                            <FiLinkedin className="w-5 h-5" />
                        </a>
                        <a
                            href={`mailto:${email}`}
                            className="text-gray-600 hover:text-primary-400 transition-colors duration-200"
                            title="Email"
                        >
                            <FiMail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
