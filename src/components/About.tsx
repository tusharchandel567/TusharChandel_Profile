export default function About() {
  return (
    <section id="about" className="max-w-[1120px] mx-auto px-5 md:px-10 py-20">
      <div className="sec-tag mb-3"><span>About Me</span></div>
      <div className="grid md:grid-cols-[1.25fr_1fr] gap-14 items-start">
        <div>
          <h2 className="font-display font-extrabold text-white leading-[1.08] mb-3"
            style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
            From <span className="gold">Frontend Pixels</span><br />to <span className="teal-text">Data Pipelines</span>
          </h2>
          <p className="text-[0.9rem] text-[#7A8A9F] leading-[1.9] mb-4">
            I'm a <strong className="text-[#EDF2F7]">B.Tech Computer Science graduate (2022–2026)</strong> from
            <strong className="text-[#EDF2F7]"> Meerut Institute of Technology</strong>, with a strong foundation in
            frontend development — previously an <strong className="text-[#EDF2F7]">Intern Frontend Developer at RAYGAIN Technologies</strong> (Jan–Mar 2026).
          </p>
          <p className="text-[0.9rem] text-[#7A8A9F] leading-[1.9] mb-4">
            I've now <strong className="text-[#EDF2F7]">switched my career path to Data Analytics</strong>.
            My expertise includes <strong className="text-[#EDF2F7]">SQL, Python, Power BI, and Tableau</strong> —
            building dashboards, writing complex queries, and delivering EDA that business stakeholders can act on.
          </p>
          <p className="text-[0.9rem] text-[#7A8A9F] leading-[1.9] mb-4">
            I'm actively expanding into <strong className="text-[#EDF2F7]">Data Engineering</strong> —
            learning Apache Spark, dbt, Airflow, and cloud pipelines. My goal: becoming a
            <strong className="text-[#EDF2F7]"> full-stack data professional</strong> who can both analyse and engineer data systems.
          </p>
          <p className="text-[0.9rem] text-[#7A8A9F] leading-[1.9] mb-4">
            I'm pursuing the <strong className="text-[#EDF2F7]">Goethe B1→B2 German certificate</strong> and targeting Werkstudent, intern, and junior analyst roles in Germany & India.
          </p>

          <div className="grid grid-cols-2 gap-2 mt-6">
            {[
              { i: '📊', h: 'Power BI Expert', p: 'End-to-end dashboards with advanced DAX' },
              { i: '🐍', h: 'Python / Pandas', p: 'EDA, automation, statistical analysis' },
              { i: '🗄️', h: 'SQL (5-Star)', p: 'Complex joins, CTEs, window functions' },
              { i: '⚙️', h: 'Pipeline Learner', p: 'Spark, dbt, Airflow — actively building' },
            ].map((c) => (
              <div key={c.h} className="card2 p-4 hover-gold">
                <div className="text-[1.15rem] mb-1">{c.i}</div>
                <h4 className="text-[0.8rem] font-bold text-white mb-1">{c.h}</h4>
                <p className="text-[0.7rem] text-[#7A8A9F] leading-[1.5]">{c.p}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl p-6"
            style={{ background: 'linear-gradient(135deg,#0F151C,#131A22)', border: '1px solid rgba(245,200,66,.18)' }}>
            <h3 className="font-display text-[1rem] font-bold text-[#F5C842] mb-3">🎯 Why Hire Me as a Data Analyst</h3>
            <ul className="flex flex-col gap-2 list-none p-0">
              {[
                '<strong>SQL 5-star rating</strong> on HackerRank — complex queries aren\'t a challenge',
                '<strong>End-to-end BI dashboards</strong> in Power BI with advanced DAX',
                'Deep Python EDA — from raw messy CSVs to clean insight',
                'Funnel & cohort analysis, conversion metrics',
                '<strong>Frontend Developer background</strong> — clean UI sense for dashboards',
                'German A2→B1, pursuing Goethe B2 — ready for DE teams',
                'Data Engineering roadmap in progress (Spark, dbt, Airflow)',
              ].map((li, i) => (
                <li key={i} className="text-[0.78rem] text-[#7A8A9F] pl-4 relative leading-[1.7]" style={{ listStyle: 'none' }}>
                  <span className="absolute left-0 text-[#F5C842]">▸</span>
                  <span dangerouslySetInnerHTML={{ __html: li }}></span>
                </li>
              ))}
            </ul>
          </div>

          {[
            { i: '📧', l: 'Email', v: 'sc970557@gmail.com', href: 'mailto:sc970557@gmail.com' },
            { i: '📞', l: 'Phone', v: '7505873300', href: 'tel:7505873300' },
            { i: '📍', l: 'Location', v: 'Meerut, IN · Open to Germany', href: null },
            { i: '🎓', l: 'Education', v: 'B.Tech CSE · MIT Meerut · 2022–2026', href: null },
          ].map((c) => (
            <div key={c.l} className="flex items-center gap-3 card2 p-3">
              <span className="text-[0.95rem]">{c.i}</span>
              <div className="flex-1">
                <span className="font-mono text-[0.56rem] text-[#5A6880] uppercase tracking-widest block">{c.l}</span>
                {c.href ? (
                  <a href={c.href} className="text-[0.78rem] text-[#EDF2F7] hover:text-[#F5C842]">{c.v}</a>
                ) : (
                  <span className="text-[0.78rem] text-[#EDF2F7]">{c.v}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
