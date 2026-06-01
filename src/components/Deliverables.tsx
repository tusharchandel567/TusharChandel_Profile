export default function Deliverables() {
  const items = [
    {
      ico: '📊',
      title: 'Executive Dashboards',
      desc: 'End-to-end Power BI & Tableau dashboards with advanced DAX, drill-through, bookmarks, and conditional formatting.',
      bullets: ['KPI frameworks & scorecards', 'Star-schema data models', 'Drill-through & page navigation'],
      color: '#F5C842',
      time: '2–4 weeks',
    },
    {
      ico: '🗄️',
      title: 'SQL Analytics & Reporting',
      desc: 'Advanced SQL — CTEs, window functions, joins, and query optimization — for clean, repeatable reports.',
      bullets: ['Complex joins & aggregation', 'Window functions & ranking', 'Query optimization'],
      color: '#00D4AA',
      time: '1–3 weeks',
    },
    {
      ico: '🐍',
      title: 'Python EDA & Automation',
      desc: 'From raw messy CSVs to clean insight — Pandas EDA, statistical analysis, and automation scripts.',
      bullets: ['Data cleaning at scale', 'Statistical analysis', 'Reusable Python scripts'],
      color: '#9B72FF',
      time: '1–4 weeks',
    },
    {
      ico: '🔽',
      title: 'Funnel & Cohort Analysis',
      desc: 'Understanding how users convert, retain, and drop off — funnel modelling, cohort retention, and churn analysis.',
      bullets: ['User journey mapping', 'Retention cohorts', 'Churn driver analysis'],
      color: '#FF5F6D',
      time: '2–3 weeks',
    },
    {
      ico: '🎯',
      title: 'Customer Segmentation',
      desc: 'RFM analysis + clustering to identify high-value segments — who your best customers are and how to treat them.',
      bullets: ['RFM scoring framework', 'K-Means clustering', 'Actionable segments'],
      color: '#4E9EFF',
      time: '2–4 weeks',
    },
    {
      ico: '⚙️',
      title: 'Data Pipelines (Emerging)',
      desc: 'Learning modern DE stack — Spark, dbt, and Airflow — for analysts who want to engineer their own data.',
      bullets: ['ELT with dbt models', 'Airflow orchestration', 'Spark transformations'],
      color: '#22D47A',
      time: 'Ongoing',
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-20">
      <div className="text-center mb-12">
        <div className="sec-tag mb-3 justify-center"><span style={{ margin: 'auto' }}>What I Deliver</span></div>
        <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
          Analytics That Moves <span className="gold">Your Business</span>
        </h2>
        <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
          Six types of analytical work I can bring to your team — with realistic timelines and proven delivery.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.title} className="card2 p-6 hover-gold relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: it.color }}></div>
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[1.35rem]"
                style={{ background: `${it.color}15`, border: `1px solid ${it.color}33` }}>
                {it.ico}
              </div>
              <span className="font-mono text-[0.58rem] uppercase tracking-widest px-2 py-1 rounded-full"
                style={{ background: `${it.color}14`, color: it.color, border: `1px solid ${it.color}33` }}>
                ⏱ {it.time}
              </span>
            </div>
            <h3 className="font-display text-[1.05rem] font-extrabold text-white mb-2">{it.title}</h3>
            <p className="text-[0.78rem] text-[#7A8A9F] leading-[1.75] mb-4">{it.desc}</p>
            <ul className="space-y-1.5">
              {it.bullets.map((b) => (
                <li key={b} className="text-[0.72rem] text-[#7A8A9F] pl-3 relative">
                  <span className="absolute left-0" style={{ color: it.color }}>▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
