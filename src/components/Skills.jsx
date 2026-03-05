import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolioData';

const categoryColors = {
    Frontend: 'from-blue-500 to-cyan-400',
    Backend: 'from-green-500 to-emerald-400',
    Database: 'from-orange-500 to-amber-400',
    'Tools & Platforms': 'from-purple-500 to-violet-400',
    Concepts: 'from-pink-500 to-rose-400',
};

export default function Skills() {
    const [ref, inView] = useInView(0.1);

    return (
        <section id="skills" className="py-24 bg-dark-800 relative overflow-hidden">
            <div className="glow-orb w-72 h-72 bg-accent-500/10 top-20 right-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary-400 font-mono text-sm mb-2">My tech arsenal</p>
                    <h2 className="section-title">Skills</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.skills.map((group, i) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="card group hover:scale-[1.02] transition-transform duration-300"
                        >
                            {/* Category header */}
                            <div
                                className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest
                            bg-gradient-to-r ${categoryColors[group.category] || 'from-primary-500 to-accent-400'}
                            bg-clip-text text-transparent mb-4`}
                            >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${categoryColors[group.category] || 'from-primary-500 to-accent-400'}`} />
                                {group.category}
                            </div>

                            {/* Skill pills */}
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill, j) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                                        className="px-3 py-1.5 bg-dark-700/80 border border-dark-300 rounded-lg 
                               text-gray-300 text-sm font-medium
                               hover:border-primary-500 hover:text-white hover:bg-dark-400
                               transition-all duration-200 cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
