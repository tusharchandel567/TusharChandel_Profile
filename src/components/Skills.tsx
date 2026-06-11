const usedSkills = [
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', name: 'Pandas' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', name: 'NumPy' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', name: 'Power BI' },
  { img: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg', name: 'Tableau' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg', name: 'MS Excel' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML5' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS3' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', name: 'Git / GitHub' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', name: 'VS Code' },
];

const learningSkills = [
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg', name: 'Apache Spark' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/databricks/databricks-original.svg', name: 'Databricks' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg', name: 'Apache Airflow' },
  { img: 'https://seeklogo.com/images/D/dbt-logo-500AB9B24F-seeklogo.com.png', name: 'dbt' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', name: 'AWS' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', name: 'GCP' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', name: 'Kubernetes' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker' },
];

const skillBars = [
  { name: 'SQL (5★ HackerRank)', pct: 92, color: 'gold' },
  { name: 'Power BI / DAX', pct: 90, color: 'gold' },
  { name: 'Python / Pandas / NumPy', pct: 88, color: 'gold' },
  { name: 'Excel (Advanced + Power Query)', pct: 87, color: 'gold' },
  { name: 'Tableau', pct: 82, color: 'gold' },
  { name: 'Frontend · React / HTML / CSS / JS', pct: 80, color: 'gold' },
  { name: 'Apache Spark / PySpark (Learning)', pct: 55, color: 'teal' },
  { name: 'dbt / Airflow (Learning)', pct: 45, color: 'teal' },
  { name: 'Databricks / Cloud (Learning)', pct: 40, color: 'teal' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-y border-[#1A2333]" style={{ background: '#080C10' }}>
      <div className="max-w-[1120px] mx-auto px-5 md:px-10">
        <div className="sec-tag mb-3"><span>Technical Stack</span></div>
        <h2 className="font-display font-extrabold text-white leading-[1.08] mb-2"
          style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
          Data Tools I <span className="gold">Work With</span>
        </h2>
        <p className="text-[0.86rem] text-[#7A8A9F] leading-[1.85] max-w-[520px] mb-10">
          Data analyst stack in daily use, frontend development from past internship, and a growing data engineering layer.
        </p>

        {/* Used Skills */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.6rem] text-[#F5C842] uppercase tracking-widest px-3 py-1 rounded"
              style={{ background: 'rgba(245,200,66,.1)', border: '1px solid rgba(245,200,66,.2)' }}>
              ✓ Used / Working
            </span>
            <span className="text-[0.7rem] text-[#5A6880]">Skills I use daily as a Data Analyst & Frontend Developer</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {usedSkills.map((s) => (
              <div key={s.name} className="skill-card card2 py-4 px-2 text-center">
                <img src={s.img} alt={s.name} className="w-8 h-8 object-contain mx-auto mb-2" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <span className="font-mono text-[0.6rem] text-[#7A8A9F] block">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Skills */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.6rem] text-[#00D4AA] uppercase tracking-widest px-3 py-1 rounded"
              style={{ background: 'rgba(0,212,170,.1)', border: '1px solid rgba(0,212,170,.2)' }}>
              📚 Learning / In Progress
            </span>
            <span className="text-[0.7rem] text-[#5A6880]">Data Engineering stack I'm actively building</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-2">
            {learningSkills.map((s) => (
              <div key={s.name} className="skill-card card2 py-4 px-2 text-center" style={{ borderColor: 'rgba(0,212,170,.12)' }}>
                <img src={s.img} alt={s.name} className="w-8 h-8 object-contain mx-auto mb-2" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <span className="font-mono text-[0.6rem] text-[#00D4AA] block">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
          {skillBars.map((b) => (
            <div key={b.name} className="flex items-center gap-3">
              <span className="text-[0.76rem] font-semibold text-[#EDF2F7] w-[210px] flex-shrink-0">{b.name}</span>
              <div className="flex-1 h-[3px] rounded-full" style={{ background: '#1F2D3D' }}>
                <div className="h-full rounded-full sb-fill" style={{
                  width: `${b.pct}%`,
                  background: b.color === 'gold' ? 'linear-gradient(90deg,#d4a916,#F5C842)' : 'linear-gradient(90deg,#00D4AA,rgba(0,212,170,.6))'
                }}></div>
              </div>
              <span className="font-mono text-[0.64rem] text-[#5A6880] w-[36px] text-right">{b.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
