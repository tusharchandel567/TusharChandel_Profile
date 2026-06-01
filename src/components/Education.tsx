export default function Education() {
  const items = [
    {
      ico: '🎓',
      title: 'B.Tech Computer Science & Engineering',
      school: 'Meerut Institute of Technology · Meerut, India',
      year: '2022 – 2026',
      tag: 'Graduated',
      color: '#9B72FF',
    },
    {
      ico: '🇩🇪',
      title: 'Deutsch A2 → B1 → B2',
      school: 'Goethe-Institut (Self-paced / Online)',
      year: '2024 – 2026 · B2 in Progress',
      tag: '🇩🇪 Germany-Ready',
      color: '#FFCE00',
    },
    {
      ico: '💻',
      title: 'Frontend Development',
      school: 'Practical · RAYGAIN Technologies',
      year: 'Jan 2026 – Mar 2026',
      tag: '12-Week Internship',
      color: '#00D4AA',
    },
    {
      ico: '⚙️',
      title: 'Backend Development',
      school: 'Self-directed · Node.js, Express, DBs',
      year: '2025 – 2026 · Ongoing',
      tag: 'Full-Stack Path',
      color: '#F5C842',
    },
  ];

  const certs = [
    { ico: '📄', h3: 'Frontend Developer Internship', issuer: 'RAYGAIN Technologies', cred: 'Letter No: HR/Training/15/01/26' },
    { ico: '🏅', h3: 'SQL (Advanced)', issuer: 'HackerRank', cred: '5-Star Gold Badge' },
    { ico: '🧩', h3: 'Problem Solving', issuer: 'LeetCode · HackerRank', cred: '50+ Problems Solved' },
    { ico: '🇩🇪', h3: 'Goethe B1 German', issuer: 'Goethe-Institut', cred: 'B2 Zertifikat in Progress' },
  ];

  return (
    <section className="max-w-[1120px] mx-auto px-5 md:px-10 py-20">
      <div className="sec-tag mb-3"><span>Education & Certifications</span></div>
      <h2 className="font-display font-extrabold text-white leading-[1.08] mb-10" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
        Academic Background & <span style={{ color: '#9B72FF' }}>Verified Skills</span>
      </h2>

      <h3 className="font-mono text-[0.7rem] uppercase tracking-widest mb-4" style={{ color: '#9B72FF' }}>🎓 Education & Training</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
        {items.map((i) => (
          <div key={i.title} className="card2 overflow-hidden hover-gold relative">
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: i.color }}></div>
            <div className="h-24 flex items-center justify-center text-[2.4rem]" style={{ background: '#161F2B' }}>{i.ico}</div>
            <div className="p-4">
              <h3 className="font-display text-[0.86rem] font-bold text-white mb-1 leading-[1.3]">{i.title}</h3>
              <div className="font-mono text-[0.7rem] mb-1" style={{ color: i.color }}>{i.school}</div>
              <div className="font-mono text-[0.65rem] text-[#5A6880] mb-2">{i.year}</div>
              <span className="font-mono text-[0.6rem] inline-block mt-1 px-2 py-1 rounded-full"
                style={{ background: `${i.color}14`, border: `1px solid ${i.color}33`, color: i.color }}>{i.tag}</span>
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-mono text-[0.7rem] uppercase tracking-widest mb-4" style={{ color: '#FFCE00' }}>🏅 Certifications & Achievements</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {certs.map((c) => (
          <div key={c.h3} className="card2 p-5 hover-gold relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg,#FFCE00,#9B72FF)' }}></div>
            <div className="text-[1.3rem] mb-2">{c.ico}</div>
            <h3 className="text-[0.82rem] font-bold text-white mb-1">{c.h3}</h3>
            <div className="font-mono text-[0.7rem] mb-2" style={{ color: '#FFCE00' }}>{c.issuer}</div>
            <div className="font-mono text-[0.62rem] text-[#5A6880] mb-3">{c.cred}</div>
            <a className="inline-flex items-center text-[0.65rem] font-bold px-3 py-1.5 rounded no-underline"
              style={{ background: '#FFCE00', color: '#000' }} href="#">View Credential ↗</a>
          </div>
        ))}
      </div>
    </section>
  );
}
