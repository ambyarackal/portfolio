import React from 'react';
import Reveal from '@/components/Reveal';

const projects = [
  {
    title: 'MyBus – Public Bus Tracking App',
    description: 'A public transport UX case study focused on live tracking, route discovery, and commuter clarity.',
    tags: ['UI Design', 'Layout'],
    link: 'https://www.figma.com/proto/1IiNpYYH2J3lAg83cg5tDN/Abilash-19-01-2026?page-id=52%3A5&node-id=1809-1617&viewport=5076%2C-567%2C0.05&t=PJUd7e9JfLebcLMU-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=187%3A363',
    logo: '/images/mybus.png'
  },
  {
    title: 'MediBook',
    description: 'A mobile-first healthcare app focused on simplifying doctor discovery and appointment booking.',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    link: 'https://www.figma.com/proto/1IiNpYYH2J3lAg83cg5tDN/Abilash-19-01-2026?page-id=52%3A5&node-id=840-253&viewport=9780%2C-1083%2C0.1&t=U8inVL6RYYgn8lZT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=187%3A363',
    logo: '/images/medibook.png'
  },
  {
    title: 'IRCTC App Redesign',
    description: 'A refreshed app interface improving clarity and navigation for train booking and related services.',
    tags: ['UX Research', 'Prototyping'],
    link: 'https://www.figma.com/proto/1IiNpYYH2J3lAg83cg5tDN/Abilash-19-01-2026?page-id=52%3A5&node-id=2049-2258&viewport=-3268%2C-3893%2C0.08&t=hRg1uvxMbvqMvpCT-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=187%3A363',
    logo: '/images/irctc.png'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 md:px-16 bg-[#070913]/50">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects & Case Studies</h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            See all projects
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={index} delay={0.1 * index} className="flex flex-col glass-panel overflow-hidden group hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.3)] hover:border-indigo-500/50 transition-all duration-300">

              {/* Image/Icon Placeholder Container */}
              <div className="h-48 w-full bg-gradient-to-br from-indigo-500/20 to-transparent flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-glow bg-glow-purple opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                {project.logo ? (
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="w-20 h-20 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white/50 relative z-10">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                      </path>
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={project.link} className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 font-medium w-max group/link">
                  View Details <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
