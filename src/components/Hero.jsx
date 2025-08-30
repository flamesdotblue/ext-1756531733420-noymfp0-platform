import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[72vh] sm:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-[#0b0c10]/40 to-[#0b0c10]" />
      </div>
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-6xl h-full px-6 flex items-end sm:items-center">
          <div className="pb-10 sm:pb-0">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.6)]">Glimmer</h1>
            <p className="mt-3 sm:mt-4 text-lg sm:text-xl max-w-xl text-zinc-200">Games made with heart.</p>
            <div className="mt-6 flex items-center gap-3" id="invite">
              <a href="#members" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-pink-500 to-amber-400 text-black font-medium px-4 py-2 shadow shadow-pink-500/30 hover:opacity-95 transition">Explore Members</a>
              <button className="rounded-md border border-white/15 bg-white/10 hover:bg-white/15 text-white px-4 py-2 transition">Request Invite</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
