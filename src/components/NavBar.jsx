import { Heart } from 'lucide-react';

export default function NavBar() {
  return (
    <header id="top" className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/30 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="inline-grid place-items-center w-8 h-8 rounded-md bg-gradient-to-br from-pink-500 to-amber-400 shadow-sm shadow-pink-500/20">
            <Heart className="w-4 h-4 text-white" />
          </span>
          <span className="font-semibold tracking-tight text-white">Glimmer</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#members" className="text-zinc-300 hover:text-white transition">Members</a>
          <a href="#reels" className="text-zinc-300 hover:text-white transition">Reels</a>
          <a href="#invite" className="text-white/90 bg-white/10 hover:bg-white/15 border border-white/10 rounded-md px-3 py-1.5 transition">Request Invite</a>
        </nav>
      </div>
    </header>
  );
}
