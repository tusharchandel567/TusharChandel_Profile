import { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function Stat({ n, suffix, label, icon, color }: { n: number; suffix?: string; label: string; icon: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const value = useCountUp(n, 1800, visible);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return (
    <div ref={ref} className="card2 p-6 text-center hover-gold relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20" style={{ background: color, filter: 'blur(40px)' }}></div>
      <div className="text-[1.6rem] mb-1 relative">{icon}</div>
      <div className="font-display font-extrabold leading-none mb-2 relative" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.4rem)', color }}>
        {value.toLocaleString()}{suffix || ''}
      </div>
      <div className="font-mono text-[0.65rem] text-[#7A8A9F] uppercase tracking-widest relative">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-20 border-y border-[#1A2333]" style={{ background: '#080C10' }}>
      <div className="max-w-[1120px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="sec-tag mb-3 justify-center"><span style={{ marginLeft: 'auto', marginRight: 'auto' }}>By The Numbers</span></div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Numbers That <span className="gold">Prove the Work</span>
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[540px] mx-auto mt-3 leading-[1.8]">
            A snapshot of my data analyst & frontend developer journey — raw counts, real results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<Stat n={50} suffix="+" label="Components Built" icon="⚛️" color="#9B72FF" />
        <Stat n={12} suffix=" wk" label="Production Internship" icon="💻" color="#F5C842" />
        <Stat n={10} suffix="+" label="Git Commits/Week" icon="🔀" color="#00D4AA" />
        <Stat n={50} suffix="+" label="LeetCode Problems" icon="🧩" color="#F5C842" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <Stat n={4} label="Full Projects Shipped" icon="🚀" color="#9B72FF" />
        <Stat n={6} suffix="+" label="Backend Skills" icon="🗄️" color="#00D4AA" />
        <Stat n={3} label="API Integrations" icon="🔗" color="#F5C842" />
        <Stat n={4} label="Years B.Tech CSE" icon="🎓" color="#9B72FF" />
        </div>
      </div>
    </section>
  );
}
