import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#070913]/80 backdrop-blur-lg border-b border-white/5 py-4 px-6 md:px-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl font-bold tracking-widest text-white uppercase flex items-center gap-2">
           ABILASH ABRAHAM
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
          <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            {item}
          </Link>
        ))}
      </div>

      <div>
        <Link href="#contact" className="hidden md:inline-flex px-6 py-2 rounded-full border border-blue-500/30 text-sm font-medium text-white hover:bg-blue-600/20 transition-all duration-300">
          Let&apos;s Talk
        </Link>
      </div>
    </nav>
  );
}
