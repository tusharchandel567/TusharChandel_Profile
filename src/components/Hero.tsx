export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 px-5 md:px-10">
      <div className="absolute inset-0 hero-grid-bg"></div>
      {/* Germany flag background accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-1/3" style={{ background: '#000' }}></div>
        <div className="absolute top-1/3 left-0 right-0 h-1/3" style={{ background: '#DD0000' }}></div>
        <div className="absolute top-2/3 left-0 right-0 h-1/3" style={{ background: '#F5C842' }}></div>
      </div>
      <div className="absolute -top-48 -right-20 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(245,200,66,.1) 0%,transparent 65%)' }}></div>
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(221,0,0,.08) 0%,transparent 65%)' }}></div>

      <div className="relative z-10 max-w-[1120px] mx-auto grid md:grid-cols-[1fr_400px] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[0.68rem] text-[#00D4AA] tracking-widest uppercase mb-5"
            style={{ background: 'rgba(0,212,170,.1)', border: '1px solid rgba(0,212,170,.2)', padding: '6px 14px', borderRadius: 99 }}>
            📊 Frontend Dev → Data Analyst · Learning Data Engineering
          </div>

          <h1 className="font-display font-extrabold text-white leading-[1.03] mb-3" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.4rem)', letterSpacing: '-0.03em' }}>
            Turning <span className="gold">Raw Data</span><br />
            into <span className="teal-text">Clear Insight</span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="role-chip active">Data Analyst</span>
            <span className="role-chip active">BI Developer</span>
            <span className="role-chip active">Frontend Developer</span>
            <span className="role-chip learning">→ Learning: Data Engineering</span>
            <span className="role-chip">B.Tech CSE · 2022–2026</span>
          </div>

          <p className="text-[0.9rem] text-[#7A8A9F] leading-[1.85] max-w-[520px] mb-8">
            <strong className="text-[#EDF2F7]">B.Tech Computer Science graduate (2022–2026)</strong> from Meerut Institute of Technology.
            Started as a <strong className="text-[#EDF2F7]">Frontend Developer</strong> at RAYGAIN Technologies, now
            <strong className="text-[#EDF2F7]"> switching to Data Analytics</strong> — SQL, Python, Power BI, and Tableau.
            Actively learning Data Engineering: Spark, dbt, Airflow, and Databricks.
          </p>

          <div className="flex flex-wrap gap-3 mb-7">
            <a href="https://drive.google.com/file/d/1YnTtZz-gOIpT8y5WOL6htbC6g_OzGs-V/view" target="_blank" className="btn-primary">
              📄 View Resume
            </a>
            <a href="#projects" className="btn-sec">📊 See Projects</a>
            <a href="#offer" className="btn-sec">📄 Offer Letter</a>
            <a href="#contact" className="btn-sec">✉️ Hire Me</a>
          </div>

          <div className="flex flex-wrap gap-2">
            <a className="sico" href="https://www.linkedin.com/in/tushar-chandel-68b917247/" target="_blank">💼 LinkedIn</a>
            <a className="sico" href="https://github.com/tusharchandel567" target="_blank">🐙 GitHub</a>
            <a className="sico" href="mailto:sc970557@gmail.com">📧 Email</a>
          </div>
        </div>

        {/* Right card */}
        <div className="card overflow-hidden flex flex-col">
          {/* Large profile photo */}
          <div className="relative">
            <img src="/profile.jpg" alt="Tushar Chandel" className="w-full h-[280px] object-cover" style={{ objectPosition: 'center 30%' }} />
            {/* Germany flag overlay stripe */}
            <div className="absolute top-0 left-0 right-0 h-[4px]"
              style={{ background: 'linear-gradient(90deg,#000 0%,#000 33%,#DD0000 33%,#DD0000 66%,#F5C842 66%,#F5C842 100%)' }}></div>
            <div className="absolute bottom-0 left-0 right-0 h-24"
              style={{ background: 'linear-gradient(180deg,transparent,#0F151C)' }}></div>
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
              <div>
                <div className="font-display text-[1.1rem] font-extrabold text-white drop-shadow-lg">Tushar Chandel</div>
                <div className="text-[0.65rem] text-[#F5C842] font-semibold tracking-widest uppercase drop-shadow">Data Analyst · Frontend Dev</div>
              </div>
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-[#22D47A] pulse-dot"></div>
              </div>
            </div>
          </div>

          <div className="p-5 flex flex-col gap-4">
            <div className="text-[0.66rem] text-[#7A8A9F] flex items-center gap-1">
              📍 Meerut, IN · <span className="text-[#F5C842] font-semibold">Open to Germany 🇩🇪</span>
            </div>

          {/* mini chart */}
          <div className="card2 p-4">
            <div className="font-mono text-[0.62rem] text-[#5A6880] tracking-widest uppercase mb-3">Skill Proficiency</div>
            <div className="flex items-end gap-1 h-14">
              {[
                { h: '92%', d: '.1s' }, { h: '90%', d: '.2s' }, { h: '88%', d: '.3s' },
                { h: '85%', d: '.4s' }, { h: '82%', d: '.5s' }, { h: '65%', d: '.6s', teal: true }, { h: '50%', d: '.7s', teal: true },
              ].map((b, i) => (
                <div key={i} className="flex-1 rounded-t bar-anim" style={{
                  height: b.h, animationDelay: b.d,
                  background: b.teal ? 'linear-gradient(180deg,#00D4AA,rgba(0,212,170,.4))' : 'linear-gradient(180deg,#F5C842,#d4a916)'
                }}></div>
              ))}
            </div>
            <div className="flex gap-1 mt-2">
              {['SQL','PBI','Py','Tbl','XL','Spark','dbt'].map((l) => (
                <div key={l} className="flex-1 text-center font-mono text-[0.55rem] text-[#5A6880]">{l}</div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { n: '5★', l: 'SQL Rank' },
              { n: '12w', l: 'Frontend Int.' },
              { n: 'A2→B1', l: 'Deutsch' },
            ].map((k) => (
              <div key={k.l} className="card2 text-center py-3">
                <div className="font-display text-[1.2rem] font-extrabold text-[#F5C842]">{k.n}</div>
                <div className="font-mono text-[0.55rem] text-[#5A6880] uppercase tracking-widest mt-1">{k.l}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1">
            {['Python', 'SQL', 'Power BI', 'Tableau', 'Excel'].map((s) => (
              <span key={s} className="font-mono text-[0.6rem] font-medium px-3 py-1 rounded"
                style={{ background: '#131A22', border: '1px solid rgba(245,200,66,.28)', color: '#F5C842' }}>{s}</span>
            ))}
            {['Spark', 'dbt', 'Airflow', 'Databricks', 'React', 'JS'].map((s) => (
              <span key={s} className="font-mono text-[0.6rem] font-medium px-3 py-1 rounded"
                style={{ background: '#131A22', border: '1px solid rgba(0,212,170,.22)', color: '#00D4AA' }}>{s}</span>
            ))}
          </div>

          <div className="flex items-center gap-2 px-4 py-3 rounded-lg"
            style={{ background: 'rgba(34,212,122,.1)', border: '1px solid rgba(34,212,122,.22)' }}>
            <div className="w-2 h-2 rounded-full bg-[#22D47A] pulse-dot flex-shrink-0"></div>
            <span className="font-mono text-[0.72rem] text-[#22D47A] font-medium">Open to Work — Analyst / Intern / Werkstudent</span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
