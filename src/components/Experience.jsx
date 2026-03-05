import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolioData';
import { HiBriefcase, HiCalendar } from 'react-icons/hi';

export default function Experience() {
    const [ref, inView] = useInView(0.1);

    return (
        <section id="experience" className="py-24 bg-dark-900 relative overflow-hidden">
            <div className="glow-orb w-80 h-80 bg-primary-800/15 -bottom-20 right-10" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary-400 font-mono text-sm mb-2">Work history</p>
                    <h2 className="section-title">Internship Experience</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-600 via-primary-800 to-transparent md:-translate-x-px" />

                    <div className="flex flex-col gap-12">
                        {portfolioData.experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className={`relative md:w-1/2 ${i % 2 === 0 ? 'md:pr-10 md:self-start' : 'md:pl-10 md:self-end md:ml-auto'
                                    } pl-8 md:pl-0`}
                            >
                                {/* Node circle */}
                                <div
                                    className={`absolute top-3 w-4 h-4 rounded-full bg-primary-500 border-2 border-dark-900 shadow-lg shadow-primary-500/40
                              left-0 md:${i % 2 === 0 ? '-right-2 md:right-[-9px] md:left-auto' : '-left-2 md:left-[-9px]'}
                              -translate-x-1/2 md:translate-x-0`}
                                />

                                <div className="card group">
                                    {/* Type badge */}
                                    <span className="inline-flex items-center gap-1 text-xs text-accent-400 font-semibold mb-3 bg-accent-500/10 px-2 py-0.5 rounded-full border border-accent-500/30">
                                        <HiBriefcase className="w-3 h-3" />
                                        {exp.type}
                                    </span>

                                    <h3 className="text-white font-bold text-lg mb-0.5">{exp.role}</h3>
                                    <p className="text-primary-400 font-medium text-sm mb-2">{exp.company}</p>

                                    <p className="text-gray-500 text-xs flex items-center gap-1 mb-4">
                                        <HiCalendar className="w-3 h-3" />
                                        {exp.period}
                                    </p>

                                    <ul className="space-y-2">
                                        {exp.bullets.map((bullet, j) => (
                                            <li key={j} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                                                <span className="text-primary-500 mt-1.5 shrink-0">▸</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
