const indiaRoles = [
  { role: 'Data Analyst', comp: 'Various', loc: 'Bengaluru / Noida / Gurugram', range: '₹6–14 LPA', color: '#F5C842' },
  { role: 'Power BI Developer', comp: 'RAYGAIN / Others', loc: 'Delhi NCR', range: '₹5–12 LPA', color: '#00D4AA' },
  { role: 'Junior Data Engineer', comp: 'Startups', loc: 'Pune / Hyderabad', range: '₹7–15 LPA', color: '#9B72FF' },
  { role: 'BI / Analytics Intern', comp: 'Multiple', loc: 'Remote / Hybrid', range: '₹20–50K/mo', color: '#22D47A' },
  { role: 'SQL / Python Analyst', comp: 'Consulting', loc: 'Mumbai / Chennai', range: '₹5–12 LPA', color: '#FF5F6D' },
];

const germanyRoles = [
  { role: 'Werkstudent Data Analyst', comp: 'Siemens / BMW / VW', loc: 'Berlin / München', range: '€18–22/hr', color: '#F5C842' },
  { role: 'Working Student BI', comp: 'Deutsche Bank / Allianz', loc: 'Frankfurt', range: '€18–24/hr', color: '#00D4AA' },
  { role: 'Junior Data Engineer', comp: 'Zalando / Delivery Hero', loc: 'Berlin', range: '€55–70K/yr', color: '#9B72FF' },
  { role: 'Praktikum Data Science', loc: 'Hamburg / Stuttgart', range: '€1.5–2K/mo', color: '#22D47A' },
  { role: 'Data Analyst (Entry)', loc: 'Köln / München', range: '€45–60K/yr', color: '#FF5F6D' },
];

export default function OpenRoles() {
  return (
    <section className="py-20 border-y border-[#1A2333]" style={{ background: '#080C10' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full"
            style={{ background: 'rgba(245,200,66,.08)', border: '1px solid rgba(245,200,66,.22)' }}>
            <span className="font-mono text-[0.65rem] text-[#F5C842] uppercase tracking-widest">🎯 Target Markets</span>
          </div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Open Roles in <span className="gold">India</span> & <span style={{ color: '#DD0000' }}>Germany</span>
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
            The exact roles I'm targeting — with realistic salary ranges and locations. Ready to apply today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* India */}
          <div className="card p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: 'linear-gradient(90deg,#FF9933,#FFFFFF,#138808)' }}></div>
            <div className="flex items-center gap-3 mb-5">
              <div className="text-[1.8rem]">🇮🇳</div>
              <div>
                <h3 className="font-display text-[1.2rem] font-extrabold text-white">India</h3>
                <p className="font-mono text-[0.65rem] text-[#5A6880] uppercase tracking-widest">Full-time · Hybrid · Remote</p>
              </div>
            </div>

            <div className="space-y-3">
              {indiaRoles.map((r) => (
                <div key={r.role} className="flex items-center justify-between p-3 rounded-lg hover-gold"
                  style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 rounded-full" style={{ background: r.color }}></div>
                    <div>
                      <div className="text-[0.85rem] font-bold text-[#EDF2F7]">{r.role}</div>
                      <div className="font-mono text-[0.6rem] text-[#5A6880] mt-0.5">{r.comp} · {r.loc}</div>
                    </div>
                  </div>
                  <span className="font-mono text-[0.72rem] font-bold px-3 py-1 rounded"
                    style={{ background: `${r.color}14`, color: r.color, border: `1px solid ${r.color}33` }}>{r.range}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 flex items-center gap-2" style={{ borderTop: '1px solid #1A2333' }}>
              <span className="w-2 h-2 rounded-full bg-[#22D47A] pulse-dot"></span>
              <span className="font-mono text-[0.7rem] text-[#22D47A]">50+ roles open this week</span>
            </div>
          </div>

          {/* Germany */}
          <div className="card p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: 'linear-gradient(90deg,#000,#DD0000,#F5C842)' }}></div>
            <div className="flex items-center gap-3 mb-5">
              <div className="text-[1.8rem]">🇩🇪</div>
              <div>
                <h3 className="font-display text-[1.2rem] font-extrabold text-white">Germany</h3>
                <p className="font-mono text-[0.65rem] text-[#5A6880] uppercase tracking-widest">Werkstudent · Praktikum · Full-time</p>
              </div>
            </div>

            <div className="space-y-3">
              {germanyRoles.map((r) => (
                <div key={r.role} className="flex items-center justify-between p-3 rounded-lg hover-gold"
                  style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 rounded-full" style={{ background: r.color }}></div>
                    <div>
                      <div className="text-[0.85rem] font-bold text-[#EDF2F7]">{r.role}</div>
                      <div className="font-mono text-[0.6rem] text-[#5A6880] mt-0.5">{r.comp || 'Various'} · {r.loc}</div>
                    </div>
                  </div>
                  <span className="font-mono text-[0.72rem] font-bold px-3 py-1 rounded"
                    style={{ background: `${r.color}14`, color: r.color, border: `1px solid ${r.color}33` }}>{r.range}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 flex items-center gap-2" style={{ borderTop: '1px solid #1A2333' }}>
              <span className="w-2 h-2 rounded-full bg-[#22D47A] pulse-dot"></span>
              <span className="font-mono text-[0.7rem] text-[#22D47A]">Goethe B1 → B2 in progress · Ready for Werkstudent</span>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
          {[
            { n: '50+', l: 'Roles targeted', c: '#F5C842' },
            { n: '2', l: 'Countries', c: '#00D4AA' },
            { n: '12+', l: 'Companies shortlisted', c: '#9B72FF' },
            { n: '3', l: 'Interview stage', c: '#22D47A' },
          ].map((s) => (
            <div key={s.l} className="card2 p-5 text-center">
              <div className="font-display font-extrabold" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: s.c }}>{s.n}</div>
              <div className="font-mono text-[0.65rem] text-[#5A6880] uppercase tracking-widest mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
