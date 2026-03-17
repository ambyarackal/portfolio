'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Overlay() {
  const { scrollY } = useScroll();

  // Mapping scroll raw pixels based on a 500vh sequence container (~4000-5000px on desktop)
  // Text 1: Appears at start, fades out
  const opacity1 = useTransform(scrollY, [0, 600, 1000], [1, 1, 0]);
  const y1 = useTransform(scrollY, [0, 800], [0, -100]);

  // Text 2: Fades in middle, fades out
  const opacity2 = useTransform(scrollY, [1000, 1600, 2200, 2800], [0, 1, 1, 0]);
  const x2 = useTransform(scrollY, [1000, 1600], [-50, 0]);

  // Text 3: Fades in at end of sequence
  const opacity3 = useTransform(scrollY, [2600, 3200, 3800], [0, 1, 0]);
  const x3 = useTransform(scrollY, [2600, 3200], [50, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">

      {/* 0% Scroll -> Fade Out */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute text-center flex flex-col items-center"
      >
        <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-xs font-medium text-indigo-300 uppercase tracking-widest drop-shadow-md">
          UI/UX DESIGNER & FRONTEND DEV
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
          ABILASH ABRAHAM
        </h1>
      </motion.div>

      {/* 30% Scroll -> Left Side */}
      <motion.div
        style={{ opacity: opacity2, x: x2 }}
        className="absolute w-full px-10 md:px-32 flex justify-start"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl max-w-2xl leading-tight">
          Designing <span className="text-indigo-400">Intuitive</span> Digital Experiences.
        </h2>
      </motion.div>

      {/* 60% Scroll -> Right Side */}
      <motion.div
        style={{ opacity: opacity3, x: x3, pointerEvents: 'auto' }}
        className="absolute w-full px-10 md:px-32 flex flex-col items-end text-right"
      >
        <p className="text-3xl md:text-5xl font-light tracking-tight text-gray-200 drop-shadow-2xl max-w-xl leading-relaxed mb-8">
          I blend <strong className="font-semibold text-white">creative design</strong> with <strong className="font-semibold text-white">technical precision</strong>.
        </p>

        <div className="flex flex-wrap gap-4 justify-end">
          <div className="flex flex-col items-center gap-4">
            <a href="#projects" className="px-8 py-3.5 bg-indigo-500 text-white rounded-full font-medium hover:bg-indigo-600 transition-all shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center gap-2 group">
              View Work <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
            <div className="flex justify-center gap-6 text-gray-100">
              <a href="https://www.linkedin.com/in/abilash-abraham-arackal/" target="_blank" className="hover:text-indigo-800 transition-colors text-xl"><i className="fa-brands fa-linkedin"></i></a>
              <a href="mailto:abilashabraham93@gmail.com" className="hover:text-indigo-800 transition-colors text-xl"><i className="fa-solid fa-envelope"></i></a>
              <a href="https://www.behance.net/abilashabraham" target="_blank" className="hover:text-indigo-800 transition-colors text-xl"><i className="fa-brands fa-behance"></i></a>
            </div>
          </div>
          <a href="https://drive.google.com/file/d/1UxerP1UcI1mEZ-5bzo1mMi_RoeaqTuAs/view?usp=sharing" target="_blank" className="px-8 py-3.5 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-all flex items-center gap-2 self-start">
            <i className="fa-solid fa-download"></i> Download CV
          </a>
        </div>
      </motion.div>

    </div>
  );
}
