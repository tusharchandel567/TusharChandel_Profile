const platforms = [
  {
    name: 'Upwork',
    ico: '🆙',
    color: '#14A800',
    role: 'Top Rated',
    rate: '$25–40/hr',
    jobs: '12+ completed',
    desc: 'Frontend development, React components, landing pages, UI fixes.',
    stars: 5,
  },
  {
    name: 'Fiverr',
    ico: '🎯',
    color: '#1DBF73',
    role: 'Level 2 Seller',
    rate: '$15–50/gig',
    jobs: '25+ delivered',
    desc: 'Responsive websites, React apps, landing pages, bug fixes.',
    stars: 5,
  },
  {
    name: 'Freelancer',
    ico: '💼',
    color: '#29B2FE',
    role: 'Preferred',
    rate: '$20–45/hr',
    jobs: '8+ projects',
    desc: 'Full-stack web apps, API integrations, WordPress customization.',
    stars: 4,
  },
  {
    name: 'Toptal',
    ico: '💎',
    color: '#000000',
    role: 'Applied',
    rate: '$60–100/hr',
    jobs: 'Screening',
    desc: 'Elite network for top 3% software engineers.',
    stars: 3,
  },
  {
    name: 'LinkedIn Pro',
    ico: '📧',
    color: '#0A66C2',
    role: 'Open Networker',
    rate: '—',
    jobs: '5+ inquiries',
    desc: 'Direct client outreach and contract opportunities.',
    stars: 4,
  },
  {
    name: 'GitHub',
    ico: '🐙',
    color: '#24292e',
    role: 'Open Source',
    rate: 'Free',
    jobs: '15+ repos',
    desc: 'Contributing to open-source projects and building portfolio.',
    stars: 5,
  },
];

const categories = [
  { name: 'Web Development', count: 28, color: '#9B72FF' },
  { name: 'Mobile & App UI', count: 12, color: '#00D4AA' },
  { name: 'E-Commerce', count: 8, color: '#F5C842' },
  { name: 'Landing Pages', count: 18, color: '#FF5F6D' },
  { name: 'API Integration', count: 10, color: '#4E9EFF' },
  { name: 'Bug Fixes & Support', count: 15, color: '#22D47A' },
];

export default function Freelancing() {
  return (
    <section className="py-20 border-y border-[#1A2333]" style={{ background: '#080C10' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full"
            style={{ background: 'rgba(0,212,170,.1)', border: '1px solid rgba(0,212,170,.25)' }}>
            <span className="text-[0.9rem]">💼</span>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest" style={{ color: '#00D4AA' }}>Freelancing & Client Work</span>
          </div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Freelance <span style={{ color: '#00D4AA' }}>Platforms</span> & Client Work
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
            Actively freelancing across multiple platforms — building client projects, earning reviews, and growing a professional network.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { n: '78+', l: 'Total Projects', c: '#00D4AA' },
            { n: '$12K+', l: 'Earnings', c: '#F5C842' },
            { n: '4.9★', l: 'Avg Rating', c: '#FF5F6D' },
            { n: '6', l: 'Platforms Active', c: '#9B72FF' },
          ].map((s) => (
            <div key={s.l} className="card2 p-5 text-center hover-gold">
              <div className="font-display font-extrabold" style={{ fontSize: 'clamp(1.8rem,4vw,2.4rem)', color: s.c }}>{s.n}</div>
              <div className="font-mono text-[0.65rem] uppercase tracking-widest mt-1" style={{ color: '#7A8A9F' }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {platforms.map((p) => (
            <div key={p.name} className="card2 p-6 hover-gold relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: p.color }}></div>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[1.4rem]"
                    style={{ background: `${p.color}14`, border: `1px solid ${p.color}33` }}>
                    {p.ico}
                  </div>
                  <div>
                    <h3 className="font-display text-[1.05rem] font-extrabold text-white">{p.name}</h3>
                    <div className="font-mono text-[0.62rem] uppercase tracking-widest" style={{ color: p.color }}>{p.role}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[0.7rem]" style={{ color: i < p.stars ? '#F5C842' : '#1A2333' }}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-[0.78rem] text-[#7A8A9F] leading-[1.7] mb-4">{p.desc}</p>
              <div className="grid grid-cols-2 gap-2 pt-3" style={{ borderTop: '1px solid #1A2333' }}>
                <div>
                  <div className="font-mono text-[0.55rem] uppercase tracking-widest" style={{ color: '#5A6880' }}>Rate</div>
                  <div className="font-display font-bold text-[0.85rem]" style={{ color: p.color }}>{p.rate}</div>
                </div>
                <div>
                  <div className="font-mono text-[0.55rem] uppercase tracking-widest" style={{ color: '#5A6880' }}>Completed</div>
                  <div className="font-display font-bold text-[0.85rem]" style={{ color: p.color }}>{p.jobs}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="card2 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[1.1rem]">📊</span>
            <h3 className="font-display text-[1.05rem] font-extrabold text-white">Work Categories</h3>
          </div>
          <div className="space-y-3">
            {categories.map((c) => (
              <div key={c.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[0.82rem] font-semibold text-[#EDF2F7]">{c.name}</span>
                  <span className="font-mono text-[0.72rem] font-bold" style={{ color: c.color }}>{c.count} projects</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: '#1A2333' }}>
                  <div className="h-full rounded-full" style={{
                    width: `${(c.count / 28) * 100}%`,
                    background: `linear-gradient(90deg, ${c.color}, ${c.color}cc)`,
                    animation: 'barFill 1.4s ease-out',
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes barFill {
          from { width: 0; }
        }
      `}</style>
    </section>
  );
}
