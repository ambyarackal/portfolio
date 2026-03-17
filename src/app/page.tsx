import Navbar from '@/components/Navbar';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-[#070913] text-white selection:bg-indigo-500/30 font-sans antialiased">
      <Navbar />
      
      {/* 500vh Scrolly section, plays image sequence under the overlay */}
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>

      {/* Normal flow sections below the sequence */}
      <div className="relative z-20 bg-[#070913]">
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
      
    </main>
  );
}
