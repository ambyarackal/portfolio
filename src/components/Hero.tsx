import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen pt-32 pb-20 px-6 md:px-16 flex flex-col justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="bg-glow bg-glow-purple w-[500px] h-[500px] -top-[100px] -left-[100px]"></div>
      <div className="bg-glow bg-glow-blue w-[600px] h-[600px] top-[30%] -right-[200px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Text Content */}
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 uppercase tracking-widest">
            UI/UX DESIGNER & FRONTEND DEV
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter">
            <span className="text-white">Designing</span><br/>
            <span className="text-indigo-400">Intuitive</span> <span className="text-white">Digital</span><br/>
            <span className="text-white">Experiences.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg font-light leading-relaxed">
            Hi, I&apos;m <strong className="font-semibold text-white">Abilash Abraham</strong>. I blend creative design with technical precision to build accessible, user-centered interfaces. Based in Kerala / Karnataka.
          </p>
          
          <div className="flex items-center gap-4 mt-4">
            <button className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              View Work <span>→</span>
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download CV
            </button>
          </div>
          
          {/* Social Icons Placeholder */}
          <div className="flex items-center gap-6 mt-8 text-gray-500">
             {/* LinkedIn */}
             <a href="#" className="hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
             {/* Email */}
             <a href="#" className="hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></a>
             {/* Behance */}
             <a href="#" className="hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.546-1.436-2.35-2.461-2.35-1.378 0-2.339.959-2.504 2.35zm-8.533 5h-7.507v-14h7.507c2.986 0 4.298 1.438 4.298 3.553 0 1.5-1.144 2.375-2.094 2.766 1.487.436 2.505 1.597 2.505 3.398 0 2.222-1.503 4.283-4.709 4.283zm-4.507-2v-3.5h3.401c1.238 0 1.83.626 1.83 1.637 0 1.341-1.028 1.863-1.898 1.863h-3.333zm0-5.5h3.111c1.038 0 1.631-.571 1.631-1.579 0-.916-.549-1.421-1.458-1.421h-3.284v3z"/></svg></a>
          </div>
        </div>

        {/* Right Column - Avatar */}
        <div className="relative flex justify-center items-center">
          {/* Avatar Ring Glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full border border-indigo-500/30 flex justify-center items-center shadow-[0_0_80px_rgba(99,102,241,0.2)]">
            <div className="w-[380px] h-[380px] rounded-full bg-indigo-500/20 backdrop-blur-3xl overflow-hidden flex justify-center items-end">
                {/* 3D Character Placeholder (fallback to a nice silhouette or emoji if empty) */}
                <img 
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop" 
                  alt="Avatar" 
                  className="w-[85%] h-[85%] object-cover object-top filter contrast-125 brightness-110 drop-shadow-2xl mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 rounded-full"
                />
            </div>
          </div>
          
          {/* Floating Tags */}
          <div className="absolute top-[20%] right-0 glass-panel px-4 py-2 flex items-center gap-2 transform translate-x-10 animate-pulse">
             <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
             <span className="text-sm font-medium text-white/90">Focus UI Design</span>
          </div>
          <div className="absolute bottom-[20%] left-0 glass-panel px-4 py-2 flex items-center gap-2 transform -translate-x-10">
             <span className="text-green-400 font-mono">{"</>"}</span>
             <span className="text-sm font-medium text-white/90">Frontend Dev</span>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mt-32 glass-panel p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 text-center">
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-bold text-white">3+</span>
          <span className="text-xs tracking-widest text-gray-400 uppercase">Years Exp.</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-bold text-white">20+</span>
          <span className="text-xs tracking-widest text-gray-400 uppercase">Projects</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-bold text-white">HTML/CSS/JS</span>
          <span className="text-xs tracking-widest text-gray-400 uppercase">Expertise</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-bold text-white">Figma</span>
          <span className="text-xs tracking-widest text-gray-400 uppercase">Prototyping</span>
        </div>
      </div>
    </section>
  );
}
