export default function CareerSwitch() {
  const past = [
    { ico: '⚛️', t: 'React.js', d: 'Component-driven UIs' },
    { ico: '📄', t: 'HTML5 / CSS3', d: 'Semantic + responsive' },
    { ico: '📜', t: 'JavaScript', d: 'ES6+, DOM, APIs' },
    { ico: '🎨', t: 'Tailwind CSS', d: 'Utility-first styling' },
    { ico: '🔌', t: 'REST API Integration', d: 'Fetching & state mgmt' },
    { ico: '🔀', t: 'Git / GitHub', d: 'Branching & PR workflow' },
  ];
  const present = [
    { ico: '⚛️', t: 'React + TypeScript', d: 'Type-safe components' },
    { ico: '📄', t: 'HTML5 / CSS3 / Sass', d: 'Advanced styling' },
    { ico: '📜', t: 'JavaScript (Advanced)', d: 'Async, modules, perf' },
    { ico: '🧩', t: 'Next.js', d: 'SSR, routing, API routes' },
    { ico: '🧪', t: 'Testing', d: 'Jest, Vitest, Playwright' },
    { ico: '🚀', t: 'Deployment', d: 'Vercel, Netlify, GitHub Pages' },
  ];
  const future = [
    { ico: '🟢', t: 'Node.js + Express', d: 'Server-side JS' },
    { ico: '🗄️', t: 'PostgreSQL / MongoDB', d: 'Relational + NoSQL' },
    { ico: '🔐', t: 'Auth & Security', d: 'JWT, OAuth, bcrypt' },
    { ico: '🔗', t: 'REST / GraphQL APIs', d: 'API design & docs' },
    { ico: '🐳', t: 'Docker', d: 'Containerized deployments' },
    { ico: '☁️', t: 'AWS / Vercel', d: 'Cloud infrastructure' },
  ];

  const Section = ({ title, items, color, tag, sub }: any) => (
    <div className="card2 p-6 hover-gold relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: color }}></div>
      <div className="mb-4">
        <span className="font-mono text-[0.58rem] uppercase tracking-widest px-2 py-1 rounded"
          style={{ background: `${color}14`, color, border: `1px solid ${color}33` }}>{tag}</span>
        <h3 className="font-display text-[1.05rem] font-extrabold text-white mt-3">{title}</h3>
        <p className="font-mono text-[0.65rem] text-[#5A6880] mt-1">{sub}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {items.map((it: any) => (
          <div key={it.t} className="p-3 rounded-lg" style={{ background: '#0C1117', border: '1px solid #1A2333' }}>
            <div className="text-[1.05rem] mb-1">{it.ico}</div>
            <div className="text-[0.74rem] font-semibold text-white mb-0.5">{it.t}</div>
            <div className="font-mono text-[0.6rem] text-[#5A6880]">{it.d}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="max-w-[1120px] mx-auto px-5 md:px-10 py-20">
      <div className="text-center mb-12">
        <div className="sec-tag mb-3 justify-center"><span style={{ margin: 'auto' }}>Career Journey</span></div>
        <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
          Frontend → <span style={{ color: '#9B72FF' }}>Full-Stack</span> Engineer
        </h2>
        <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
          My 3-stage journey: mastering the frontend, sharpening it daily, and expanding into backend to build complete products.
        </p>

        <div className="hidden md:flex items-center justify-center gap-6 mt-10 mb-4">
          {[
            { t: 'Frontend Dev', c: '#F5C842', s: '2026 · RAYGAIN' },
            { t: 'Software Engineer', c: '#9B72FF', s: '2025-26 · Active' },
            { t: 'Full-Stack Engineer', c: '#00D4AA', s: '2026+ · Learning' },
          ].map((stage, i, arr) => (
            <div key={stage.t} className="flex items-center gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-[1.4rem] font-bold"
                  style={{ background: `${stage.c}14`, border: `2px solid ${stage.c}`, color: stage.c }}>
                  {i + 1}
                </div>
                <div className="font-display text-[0.82rem] font-bold text-white mt-2">{stage.t}</div>
                <div className="font-mono text-[0.62rem] text-[#5A6880]">{stage.s}</div>
              </div>
              {i < arr.length - 1 && <div className="text-[1.3rem]" style={{ color: '#9B72FF' }}>→</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <Section title="The Developer I Was" sub="Frontend · React · UI Design" tag="PAST · 2026" color="#F5C842" items={past} />
        <Section title="The Engineer I Am" sub="React · TS · Testing · Deploy" tag="PRESENT · ACTIVE" color="#9B72FF" items={present} />
        <Section title="The Full-Stack I'm Becoming" sub="Node · DBs · APIs · Cloud" tag="FUTURE · LEARNING" color="#00D4AA" items={future} />
      </div>
    </section>
  );
}
