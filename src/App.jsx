import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Members from './components/Members';
import Reels from './components/Reels';

export default function App() {
  useEffect(() => {
    document.title = 'Glimmer — Games made with heart';
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-zinc-100 selection:bg-pink-500/30 selection:text-white">
      <NavBar />
      <main>
        <Hero />
        <section id="members" className="relative py-16 sm:py-24 bg-[#0f1116]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Meet the crew</h2>
              <p className="mt-2 text-zinc-400 max-w-2xl">Cozy makers, pixel pushers, sound magicians. Glimmer is small and invite-only so we can keep it warm and hand-built.</p>
            </div>
            <Members />
          </div>
        </section>
        <section id="reels" className="relative py-16 sm:py-24 bg-[#0b0c10]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Demo reels</h2>
              <p className="mt-2 text-zinc-400 max-w-2xl">A peek at things were brewing. Prototypes, jams, and tiny worlds that feel alive.</p>
            </div>
            <Reels />
          </div>
        </section>
      </main>
      <footer className="border-t border-white/5 bg-[#0b0c10]">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Glimmer. Games made with heart.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-zinc-200 transition" href="#members">Members</a>
            <a className="hover:text-zinc-200 transition" href="#reels">Reels</a>
            <a className="hover:text-zinc-200 transition" href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
