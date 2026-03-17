import React from 'react';
import Reveal from '@/components/Reveal';

const experiences = [
  {
    role: 'AI Language Trainer',
    company: 'Outlier (Freelance)',
    period: 'Jan 2022 - Current',
    description: 'Developing AI datasets & evaluating linguistic performance.',
    side: 'left'
  },
  {
    role: 'Penetration Tester',
    company: 'Freelance',
    period: 'Jan 2022 - Current',
    description: 'Vulnerability assessment & OWASP compliance testing.',
    side: 'right'
  },
  {
    role: 'Python Developer',
    company: 'Focture Technologies',
    period: 'Jul 2020 - Aug 2021', // Approximated from screenshot ending in 202
    description: 'Developed web apps & integrated APIs for frontend functionality.',
    side: 'left'
  },
  {
    role: 'Penetration Tester (Intern)',
    company: 'SISA, Bengaluru',
    period: 'Jan 2018 - Dec 2018',
    description: 'Assisted in security audits and vulnerability testing.',
    side: 'right'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <Reveal className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Professional Experience</h2>
        </Reveal>

        <div className="relative w-full">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-white/10 hidden md:block"></div>

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <Reveal key={index} delay={0.1 * index} className={`flex flex-col md:flex-row items-center justify-between w-full ${exp.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Empty Space for the other side */}
                <div className="hidden md:block w-[45%]"></div>

                {/* Center Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 hidden md:block shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

                {/* Content */}
                <div className={`w-full md:w-[45%] flex flex-col ${exp.side === 'left' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} text-center mb-8 md:mb-0`}>
                  <div className="mb-2">
                    <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-indigo-400 font-medium">{exp.company}</p>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
                    {exp.description}
                  </p>
                </div>
                
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
