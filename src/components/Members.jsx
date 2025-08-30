function PixelAvatar({ variant = 'sunset' }) {
  const palette = {
    sunset: { a: '#0b0c10', b: '#ff8ba7', c: '#ffd166', d: '#8bd3dd' },
    forest: { a: '#0b0c10', b: '#7ae582', c: '#5ad1aa', d: '#2ec4b6' },
    dusk: { a: '#0b0c10', b: '#c3a6ff', c: '#a0c4ff', d: '#ffadad' },
    ocean: { a: '#0b0c10', b: '#7cc6fe', c: '#b5e48c', d: '#00f5d4' },
  }[variant] || { a: '#0b0c10', b: '#ff8ba7', c: '#ffd166', d: '#8bd3dd' };

  const svg = encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' shape-rendering='crispEdges'>
      <rect width='16' height='16' fill='${palette.a}'/>
      <rect x='1' y='1' width='14' height='14' fill='${palette.b}'/>
      <rect x='3' y='3' width='10' height='10' fill='${palette.c}'/>
      <rect x='5' y='6' width='2' height='2' fill='${palette.a}'/>
      <rect x='9' y='6' width='2' height='2' fill='${palette.a}'/>
      <rect x='5' y='9' width='6' height='2' fill='${palette.d}'/>
      <rect x='5' y='10' width='6' height='1' fill='${palette.a}'/>
      <rect x='0' y='0' width='16' height='1' fill='${palette.a}'/>
      <rect x='0' y='15' width='16' height='1' fill='${palette.a}'/>
      <rect x='0' y='0' width='1' height='16' fill='${palette.a}'/>
      <rect x='15' y='0' width='1' height='16' fill='${palette.a}'/>
    </svg>
  `);

  return (
    <img
      src={`data:image/svg+xml;charset=utf8,${svg}`}
      alt="Pixel avatar"
      className="w-16 h-16 image-render-pixel rounded-sm shadow-md"
      style={{ imageRendering: 'pixelated' }}
    />
  );
}

const members = [
  {
    name: 'Ari',
    role: 'Pixel Artist',
    bio: 'Loves tiny palettes, big feelings. Makes forests hum and towns feel lived-in.',
    variant: 'sunset',
  },
  {
    name: 'Moss',
    role: 'Designer / Programmer',
    bio: 'Designs gentle systems that invite tinkering. Works in Godot & web.',
    variant: 'forest',
  },
  {
    name: 'Kashi',
    role: 'Composer',
    bio: 'Writes hummable themes and crunchy lo-fi soundscapes for rainy evenings.',
    variant: 'dusk',
  },
  {
    name: 'Nova',
    role: 'Animator',
    bio: 'Squash-and-stretch evangelist. Chases cozy motion and expressive sprites.',
    variant: 'ocean',
  },
];

function MemberCard({ m }) {
  return (
    <div className="group rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-5 flex gap-4">
      <div className="shrink-0">
        <PixelAvatar variant={m.variant} />
      </div>
      <div className="min-w-0">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="font-semibold text-white leading-tight">{m.name}</h3>
            <p className="text-sm text-zinc-400">{m.role}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-zinc-300 leading-relaxed">{m.bio}</p>
      </div>
    </div>
  );
}

export default function Members() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {members.map((m) => (
        <MemberCard key={m.name} m={m} />
      ))}
    </div>
  );
}
