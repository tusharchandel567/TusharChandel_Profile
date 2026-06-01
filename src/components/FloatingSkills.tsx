const skills = [
  { name: 'React', color: '#9B72FF', size: 110, top: '8%', left: '5%', delay: '0s', speed: 18 },
  { name: 'JavaScript', color: '#F5C842', size: 95, top: '65%', left: '3%', delay: '1s', speed: 22 },
  { name: 'TypeScript', color: '#4E9EFF', size: 85, top: '20%', right: '12%', delay: '.5s', speed: 20 },
  { name: 'HTML5', color: '#FF5F6D', size: 75, top: '72%', right: '8%', delay: '1.5s', speed: 25 },
  { name: 'CSS3', color: '#00D4AA', size: 70, top: '40%', left: '18%', delay: '.8s', speed: 19 },
  { name: 'Node.js', color: '#22D47A', size: 65, top: '55%', right: '25%', delay: '2s', speed: 23 },
  { name: 'Tailwind', color: '#00D4AA', size: 55, top: '12%', left: '40%', delay: '1.2s', speed: 21 },
  { name: 'Git', color: '#F5C842', size: 60, top: '85%', left: '45%', delay: '1.8s', speed: 24 },
  { name: 'Next.js', color: '#9B72FF', size: 50, top: '30%', right: '35%', delay: '2.5s', speed: 20 },
  { name: 'MongoDB', color: '#22D47A', size: 55, top: '50%', left: '5%', delay: '3s', speed: 17 },
  { name: 'PostgreSQL', color: '#4E9EFF', size: 55, top: '8%', right: '5%', delay: '2.2s', speed: 19 },
  { name: 'Docker', color: '#4E9EFF', size: 50, top: '78%', right: '35%', delay: '.3s', speed: 21 },
];

export default function FloatingSkills() {
  return (
    <section className="relative py-28 overflow-hidden border-y border-[#1A2333]" style={{ background: '#050709' }}>
      {/* Dual flag background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" aria-hidden="true">
        <div className="absolute inset-0 flex">
          <div className="flex-1 flex flex-col">
            <div className="flex-1" style={{ background: '#FF9933' }}></div>
            <div className="flex-1" style={{ background: '#FFFFFF' }}></div>
            <div className="flex-1" style={{ background: '#138808' }}></div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex-1" style={{ background: '#000000' }}></div>
            <div className="flex-1" style={{ background: '#DD0000' }}></div>
            <div className="flex-1" style={{ background: '#F5C842' }}></div>
          </div>
        </div>
      </div>

      {skills.map((s) => (
        <div key={s.name} className="absolute flex items-center justify-center pointer-events-none"
          style={{
            top: s.top, left: s.left, right: s.right,
            width: s.size, height: s.size,
            animation: `float ${s.speed}s ease-in-out ${s.delay} infinite alternate, spin ${s.speed * 2}s linear ${s.delay} infinite`,
            zIndex: 1,
          }}>
          <div className="w-full h-full rounded-full flex items-center justify-center font-display font-extrabold"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${s.color}33, ${s.color}11)`,
              border: `2px solid ${s.color}55`, color: s.color,
              fontSize: `${s.size * 0.18}px`,
              boxShadow: `0 0 30px ${s.color}22, inset 0 0 20px ${s.color}11`,
              backdropFilter: 'blur(4px)',
            }}>
            {s.name}
          </div>
        </div>
      ))}

      <div className="relative z-10 max-w-3xl mx-auto text-center px-5">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full"
          style={{ background: 'rgba(155,114,255,.1)', border: '1px solid rgba(155,114,255,.25)' }}>
          <span className="text-[0.9rem]">🇮🇳</span>
          <span className="font-mono text-[0.65rem] uppercase tracking-widest" style={{ color: '#9B72FF' }}>India → Germany</span>
          <span className="text-[0.9rem]">🇩🇪</span>
        </div>

        <h2 className="font-display font-extrabold text-white leading-[1.08] mb-4" style={{ fontSize: 'clamp(2.2rem,5vw,3.4rem)' }}>
          My <span style={{ color: '#9B72FF' }}>Skills</span> in Motion
        </h2>
        <p className="text-[0.92rem] text-[#7A8A9F] max-w-[540px] mx-auto leading-[1.9] mb-6">
          A living, breathing skill cloud — each orb rotates and floats, representing the tools I use daily and the ones I'm mastering.
          <br />
          <span className="text-[#EDF2F7] font-semibold">From India to Germany</span> — my toolkit travels with me.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind', 'Next.js', 'Docker', 'Git'].map((t) => (
            <span key={t} className="font-mono text-[0.7rem] px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(155,114,255,.06)', border: '1px solid rgba(155,114,255,.2)', color: '#9B72FF' }}>
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
          {[
            { n: '12+', l: 'Tools Mastered', c: '#9B72FF' },
            { n: '6', l: 'Backend Learning', c: '#00D4AA' },
            { n: '12w', l: 'Production Internship', c: '#F5C842' },
          ].map((s) => (
            <div key={s.l} className="p-4 rounded-xl" style={{ background: 'rgba(15,21,28,.6)', border: '1px solid rgba(155,114,255,.15)', backdropFilter: 'blur(10px)' }}>
              <div className="font-display font-extrabold text-2xl" style={{ color: s.c }}>{s.n}</div>
              <div className="font-mono text-[0.65rem] uppercase tracking-widest" style={{ color: '#7A8A9F' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.05); }
          50% { transform: translate(-15px, 15px) scale(0.98); }
          75% { transform: translate(25px, 20px) scale(1.02); }
          100% { transform: translate(-10px, -25px) scale(1); }
        }
        @keyframes spin {
          from { filter: hue-rotate(0deg); }
          to { filter: hue-rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
