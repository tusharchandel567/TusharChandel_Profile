export default function DataEngineering() {
  const core = [
    { s: 'SQL — Advanced', d: 'CTEs, window functions, query optimisation', status: 'done' },
    { s: 'Power BI + DAX', d: 'End-to-end dashboards, data modelling', status: 'done' },
    { s: 'Python / Pandas / NumPy', d: 'EDA, data cleaning, visualisation', status: 'done' },
    { s: 'Tableau', d: 'Dashboards, funnel viz, story points', status: 'done' },
    { s: 'Excel (Advanced)', d: 'Pivot tables, Power Query, XLOOKUP', status: 'done' },
  ];
  const eng = [
    { s: 'Apache Spark / PySpark', d: 'DataFrames, transformations, partitioning', status: 'learning' },
    { s: 'dbt (data build tool)', d: 'Models, tests, documentation', status: 'learning' },
    { s: 'Apache Airflow', d: 'DAG orchestration, task dependencies', status: 'learning' },
    { s: 'Databricks', d: 'Notebooks, Delta Lake, Unity Catalog', status: 'learning' },
    { s: 'Cloud (AWS / GCP)', d: 'S3, BigQuery, Cloud Composer', status: 'plan' },
  ];
  const statusColors: Record<string, { dot: string; text: string; bg: string; border: string; label: string }> = {
    done: { dot: '#22D47A', text: '#22D47A', bg: 'rgba(34,212,122,.1)', border: 'rgba(34,212,122,.2)', label: '✓ Done' },
    learning: { dot: '#F5C842', text: '#F5C842', bg: 'rgba(245,200,66,.1)', border: 'rgba(245,200,66,.2)', label: '📚 Learning' },
    plan: { dot: '#3a4a5e', text: '#5A6880', bg: 'rgba(40,50,65,.6)', border: '#1A2333', label: 'Planned' },
  };

  const Item = ({ items }: { items: typeof core }) => (
    <div className="space-y-2">
      {items.map((it) => {
        const c = statusColors[it.status];
        return (
          <div key={it.s} className="flex items-start gap-3 p-3 rounded-lg hover-gold" style={{ background: '#0F151C', border: '1px solid #1A2333' }}>
            <div className="w-[7px] h-[7px] rounded-full flex-shrink-0 mt-2" style={{ background: c.dot }}></div>
            <div className="flex-1">
              <h5 className="text-[0.78rem] font-semibold text-[#EDF2F7] mb-0.5">{it.s}</h5>
              <p className="text-[0.66rem] text-[#5A6880]">{it.d}</p>
            </div>
            <span className="font-mono text-[0.52rem] uppercase font-semibold tracking-wide px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0"
              style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
              {c.label}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="engineering" className="py-20 border-y border-[#1A2333]" style={{ background: '#0C1117' }}>
      <div className="max-w-[1120px] mx-auto px-5 md:px-10">
        <div className="sec-tag mb-3"><span>Data Engineering Journey</span></div>
        <h2 className="font-display font-extrabold text-white leading-[1.08] mb-2" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
          Building the <span className="gold">Engineering Layer</span>
        </h2>
        <p className="text-[0.86rem] text-[#7A8A9F] leading-[1.85] max-w-[520px] mb-10">
          Starting from a strong analytics base, actively learning the full modern data stack to become a complete data professional.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <h4 className="font-mono text-[0.66rem] font-medium text-[#7A8A9F] mb-3 pl-3 uppercase tracking-widest" style={{ borderLeft: '2px solid #F5C842' }}>
              Analytics Core (Strong)
            </h4>
            <Item items={core} />
          </div>
          <div>
            <h4 className="font-mono text-[0.66rem] font-medium text-[#7A8A9F] mb-3 pl-3 uppercase tracking-widest" style={{ borderLeft: '2px solid #00D4AA' }}>
              Engineering Layer (Active)
            </h4>
            <Item items={eng} />
          </div>
        </div>
      </div>
    </section>
  );
}
