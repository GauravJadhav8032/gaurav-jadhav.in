import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { HiStar } from 'react-icons/hi';

export default function Projects() {
    const [ref, inView] = useInView(0.1);

    return (
        <section id="projects" className="py-24 bg-dark-900 relative overflow-hidden">
            <div className="glow-orb w-96 h-96 bg-primary-800/10 -bottom-20 -left-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary-400 font-mono text-sm mb-2">What I've built</p>
                    <h2 className="section-title">Projects</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.projects.map((project, i) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            className="group relative card flex flex-col"
                        >
                            {project.featured && (
                                <div className="absolute -top-3 -right-3 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                    <HiStar className="w-3 h-3" />
                                    Featured
                                </div>
                            )}

                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">
                                        {project.name.charAt(0)}
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-500 hover:text-white transition-colors"
                                            title="View on GitHub"
                                        >
                                            <FiGithub className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-500 hover:text-accent-400 transition-colors"
                                            title="Live Demo"
                                        >
                                            <FiExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Name & tagline */}
                            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-primary-300 transition-colors">
                                {project.name}
                            </h3>
                            <p className="text-primary-400 text-xs font-mono mb-3">{project.tagline}</p>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                                {project.description}
                            </p>

                            {/* Tech pills */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="tech-badge">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
