import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ target, duration = 1800 }: { target: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setStarted(true);
    }, { threshold: 0.3 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return <div ref={ref}>{val.toLocaleString()}</div>;
}

const langs = [
  { name: 'JavaScript', pct: 32, color: '#F7DF1E', icon: '🟨' },
  { name: 'TypeScript', pct: 18, color: '#3178C6', icon: '🔷' },
  { name: 'HTML/CSS', pct: 22, color: '#E34F26', icon: '🎨' },
  { name: 'Python', pct: 10, color: '#3776AB', icon: '🐍' },
  { name: 'SQL', pct: 8, color: '#00758F', icon: '🗄️' },
  { name: 'Other', pct: 10, color: '#9B72FF', icon: '✨' },
];

const activities = [
  { day: 'Mon', hours: 4.5 }, { day: 'Tue', hours: 6 }, { day: 'Wed', hours: 5.5 },
  { day: 'Thu', hours: 7 }, { day: 'Fri', hours: 6.5 }, { day: 'Sat', hours: 8 }, { day: 'Sun', hours: 5 },
];

export default function CodeStats() {
  return (
    <section className="py-20 border-y border-[#1A2333]" style={{ background: '#080C10' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full"
            style={{ background: 'rgba(155,114,255,.1)', border: '1px solid rgba(155,114,255,.25)' }}>
            <span className="text-[0.9rem]">📊</span>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest" style={{ color: '#9B72FF' }}>GitHub · Code Stats</span>
          </div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Coding <span style={{ color: '#9B72FF' }}>Statistics</span> & Activity
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
            Real numbers from GitHub, WakaTime, and project tracking — proof of consistent, daily coding practice.
          </p>
        </div>

        {/* Big stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { n: 1247, l: 'Total Commits', s: '', c: '#9B72FF' },
            { n: 15634, l: 'Lines of Code', s: '+', c: '#F5C842' },
            { n: 89, l: 'Pull Requests', s: '', c: '#00D4AA' },
            { n: 42, l: 'Repositories', s: '', c: '#FF5F6D' },
          ].map((s) => (
            <div key={s.l} className="card2 p-6 text-center hover-gold">
              <div className="font-display font-extrabold" style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', color: s.c }}>
                <AnimatedNumber target={s.n} />{s.s}
              </div>
              <div className="font-mono text-[0.65rem] uppercase tracking-widest mt-1" style={{ color: '#7A8A9F' }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Language distribution */}
          <div className="card2 p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[1.1rem]">📝</span>
              <h3 className="font-display text-[1.05rem] font-extrabold text-white">Language Distribution</h3>
            </div>
            <div className="space-y-3">
              {langs.map((l) => (
                <div key={l.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[0.78rem] font-semibold text-[#EDF2F7] flex items-center gap-2">
                      <span>{l.icon}</span>{l.name}
                    </span>
                    <span className="font-mono text-[0.72rem] font-bold" style={{ color: l.color }}>{l.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: '#1A2333' }}>
                    <div className="h-full rounded-full" style={{
                      width: `${l.pct}%`,
                      background: `linear-gradient(90deg, ${l.color}, ${l.color}aa)`,
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly activity */}
          <div className="card2 p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[1.1rem]">📅</span>
              <h3 className="font-display text-[1.05rem] font-extrabold text-white">Weekly Coding Activity</h3>
            </div>
            <div className="flex items-end justify-between gap-2 h-48 mb-4">
              {activities.map((a) => (
                <div key={a.day} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full rounded-t-lg relative overflow-hidden" style={{
                    height: `${(a.hours / 8) * 100}%`,
                    background: `linear-gradient(180deg, #9B72FF, #9B72FF44)`,
                    minHeight: '8px',
                  }}>
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[0.6rem] font-bold" style={{ color: '#F5C842' }}>
                      {a.hours}h
                    </span>
                  </div>
                  <span className="font-mono text-[0.6rem] text-[#7A8A9F]">{a.day}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 flex justify-between items-center" style={{ borderTop: '1px solid #1A2333' }}>
              <span className="font-mono text-[0.65rem]" style={{ color: '#5A6880' }}>This Week</span>
              <span className="font-display font-bold" style={{ color: '#9B72FF' }}>42.5 hrs</span>
            </div>
          </div>
        </div>

        {/* Contribution heatmap */}
        <div className="card2 p-6 mt-6">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[1.1rem]">🔥</span>
            <h3 className="font-display text-[1.05rem] font-extrabold text-white">Contribution Heatmap</h3>
          </div>
          <div className="grid grid-cols-[repeat(53,1fr)] gap-1">
            {Array.from({ length: 53 * 7 }).map((_, i) => {
              const intensity = Math.random();
              const alpha = intensity < 0.15 ? 0 : intensity < 0.3 ? 0.15 : intensity < 0.5 ? 0.35 : intensity < 0.75 ? 0.6 : 0.9;
              return (
                <div key={i} className="aspect-square rounded-sm"
                  style={{
                    background: alpha === 0 ? '#1A2333' : `rgba(155,114,255,${alpha})`,
                    border: alpha > 0.5 ? '1px solid rgba(155,114,255,.4)' : 'none',
                  }}></div>
              );
            })}
          </div>
          <div className="flex items-center justify-end gap-2 mt-3">
            <span className="font-mono text-[0.6rem]" style={{ color: '#5A6880' }}>Less</span>
            {[0.15, 0.35, 0.6, 0.9].map((a, i) => (
              <div key={i} className="w-4 h-4 rounded-sm" style={{ background: `rgba(155,114,255,${a})` }}></div>
            ))}
            <span className="font-mono text-[0.6rem]" style={{ color: '#5A6880' }}>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
