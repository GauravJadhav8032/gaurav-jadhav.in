import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolioData';
import { HiAcademicCap, HiLocationMarker } from 'react-icons/hi';

export default function About() {
    const [ref, inView] = useInView(0.15);

    return (
        <section id="about" className="py-24 bg-dark-800 relative overflow-hidden">
            {/* Background accent */}
            <div className="glow-orb w-72 h-72 bg-primary-800/15 top-10 right-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary-400 font-mono text-sm mb-2">Get to know me</p>
                    <h2 className="section-title">About Me</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-4">
                            Professional Summary
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-base mb-6">
                            {portfolioData.summary}
                        </p>

                        <div className="flex flex-col gap-3">
                            <InfoRow label="Email" value={portfolioData.personalInfo.email} />
                            <InfoRow label="Phone" value={portfolioData.personalInfo.phone} />
                            <InfoRow label="Location" value={portfolioData.personalInfo.location} />
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <HiAcademicCap className="text-primary-400 w-6 h-6" />
                            Education
                        </h3>
                        <div className="flex flex-col gap-4">
                            {portfolioData.education.map((edu, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                    className="card group"
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-white text-sm leading-snug mb-1">
                                                {edu.institution}
                                            </h4>
                                            <p className="text-primary-400 text-xs mb-2">{edu.degree}</p>
                                            <p className="text-gray-500 text-xs flex items-center gap-1">
                                                <HiLocationMarker className="w-3 h-3" />
                                                {edu.location}
                                            </p>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <span className="text-gray-500 text-xs block">{edu.year}</span>
                                            <span className="text-accent-400 text-sm font-bold mt-1 block">
                                                {edu.grade}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function InfoRow({ label, value }) {
    return (
        <div className="flex items-center gap-3">
            <span className="text-primary-400 font-mono text-xs w-20 shrink-0">{label}:</span>
            <span className="text-gray-300 text-sm">{value}</span>
        </div>
    );
}
