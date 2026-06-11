export default function Experience() {
  const jobs = [
    {
      title: 'Frontend Developer Intern',
      company: 'RAYGAIN Technologies Pvt. Ltd. · Delhi, India',
      date: 'Jan 2026 – Mar 2026',
      desc: 'Completed a 12-week internship as Frontend Developer. Worked on real-time frontend development projects using modern web technologies. Actively involved in building responsive user interfaces, integrating APIs, and collaborating with the development team to deliver high-quality solutions.',
      details: [
        'Built responsive user interfaces with React, HTML, CSS, and JavaScript',
        'Integrated REST APIs and handled data flow between frontend and backend',
        'Maintained clean, reusable component libraries with a focus on UX',
        'Collaborated with team using Git / GitHub and agile workflows',
      ],
      tags: ['React', 'HTML5', 'CSS3', 'JavaScript', 'API Integration', 'Git', 'Responsive UI'],
    },
    {
      title: 'Data Analyst — Academic Capstone',
      company: 'Sales Analytics Dashboard · Meerut Institute of Technology',
      date: '2024 – 2025',
      desc: 'Built a full-stack Power BI dashboard for a mock retail company: designed the data model, wrote 20+ DAX measures, and connected live SQL views. Delivered executive-level KPI reporting with slicers, drill-through, and conditional formatting.',
      details: [
        'Designed star-schema data model with clean fact & dimension tables',
        'Created 20+ DAX measures for YoY, MoM, and custom KPIs',
        'Built multi-page Power BI dashboard with drill-through & bookmarks',
        'Presented findings to faculty — received highest marks in the batch',
      ],
      tags: ['Power BI', 'DAX', 'SQL', 'Data Modelling', 'KPI Design'],
    },
    {
      title: 'EDA Project — Retail Customer Segmentation',
      company: 'Independent Research',
      date: '2024',
      desc: 'Applied RFM analysis and K-Means clustering on 100k+ transaction records. Identified 4 distinct customer segments and built Tableau dashboards to communicate findings to a non-technical audience.',
      details: [
        'Cleaned and transformed messy CSV data with Pandas',
        'RFM analysis to score customers on Recency, Frequency, and Monetary value',
        'K-Means clustering with silhouette analysis for optimal k',
        'Interactive Tableau dashboard with segmentation views',
      ],
      tags: ['Python', 'Pandas', 'K-Means', 'RFM Analysis', 'Tableau', 'Seaborn'],
    },
    {
      title: 'Data Engineering — Self-Study Journey',
      company: 'Apache Spark · dbt · Airflow · Databricks',
      date: '2025 – ongoing',
      desc: 'Actively working through the modern DE stack: Spark DataFrames, dbt models, Airflow DAGs, and Databricks notebooks. Building a capstone Medallion pipeline project for the portfolio.',
      details: [
        'Learning PySpark for large-scale transformations',
        'Building dbt models, tests, and documentation',
        'Orchestrating pipelines with Apache Airflow DAGs',
        'Practicing on Databricks with Delta Lake',
      ],
      tags: ['Apache Spark', 'dbt', 'Airflow', 'Databricks', 'Delta Lake', 'ETL / ELT', 'Medallion'],
    },
  ];

  return (
    <section id="experience" className="max-w-[1120px] mx-auto px-5 md:px-10 py-20">
      <div className="sec-tag mb-3"><span>Experience</span></div>
      <h2 className="font-display font-extrabold text-white leading-[1.08] mb-2" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
        Frontend → <span className="gold">Data Analyst</span>
      </h2>
      <p className="text-[0.86rem] text-[#7A8A9F] leading-[1.85] max-w-[520px] mb-10">
        Practical experience building UIs as a frontend developer, combined with end-to-end data analysis projects — ready to contribute from day one.
      </p>

      <div className="relative pl-6" style={{ borderLeft: 'none' }}>
        <div className="absolute left-0 top-0 bottom-0 w-[1px]"
          style={{ background: 'linear-gradient(180deg,#F5C842 0%,#00D4AA 60%,transparent 100%)' }}></div>
        {jobs.map((job, idx) => (
          <div key={idx} className="relative mb-6 pl-6">
            <div className="absolute left-[-30px] top-4 w-[13px] h-[13px] rounded-full bg-[#050709] border-2 border-[#F5C842] flex items-center justify-center tl-dot">
              <span className="w-[5px] h-[5px] rounded-full bg-[#F5C842]"></span>
            </div>
            <div className="card2 p-5 hover-gold" style={{ borderLeft: '2px solid #F5C842', borderRadius: 12 }}>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <span className="font-display text-[0.95rem] font-extrabold text-white">{job.title}</span>
                <span className="font-mono text-[0.62rem] text-[#F5C842] px-3 py-1 rounded-full"
                  style={{ background: 'rgba(245,200,66,.08)', border: '1px solid rgba(245,200,66,.18)' }}>{job.date}</span>
              </div>
              <div className="text-[0.76rem] font-medium mb-3" style={{ color: '#00D4AA' }}>{job.company}</div>
              <p className="text-[0.78rem] text-[#7A8A9F] leading-[1.75] mb-3">{job.desc}</p>
              <ul className="list-none p-0 mb-3 space-y-1.5">
                {job.details.map((d, i) => (
                  <li key={i} className="text-[0.75rem] text-[#7A8A9F] pl-4 relative leading-[1.7]">
                    <span className="absolute left-0 text-[#F5C842]">▸</span>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {job.tags.map((t) => (
                  <span key={t} className="font-mono text-[0.59rem] px-2 py-1 rounded"
                    style={{ background: 'rgba(245,200,66,.06)', color: '#F5C842', border: '1px solid rgba(245,200,66,.12)' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
