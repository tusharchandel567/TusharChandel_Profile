import { useState } from 'react';

const roles: Record<string, { keywords: string[]; summary: string; highlights: string[] }> = {
  'Data Analyst': {
    keywords: ['SQL', 'Python', 'Pandas', 'Power BI', 'Tableau', 'DAX', 'Excel', 'Statistical Analysis', 'ETL', 'KPIs', 'Dashboard', 'Data Modelling', 'Funnel Analysis', 'Cohort Analysis', 'A/B Testing'],
    summary: 'B.Tech CSE graduate (2022–2026) transitioning from Frontend Developer to Data Analyst. Strong in SQL (5★ HackerRank), Python, Power BI, and Tableau. Built end-to-end retail analytics dashboards with advanced DAX, customer segmentation via RFM + K-Means, and funnel analysis on 100k+ row datasets.',
    highlights: ['5★ SQL on HackerRank', 'Power BI + DAX dashboards', 'Python EDA at scale', 'Customer segmentation (RFM, K-Means)', 'Frontend → Data career switch'],
  },
  'BI Developer': {
    keywords: ['Power BI', 'DAX', 'Tableau', 'Data Modelling', 'Star Schema', 'ETL', 'SQL', 'KPIs', 'Dashboard Design', 'Drill-Through', 'Bookmarks', 'M Query', 'Power Query', 'Data Visualization'],
    summary: 'BI-focused Data Analyst with hands-on experience building executive Power BI dashboards. Designed star-schema data models, wrote 20+ DAX measures for YoY/MoM KPIs, and delivered multi-page reports with drill-through, bookmarks, and conditional formatting.',
    highlights: ['End-to-end Power BI dashboards', 'Star / snowflake schema modelling', '20+ complex DAX measures', 'Drill-through & page navigation', 'Conditional formatting & KPIs'],
  },
  'Junior Data Engineer': {
    keywords: ['Python', 'SQL', 'Apache Spark', 'PySpark', 'dbt', 'Airflow', 'ETL', 'ELT', 'Databricks', 'Delta Lake', 'AWS', 'GCP', 'BigQuery', 'Data Pipelines', 'Medallion Architecture'],
    summary: 'Data Analyst actively up-skilling to Data Engineer. Building Medallion-architecture pipelines with PySpark, dbt models, and Airflow DAGs on Databricks. Strong SQL + analytics foundation — now learning the engineering layer (Spark, dbt, Airflow, AWS/GCP).',
    highlights: ['Medallion pipeline (Bronze→Gold)', 'PySpark transformations', 'dbt models + tests + docs', 'Airflow DAG orchestration', 'Databricks + Delta Lake'],
  },
  'Werkstudent (Germany)': {
    keywords: ['Data Analyst', 'SQL', 'Python', 'Power BI', 'Tableau', 'Excel', 'Goethe B1', 'Deutsch', 'Werkstudent', 'Working Student', 'Analytics', 'Dashboards', 'BI'],
    summary: 'B.Tech CSE graduate (2022–2026) from India — seeking Werkstudent / Working Student data roles in Germany. Proficient in SQL (5★ HackerRank), Python, Power BI, and Tableau. German A2→B1, pursuing Goethe B2. Previously Frontend Developer intern — fast learner with strong UI/dashboard design sense.',
    highlights: ['Deutsch A2→B1, B2 in progress', '5★ SQL on HackerRank', 'Power BI / Tableau dashboards', 'Werkstudent-ready · flexible hours', 'Frontend + Data hybrid skillset'],
  },
  'Business Analyst': {
    keywords: ['Requirements', 'Stakeholder', 'KPIs', 'Process Mapping', 'SQL', 'Excel', 'Power BI', 'User Stories', 'BRD', 'FRD', 'Gap Analysis', 'Data-Driven Decisions', 'Dashboard'],
    summary: 'B.Tech CSE graduate transitioning from Frontend Developer to Business Analyst. Combines technical SQL/Python depth with strong UI/UX sense from frontend work — ideal for bridging business stakeholders and engineering teams. Delivered data-backed recommendations through EDA and KPI frameworks.',
    highlights: ['Stakeholder-ready dashboards', 'SQL + Excel reporting', 'KPI framework design', 'Gap analysis from EDA work', 'Business → engineering bridge'],
  },
  'Frontend Developer': {
    keywords: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'REST API', 'Responsive Design', 'Git', 'GitHub', 'UI/UX', 'TypeScript', 'Component Architecture'],
    summary: '12-week Frontend Developer intern at RAYGAIN Technologies. Built responsive React UIs integrated with REST APIs. Maintained clean component architecture and collaborated using Git/GitHub. Now transitioning into Data Analytics — bringing strong UI/dashboard design sense to BI work.',
    highlights: ['12-week internship at RAYGAIN', 'React + JavaScript + CSS', 'REST API integration', 'Responsive UIs', 'Git/GitHub workflow'],
  },
};

