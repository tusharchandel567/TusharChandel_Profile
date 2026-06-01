const rings = [
  {
    name: 'ADOPT',
    color: '#22D47A',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Git', 'Tailwind', 'VS Code'],
    desc: 'Using daily, confident in',
  },
  {
    name: 'TRIAL',
    color: '#00D4AA',
    items: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Jest', 'Vitest'],
    desc: 'Actively learning & building with',
  },
  {
    name: 'ASSESS',
    color: '#F5C842',
    items: ['Docker', 'Redis', 'GraphQL', 'Redux', 'Zustand', 'Playwright', 'Nginx'],
    desc: 'Exploring & evaluating',
  },
  {
    name: 'HOLD',
    color: '#FF5F6D',
    items: ['Vue.js', 'Angular', 'Django', 'Ruby on Rails', 'Kubernetes'],
    desc: 'Not prioritizing right now',
  },
];

export default function TechRadar() {
  return (
    <section className="py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full"
            style={{ background: 'rgba(245,200,66,.1)', border: '1px solid rgba(245,200,66,.25)' }}>
            <span className="text-[0.9rem]">🎯</span>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest" style={{ color: '#F5C842' }}>Tech Radar · Decision Map</span>
          </div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            My <span style={{ color: '#F5C842' }}>Technology Radar</span>
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
            A clear picture of what I use daily, what I'm learning, what I'm exploring, and what I'm putting on hold.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {rings.map((ring) => (
            <div key={ring.name} className="card2 p-6 hover-gold relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: ring.color }}></div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-[1.05rem] font-extrabold" style={{ color: ring.color }}>{ring.name}</h3>
                <span className="text-[1.5rem]" style={{ opacity: 0.3 }}>
                  {ring.name === 'ADOPT' ? '✓' : ring.name === 'TRIAL' ? '⚡' : ring.name === 'ASSESS' ? '🔍' : '⏸'}
                </span>
              </div>
              <div className="font-mono text-[0.62rem] uppercase tracking-widest mb-3" style={{ color: '#5A6880' }}>{ring.desc}</div>
              <div className="flex flex-wrap gap-1.5">
                {ring.items.map((item) => (
                  <span key={item} className="font-mono text-[0.65rem] px-2.5 py-1 rounded"
                    style={{ background: `${ring.color}14`, border: `1px solid ${ring.color}33`, color: ring.color }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Big radar visualization */}
        <div className="card2 p-6 md:p-10 relative overflow-hidden">
          <div className="text-center mb-6">
            <h3 className="font-display text-[1.3rem] font-extrabold text-white">Visual Radar</h3>
            <p className="text-[0.78rem] text-[#7A8A9F]">Where each technology sits in my stack</p>
          </div>
          <div className="relative w-full max-w-[480px] mx-auto" style={{ aspectRatio: '1' }}>
            {/* Concentric rings */}
            {['#FF5F6D', '#F5C842', '#00D4AA', '#22D47A'].map((c, i) => (
              <div key={i} className="absolute rounded-full border-2"
                style={{
                  borderColor: c + '55',
                  background: c + '08',
                  inset: `${(3 - i) * 12.5}%`,
                }}>
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-mono text-[0.55rem] font-bold uppercase tracking-widest"
                  style={{ color: c }}>
                  {['HOLD', 'ASSESS', 'TRIAL', 'ADOPT'][i]}
                </span>
              </div>
            ))}
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-[0.7rem] font-bold"
              style={{ background: '#050709', border: '2px solid #F5C842', color: '#F5C842' }}>
              ME
            </div>
            {/* Floating tech dots */}
            {[
              { name: 'React', ring: 0, angle: 45 }, { name: 'TypeScript', ring: 0, angle: 135 },
              { name: 'HTML/CSS', ring: 0, angle: 225 }, { name: 'Git', ring: 0, angle: 315 },
              { name: 'Next.js', ring: 1, angle: 20 }, { name: 'Node.js', ring: 1, angle: 110 },
              { name: 'MongoDB', ring: 1, angle: 200 }, { name: 'PostgreSQL', ring: 1, angle: 290 },
              { name: 'Docker', ring: 2, angle: 60 }, { name: 'GraphQL', ring: 2, angle: 160 },
              { name: 'Redis', ring: 2, angle: 250 }, { name: 'Redux', ring: 2, angle: 340 },
              { name: 'Vue.js', ring: 3, angle: 90 }, { name: 'Kubernetes', ring: 3, angle: 270 },
            ].map((d) => {
              const radius = 12.5 + d.ring * 12.5 + 6;
              const rad = (d.angle * Math.PI) / 180;
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);
              const colors = ['#22D47A', '#00D4AA', '#F5C842', '#FF5F6D'];
              return (
                <div key={d.name} className="absolute -translate-x-1/2 -translate-y-1/2 px-2 py-1 rounded-full font-mono text-[0.55rem] font-bold whitespace-nowrap"
                  style={{
                    left: `${x}%`, top: `${y}%`,
                    background: `${colors[d.ring]}22`,
                    border: `1px solid ${colors[d.ring]}66`,
                    color: colors[d.ring],
                    animation: `pulseDot 2s ease-in-out ${d.angle * 0.01}s infinite`,
                  }}>
                  {d.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulseDot {
          0%, 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 0 0 rgba(245,200,66,.4); }
          50% { transform: translate(-50%, -50%) scale(1.08); box-shadow: 0 0 15px 3px rgba(245,200,66,.3); }
        }
      `}</style>
    </section>
  );
}
