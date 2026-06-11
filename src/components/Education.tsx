export default function Education() {
  const items = [
    {
      ico: '🎓',
      title: 'B.Tech Computer Science & Engineering',
      school: 'Meerut Institute of Technology · Meerut, India',
      year: '2022 – 2026',
      tag: 'Graduated',
    },
    {
      ico: '🇩🇪',
      title: 'Deutsch A2 → B1',
      school: 'Goethe-Institut (Self-paced / Online)',
      year: '2024 – 2025 · pursuing B2',
      tag: 'Germany-Ready',
    },
    {
      ico: '📊',
      title: 'Data Analytics Bootcamp',
      school: 'Self-directed · Online',
      year: '2024 – 2025',
      tag: 'Ongoing',
    },
    {
      ico: '💻',
      title: 'Frontend Development',
      school: 'Practical · RAYGAIN Technologies',
      year: 'Jan 2026 – Mar 2026',
      tag: '12-Week Internship',
    },
  ];

  const certs = [
    { ico: '📊', h3: 'Microsoft PL-300', issuer: 'Microsoft', cred: 'Power BI Data Analyst Associate' },
    { ico: '🏅', h3: 'SQL (Advanced)', issuer: 'HackerRank', cred: '5-Star Gold Badge' },
    { ico: '🐍', h3: 'Python for Data Science', issuer: 'IBM / Coursera', cred: 'Data Science Professional' },
    { ico: '☁️', h3: 'Azure Fundamentals AZ-900', issuer: 'Microsoft Azure', cred: 'Cloud Concepts & Services' },
  ];

  return (
    <section className="max-w-[1120px] mx-auto px-5 md:px-10 py-20">
      <div className="sec-tag mb-3"><span>Education & Certifications</span></div>
      <h2 className="font-display font-extrabold text-white leading-[1.08] mb-10" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
        Academic Background & <span className="gold">Verified Skills</span>
      </h2>

      <h3 className="font-mono text-[0.7rem] text-[#F5C842] uppercase tracking-widest mb-4">🎓 Education</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
        {items.map((i) => (
          <div key={i.title} className="card2 overflow-hidden hover-gold">
            <div className="h-24 flex items-center justify-center text-[2.4rem]" style={{ background: '#161F2B' }}>{i.ico}</div>
            <div className="p-4">
              <h3 className="font-display text-[0.86rem] font-bold text-white mb-1 leading-[1.3]">{i.title}</h3>
              <div className="font-mono text-[0.7rem] text-[#F5C842] mb-1">{i.school}</div>
              <div className="font-mono text-[0.65rem] text-[#5A6880] mb-2">{i.year}</div>
              <span className="font-mono text-[0.6rem] inline-block mt-1 px-2 py-1 rounded-full"
                style={{ background: 'rgba(245,200,66,.1)', border: '1px solid rgba(245,200,66,.2)', color: '#F5C842' }}>{i.tag}</span>
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-mono text-[0.7rem] text-[#F5C842] uppercase tracking-widest mb-4">🏅 Certifications</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {certs.map((c) => (
          <div key={c.h3} className="card2 p-5 hover-gold relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg,#F5C842,#00D4AA)' }}></div>
            <div className="text-[1.3rem] mb-2">{c.ico}</div>
            <h3 className="text-[0.82rem] font-bold text-white mb-1">{c.h3}</h3>
            <div className="font-mono text-[0.7rem] text-[#F5C842] mb-2">{c.issuer}</div>
            <div className="font-mono text-[0.62rem] text-[#5A6880] mb-3">{c.cred}</div>
            <a className="inline-flex items-center text-[0.65rem] font-bold px-3 py-1.5 rounded no-underline"
              style={{ background: '#F5C842', color: '#000' }} href="#">View Credential ↗</a>
          </div>
        ))}
      </div>
    </section>
  );
}
