import React from 'react';
import Reveal from '@/components/Reveal';

const designSkills = [
  { name: 'Figma', value: 90 },
  { name: 'Adobe PhotoShop', value: 85 },
  { name: 'User Research & Wireframing', value: 90 }
];

const devSkills = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'Python', 'Git/GitHub'
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 md:px-16 overflow-hidden">
      <div className="bg-glow bg-glow-blue w-[400px] h-[400px] top-[10%] right-[10%] opacity-30 animate-blob"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <Reveal className="text-center mb-16 relative z-10">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">My Arsenal</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Tools & Technologies</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full relative z-10">
          
          {/* Design Skills - Progress Bars */}
          <Reveal className="glass-panel p-8 md:p-10 flex flex-col gap-8">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
              <span className="text-indigo-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              </span>
              Design
            </h3>
            
            <div className="flex flex-col gap-6">
              {designSkills.map((skill, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-400 font-mono">{skill.value}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-indigo-500 h-2 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-1000" 
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Development Skills - Tags */}
          <Reveal delay={0.2} className="glass-panel p-8 md:p-10 flex flex-col gap-8 h-full">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
              <span className="text-emerald-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </span>
              Development
            </h3>
            
            <div className="flex flex-wrap gap-4 mt-2">
              {devSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-5 py-3 glass-panel hover:bg-white/10 text-gray-300 hover:text-white hover:-translate-y-1 transition-all duration-300 font-medium cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
          
        </div>
        
        {/* Certification standalone pill */}
        <Reveal delay={0.3} className="mt-20 flex flex-col items-center gap-6 relative z-10 animate-float">
          <span className="text-gray-400 text-sm tracking-widest uppercase">Latest Certification</span>
          <div className="glass-panel px-8 py-4 flex items-center gap-4 hover:border-yellow-500/30 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.02)]">
            <i className="fa-solid fa-certificate text-yellow-500 text-xl"></i>
            <span className="text-white font-medium">UI/UX Design with AI - Entri (2025)</span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
