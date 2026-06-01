type TagColor = 'teal' | 'gold' | 'purple' | 'green';

const used: Record<TagColor, { border: string; text: string; bg: string }> = {
  teal: { border: 'rgba(0,212,170,.22)', text: '#00D4AA', bg: 'rgba(0,212,170,.08)' },
  gold: { border: 'rgba(245,200,66,.18)', text: '#F5C842', bg: 'rgba(245,200,66,.08)' },
  purple: { border: 'rgba(155,114,255,.2)', text: '#9B72FF', bg: 'rgba(155,114,255,.08)' },
  green: { border: 'rgba(34,212,122,.2)', text: '#22D47A', bg: 'rgba(34,212,122,.08)' },
};

function TagChip({ t, c }: { t: string; c: TagColor }) {
  const s = used[c];
  return (
    <span className="font-mono text-[0.6rem] px-2 py-1 rounded" style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}` }}>{t}</span>
  );
}

function EdaViz() {
  return (
    <svg viewBox="0 0 380 140" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
      <defs>
        <linearGradient id="grad-teal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00D4AA" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00D4AA" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="20" y1="20" x2="20" y2="115" stroke="#1A2333" />
      <line x1="20" y1="115" x2="360" y2="115" stroke="#1A2333" />
      <line x1="20" y1="80" x2="360" y2="80" stroke="#1A2333" strokeDasharray="4,4" />
      <line x1="20" y1="55" x2="360" y2="55" stroke="#1A2333" strokeDasharray="4,4" />
      <path d="M20,90 C60,85 90,60 130,50 C170,40 200,65 240,45 C280,25 310,35 360,28 L360,115 L20,115 Z" fill="url(#grad-teal)" />
      <path d="M20,90 C60,85 90,60 130,50 C170,40 200,65 240,45 C280,25 310,35 360,28" fill="none" stroke="#00D4AA" strokeWidth="2" />
      {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((l, i) => (
        <text key={l} x={22 + i * 56} y="128" fontSize="9" fill="#5A6880" fontFamily="monospace">{l}</text>
      ))}
      <text x="22" y="50" fontSize="9" fill="#00D4AA" fontFamily="monospace">EDA</text>
    </svg>
  );
}

function FunnelViz() {
  return (
    <svg viewBox="0 0 380 140" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
      <rect x="30" y="20" width="320" height="20" rx="4" fill="#9B72FF" opacity="0.9" />
      <text x="190" y="34" fontSize="9" fill="#fff" textAnchor="middle" fontFamily="monospace">Visitors: 10,000</text>
      <rect x="60" y="48" width="260" height="18" rx="4" fill="#9B72FF" opacity="0.75" />
      <text x="190" y="61" fontSize="9" fill="#fff" textAnchor="middle" fontFamily="monospace">Sign-ups: 4,200 (42%)</text>
      <rect x="95" y="74" width="190" height="18" rx="4" fill="#9B72FF" opacity="0.6" />
      <text x="190" y="87" fontSize="9" fill="#fff" textAnchor="middle" fontFamily="monospace">Activated: 1,890 (45%)</text>
      <rect x="125" y="100" width="130" height="18" rx="4" fill="#9B72FF" opacity="0.45" />
      <text x="190" y="113" fontSize="9" fill="#fff" textAnchor="middle" fontFamily="monospace">Converted: 630 (33%)</text>
      <text x="355" y="55" fontSize="8" fill="#FF5F6D" fontFamily="monospace">-58%</text>
      <text x="355" y="82" fontSize="8" fill="#FF5F6D" fontFamily="monospace">-55%</text>
      <text x="355" y="108" fontSize="8" fill="#FF5F6D" fontFamily="monospace">-67%</text>
    </svg>
  );
}

function PipelineViz() {
  return (
    <svg viewBox="0 0 380 140" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#F5C842" />
        </marker>
      </defs>
      <rect x="15" y="52" width="60" height="36" rx="8" fill="#0C1117" stroke="#F5C842" strokeWidth="1.5" />
      <text x="45" y="66" fontSize="8" fill="#F5C842" textAnchor="middle" fontFamily="monospace">Raw Data</text>
      <text x="45" y="78" fontSize="7" fill="#7A8A9F" textAnchor="middle" fontFamily="monospace">CSV / API</text>
      <path d="M77 70 L97 70" stroke="#F5C842" strokeWidth="1.5" markerEnd="url(#arr)" />
      <rect x="100" y="52" width="60" height="36" rx="8" fill="#0C1117" stroke="#00D4AA" strokeWidth="1.5" />
      <text x="130" y="66" fontSize="8" fill="#00D4AA" textAnchor="middle" fontFamily="monospace">Ingest</text>
      <text x="130" y="78" fontSize="7" fill="#7A8A9F" textAnchor="middle" fontFamily="monospace">Airflow</text>
      <path d="M162 70 L182 70" stroke="#F5C842" strokeWidth="1.5" markerEnd="url(#arr)" />
      <rect x="185" y="52" width="60" height="36" rx="8" fill="#0C1117" stroke="#9B72FF" strokeWidth="1.5" />
      <text x="215" y="66" fontSize="8" fill="#9B72FF" textAnchor="middle" fontFamily="monospace">Transform</text>
      <text x="215" y="78" fontSize="7" fill="#7A8A9F" textAnchor="middle" fontFamily="monospace">Spark/dbt</text>
      <path d="M247 70 L267 70" stroke="#F5C842" strokeWidth="1.5" markerEnd="url(#arr)" />
      <rect x="270" y="52" width="60" height="36" rx="8" fill="#0C1117" stroke="#22D47A" strokeWidth="1.5" />
      <text x="300" y="66" fontSize="8" fill="#22D47A" textAnchor="middle" fontFamily="monospace">Serve</text>
      <text x="300" y="78" fontSize="7" fill="#7A8A9F" textAnchor="middle" fontFamily="monospace">Power BI</text>
      <text x="190" y="22" fontSize="9" fill="#5A6880" textAnchor="middle" fontFamily="monospace">End-to-End Data Pipeline Architecture</text>
    </svg>
  );
}

const projects = [
  {
    key: 'eda',
    icon: '📈',
    iconColor: '#00D4AA' as const,
    title: 'Exploratory Data Analysis — Sales & Customer Insights',
    desc: 'Full EDA pipeline on a 100k+ row retail dataset. Uncovered seasonal trends, high-value customer segments, and revenue drivers using Python, Pandas, Seaborn, and Matplotlib. Delivered actionable business recommendations.',
    tags: [{ t: 'Python', c: 'teal' as TagColor }, { t: 'Pandas', c: 'teal' as TagColor }, { t: 'EDA', c: 'gold' as TagColor }, { t: 'Statistical Analysis', c: 'gold' as TagColor }],
    Viz: EdaViz,
    topBar: 'linear-gradient(90deg,#00D4AA,#4E9EFF)',
  },
  {
    key: 'funnel',
    icon: '🔽',
    iconColor: '#9B72FF' as const,
    title: 'Funnel & Conversion Analysis — User Journey Drop-off',
    desc: 'Designed a funnel analysis from raw event logs: visitor → sign-up → activation → conversion. Identified 3 critical drop-off points and proposed A/B test hypotheses. Built a Tableau dashboard for stakeholder reporting.',
    tags: [{ t: 'SQL', c: 'purple' as TagColor }, { t: 'Tableau', c: 'purple' as TagColor }, { t: 'Funnel Analysis', c: 'gold' as TagColor }, { t: 'Cohort Analysis', c: 'purple' as TagColor }],
    Viz: FunnelViz,
    topBar: 'linear-gradient(90deg,#9B72FF,#FF5F6D)',
  },
  {
    key: 'pipeline',
    icon: '⚙️',
    iconColor: '#F5C842' as const,
    title: 'Full-Stack Data Pipeline — Bronze → Silver → Gold',
    desc: 'Built a Medallion Architecture pipeline: Airflow-orchestrated ingestion, PySpark transformations in Databricks, dbt models for business layer, and a Power BI dashboard as the serving layer. Mimics real production DE workflows.',
    tags: [{ t: 'Apache Spark', c: 'gold' as TagColor }, { t: 'Airflow', c: 'gold' as TagColor }, { t: 'dbt', c: 'green' as TagColor }, { t: 'Databricks', c: 'green' as TagColor }, { t: 'Power BI', c: 'gold' as TagColor }],
    Viz: PipelineViz,
    topBar: 'linear-gradient(90deg,#F5C842,#22D47A)',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-[1120px] mx-auto px-5 md:px-10 py-20">
      <div className="sec-tag mb-3"><span>Featured Projects</span></div>
      <h2 className="font-display font-extrabold text-white leading-[1.08] mb-2" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
        3 Projects That <span className="gold">Prove the Stack</span>
      </h2>
      <p className="text-[0.86rem] text-[#7A8A9F] leading-[1.85] max-w-[520px] mb-10">
        End-to-end data work — exploratory analysis, funnel modelling, and a full pipeline architecture.
      </p>

      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p) => {
          const IconBg = p.iconColor;
          const Viz = p.Viz;
          return (
            <div key={p.key} className="card overflow-hidden flex flex-col hover-gold relative group" style={{ borderRadius: 20 }}>
              <div className="h-[140px] relative overflow-hidden" style={{ background: '#131A22' }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: p.topBar }}></div>
                <Viz />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[1.1rem]"
                    style={{ background: `${IconBg}14`, border: `1px solid ${IconBg}33` }}>{p.icon}</div>
                  <a className="font-mono text-[0.6rem] font-medium px-3 py-1 rounded no-underline" style={{ background: '#131A22', border: '1px solid #1A2333', color: '#5A6880' }}
                    href="https://github.com/tusharchandel567" target="_blank" rel="noreferrer">GitHub ↗</a>
                </div>
                <h3 className="font-display text-[0.96rem] font-extrabold text-white mb-2 leading-[1.2]">{p.title}</h3>
                <p className="text-[0.78rem] text-[#7A8A9F] leading-[1.75] flex-1 mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <TagChip key={t.t} t={t.t} c={t.c} />)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