export default function ResumeBuilder() {
  const [role, setRole] = useState('Data Analyst');
  const [company, setCompany] = useState('');
  const [tone, setTone] = useState<'professional' | 'confident' | 'enthusiastic'>('professional');
  const [showCover, setShowCover] = useState(false);
  const [lang, setLang] = useState<'EN' | 'DE' | 'HI'>('EN');
  const [downloaded, setDownloaded] = useState(false);

  const data = roles[role];
  const toneWords = {
    professional: ['developed', 'designed', 'delivered', 'demonstrated'],
    confident: ['mastered', 'architected', 'own', 'drive'],
    enthusiastic: ['passionate about', 'excited by', 'love building', 'thrive on'],
  }[tone];

  // Build resume preview
  const copy = (text: string) => {
    navigator.clipboard?.writeText(text);
    alert('✓ Copied to clipboard — paste into your resume editor');
  };

  const download = (text: string, filename: string) => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  const resumeText = `=== ${role.toUpperCase()} RESUME ===

TUSHAR CHANDEL
📧 sc970557@gmail.com  |  📞 7505873300
💼 linkedin.com/in/tushar-chandel-68b917247/
🐙 github.com/tusharchandel567
📍 Meerut, India · Open to Germany (Werkstudent)

--- PROFESSIONAL SUMMARY ---
${data.summary}

--- CORE SKILLS ---
${data.keywords.join(' · ')}

--- EXPERIENCE HIGHLIGHTS ---
${data.highlights.map((h) => `• ${h}`).join('\n')}

--- EDUCATION ---
• B.Tech Computer Science & Engineering — Meerut Institute of Technology (2022–2026)
• Deutsch A2→B1 — Goethe-Institut (B2 in progress)

--- CERTIFICATIONS ---
• Microsoft PL-300 — Power BI Data Analyst Associate
• HackerRank SQL — 5-Star Gold Badge
• Azure Fundamentals AZ-900

--- ROLE-SPECIFIC KEYWORDS (for ATS) ---
${data.keywords.join(', ')}
`;

  const coverText = `${company ? `[Date]\n\n${company}\n` : '[Company Name]\n'}
Dear Hiring Manager,

I am writing to express my strong interest in the ${role}${company ? ` position at ${company}` : ''}. As a B.Tech Computer Science graduate (2022–2026) transitioning from Frontend Developer to ${role}, I offer a rare combination of analytical depth and product thinking that helps teams ship data work that actually gets used.

${data.summary}

Here is what I bring:
${data.highlights.map((h) => `  ✓ ${h}`).join('\n')}

I am ${toneWords[0]} clean data, ${toneWords[1]} actionable dashboards, and ${toneWords[2]} insights that non-technical stakeholders can actually use. I speak English and Hindi natively, and I am currently at German A2→B1 with Goethe B2 in progress — so I am ready to join Werkstudent and full-time teams in Germany and India.

I would love to discuss how my SQL, Power BI, and Python skills can help${company ? ` ${company}` : ' your team'} ship the next quarter's goals.

Thank you for your time — looking forward to your reply.

Best regards,
Tushar Chandel
📧 sc970557@gmail.com  |  📞 7505873300
💼 linkedin.com/in/tushar-chandel-68b917247/
`;

  return (
    <section className="py-20 border-y border-[#1A2333]" style={{ background: '#080C10' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full" style={{ background: 'rgba(155,114,255,.12)', border: '1px solid rgba(155,114,255,.3)' }}>
            <span className="text-[0.9rem]">🤖</span>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#9B72FF]">AI-Powered · Role-Specific</span>
          </div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            AI <span className="gold">Resume & Cover Letter</span> Builder
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
            Pick your target role — instantly generate an <strong className="text-[#EDF2F7]">ATS-optimized resume</strong> and a <strong className="text-[#EDF2F7]">role-specific cover letter</strong>, keyword-matched and ready to download.
          </p>
        </div>

        {/* Controller */}
        <div className="card p-6 md:p-8 mb-6">
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest block mb-2">🎯 Target Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}
                className="w-full rounded-lg px-4 py-3 text-[0.82rem] outline-none cursor-pointer"
                style={{ background: '#131A22', border: '1px solid #1F2D3D', color: '#EDF2F7' }}>
                {Object.keys(roles).map((r) => <option key={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest block mb-2">🏢 Company (optional)</label>
              <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="e.g. RAYGAIN, Siemens..."
                className="w-full rounded-lg px-4 py-3 text-[0.82rem] outline-none"
                style={{ background: '#131A22', border: '1px solid #1F2D3D', color: '#EDF2F7' }} />
            </div>
            <div>
              <label className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest block mb-2">🎨 Tone</label>
              <select value={tone} onChange={(e) => setTone(e.target.value as any)}
                className="w-full rounded-lg px-4 py-3 text-[0.82rem] outline-none cursor-pointer"
                style={{ background: '#131A22', border: '1px solid #1F2D3D', color: '#EDF2F7' }}>
                <option value="professional">Professional</option>
                <option value="confident">Confident & Direct</option>
                <option value="enthusiastic">Enthusiastic</option>
              </select>
            </div>
            <div>
              <label className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest block mb-2">🌐 Language</label>
              <div className="flex gap-1 p-1 rounded-lg" style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
                {(['EN', 'DE', 'HI'] as const).map((l) => (
                  <button key={l} onClick={() => setLang(l)} className="flex-1 py-2.5 text-[0.7rem] font-bold rounded-md transition-all"
                    style={{
                      background: lang === l ? '#F5C842' : 'transparent',
                      color: lang === l ? '#000' : '#7A8A9F',
                    }}>
                    {l === 'EN' ? '🇬🇧 EN' : l === 'DE' ? '🇩🇪 DE' : '🇮🇳 HI'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Keyword chips */}
          <div className="flex flex-wrap items-center gap-2 pt-4" style={{ borderTop: '1px solid #1A2333' }}>
            <span className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest mr-2">🔑 ATS Keywords auto-inserted:</span>
            {data.keywords.slice(0, 14).map((k) => (
              <span key={k} className="font-mono text-[0.62rem] px-2 py-1 rounded"
                style={{ background: 'rgba(245,200,66,.08)', border: '1px solid rgba(245,200,66,.2)', color: '#F5C842' }}>{k}</span>
            ))}
          </div>
        </div>

        {/* Output */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Resume */}
          <div className="card p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-[1.1rem]">📄</span>
                <h3 className="font-display text-[1rem] font-extrabold text-white">{role} Resume</h3>
              </div>
              <span className="font-mono text-[0.58rem] text-[#22D47A] uppercase tracking-widest px-2 py-1 rounded-full"
                style={{ background: 'rgba(34,212,122,.1)', border: '1px solid rgba(34,212,122,.2)' }}>✓ ATS Optimized</span>
            </div>
            <pre className="flex-1 p-4 rounded-lg text-[0.72rem] leading-[1.75] whitespace-pre-wrap overflow-auto max-h-[420px]"
              style={{ background: '#050709', border: '1px solid #1A2333', color: '#B8C5D9', fontFamily: "'DM Mono', monospace" }}>
{resumeText}
            </pre>
            <div className="flex gap-2 mt-4">
              <button onClick={() => copy(resumeText)} className="btn-sec flex-1 justify-center" style={{ padding: '11px 16px' }}>📋 Copy</button>
              <button onClick={() => download(resumeText, `Tushar_Chandel_${role.replace(/\s/g, '_')}_Resume.txt`)}
                className="btn-primary flex-1 justify-center" style={{ padding: '11px 16px' }}>
                {downloaded ? '✓ Downloaded!' : '⬇ Download .txt'}
              </button>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="card p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-[1.1rem]">✉️</span>
                <h3 className="font-display text-[1rem] font-extrabold text-white">Cover Letter</h3>
              </div>
              <button onClick={() => setShowCover(!showCover)} className="font-mono text-[0.58rem] text-[#F5C842] uppercase tracking-widest px-2 py-1 rounded-full cursor-pointer"
                style={{ background: 'rgba(245,200,66,.08)', border: '1px solid rgba(245,200,66,.2)' }}>
                {showCover ? '◀ Compact' : '▶ Expand'}
              </button>
            </div>
            <pre className={`flex-1 p-4 rounded-lg text-[0.75rem] leading-[1.85] whitespace-pre-wrap overflow-auto ${showCover ? '' : 'max-h-[360px]'}`}
              style={{ background: '#050709', border: '1px solid #1A2333', color: '#B8C5D9', fontFamily: "'DM Mono', monospace" }}>
{coverText}
            </pre>
            <div className="flex gap-2 mt-4">
              <button onClick={() => copy(coverText)} className="btn-sec flex-1 justify-center" style={{ padding: '11px 16px' }}>📋 Copy</button>
              <button onClick={() => download(coverText, `Tushar_Chandel_${role.replace(/\s/g, '_')}_CoverLetter.txt`)}
                className="btn-primary flex-1 justify-center" style={{ padding: '11px 16px' }}>
                {downloaded ? '✓ Downloaded!' : '⬇ Download .txt'}
              </button>
            </div>
          </div>
        </div>

        {/* Helper text */}
        <div className="mt-6 card2 p-5 text-center">
          <div className="font-mono text-[0.62rem] text-[#5A6880] uppercase tracking-widest mb-2">💡 Pro Tip</div>
          <p className="text-[0.78rem] text-[#7A8A9F] leading-[1.8]">
            <strong className="text-[#EDF2F7]">Step 1:</strong> Paste the resume into Canva / Google Docs → apply a clean template. &nbsp;
            <strong className="text-[#EDF2F7]">Step 2:</strong> Match the company's JD keywords (check the job description for words like "${data.keywords[Math.floor(Math.random() * data.keywords.length)]}" and add them). &nbsp;
            <strong className="text-[#EDF2F7]">Step 3:</strong> Send — expect ~2× higher callback rates with a role-tailored resume.
          </p>
        </div>
      </div>
    </section>
  );
}
