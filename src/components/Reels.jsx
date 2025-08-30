export default function Reels() {
  const reels = [
    {
      title: 'Cozy Platformer Prototype',
      url: 'https://www.youtube.com/embed/mZ1Zf1Y7t8E',
      desc: 'A playful traversal test with chunky pixels and soft lighting.'
    },
    {
      title: 'Ambient Town Walk',
      url: 'https://www.youtube.com/embed/3qHkcs3kG44',
      desc: 'Dialogue bubbles, cat meows, and a soundtrack about finding home.'
    },
    {
      title: 'Particles & Juice Study',
      url: 'https://www.youtube.com/embed/eX2qFMC8cFo',
      desc: 'Hitstops, trails, and sparkle confetti for a snappy feel.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {reels.map((r, i) => (
        <article key={i} className="rounded-lg overflow-hidden border border-white/10 bg-white/[0.03]">
          <div className="aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src={r.url}
              title={r.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-white text-sm">{r.title}</h3>
            <p className="text-xs text-zinc-400 mt-1">{r.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
