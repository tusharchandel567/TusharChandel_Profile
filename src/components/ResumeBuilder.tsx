import { useState } from 'react';

const roles: Record<string, { keywords: string[]; summary: string; highlights: string[] }> = {
  'Frontend Developer': {
    keywords: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'Tailwind', 'Next.js', 'Git', 'GitHub', 'REST API', 'Responsive Design', 'Accessibility', 'Performance', 'Testing', 'Jest', 'Vitest'],
    summary: 'B.Tech CSE graduate (2022–2026) transitioning from Frontend Developer intern at RAYGAIN Technologies to full-time Software Engineer. Built production React UIs, integrated REST APIs, and shipped responsive, accessible interfaces. Strong foundation in JavaScript, React, CSS frameworks, and Git workflow.',
    highlights: ['12-week Frontend Developer internship at RAYGAIN', 'Built production React UIs with API integration', 'Responsive & accessible design focus', 'Git/GitHub workflow experience', 'Strong problem-solving & DSA foundation'],
  },
  'Software Engineer': {
    keywords: ['Software Engineering', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'Databases', 'APIs', 'Git', 'CI/CD', 'Testing', 'Agile', 'System Design', 'OOP', 'Data Structures', 'Algorithms'],
    summary: 'B.Tech CSE graduate (2022–2026) with frontend production experience at RAYGAIN Technologies and active backend self-study. Proficient in React, JavaScript, and modern CSS. Learning Node.js, Express, SQL/NoSQL databases, REST/GraphQL APIs, and deployment. Strong DSA foundation from competitive coding.',
    highlights: ['RAYGAIN internship · React production work', 'Full-stack roadmap in progress', 'Competitive coder · SQL 5★', 'Git workflow & agile experience', 'B.Tech CSE · MIT Meerut'],
  },
  'React Developer': {
    keywords: ['React', 'React Hooks', 'Redux', 'Context API', 'React Router', 'Next.js', 'TypeScript', 'JavaScript', 'JSX', 'Components', 'Props', 'State Management', 'Testing', 'Jest'],
    summary: 'Frontend Developer with 12-week internship experience building production React applications. Proficient in React hooks, context API, component architecture, state management, and React Router. Integrated REST APIs and built reusable component libraries.',
    highlights: ['Production React experience at RAYGAIN', 'Component architecture & reusability', 'State management (Context, Redux)', 'API integration with React', 'React Router & Next.js basics'],
  },
  'Full-Stack Developer': {
    keywords: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API', 'GraphQL', 'JavaScript', 'TypeScript', 'Git', 'Docker', 'CI/CD', 'JWT', 'Authentication', 'Deployment'],
    summary: 'Frontend Developer with 12-week production internship, actively learning backend to become a Full-Stack Developer. Strong in React, JavaScript, and CSS. Building backend skills in Node.js, Express, SQL/NoSQL databases, authentication, and deployment.',
    highlights: ['Frontend production experience', 'Backend learning: Node.js + Express', 'SQL + NoSQL databases', 'Auth: JWT, OAuth, bcrypt', 'Docker + deployment basics'],
  },
  'UI/UX Developer': {
    keywords: ['UI Design', 'UX', 'Figma', 'React', 'CSS', 'Tailwind', 'Responsive Design', 'Accessibility', 'Animation', 'Design Systems', 'Wireframing', 'Prototyping'],
    summary: 'Frontend Developer with a strong eye for UI/UX. Built clean, responsive, and accessible interfaces during RAYGAIN internship. Comfortable with Figma, design systems, and translating designs into pixel-perfect code.',
    highlights: ['Pixel-perfect UI implementation', 'Responsive & accessible design', 'Figma to code workflow', 'Design system component libraries', 'CSS animations & interactions'],
  },
};

export default function ResumeBuilder() {
  const [role, setRole] = useState('Frontend Developer');
  const [company, setCompany] = useState('');
  const [tone, setTone] = useState<'professional' | 'confident' | 'enthusiastic'>('professional');
  const [showCover, setShowCover] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const data = roles[role];
  const toneWords = { professional: ['developed', 'designed', 'delivered'], confident: ['architected', 'own', 'drive'], enthusiastic: ['passionate about', 'love building', 'thrive on'] }[tone];

  const copy = (text: string) => { navigator.clipboard?.writeText(text); alert('✓ Copied to clipboard'); };
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
📍 Meerut, India · Open to Remote / Hybrid

--- PROFESSIONAL SUMMARY ---
${data.summary}

--- CORE SKILLS ---
${data.keywords.join(' · ')}

--- EXPERIENCE ---
• Frontend Developer Intern — RAYGAIN Technologies (Jan 2026 – Mar 2026)
  - Built responsive UIs with React, HTML, CSS, JavaScript
  - Integrated REST APIs and collaborated with dev team
  - Maintained clean component libraries and Git workflow
  - 12-week internship · Delhi, India

• Academic Projects — Meerut Institute of Technology (2023–2026)
  - E-commerce product page · React + Stripe
  - Real-time chat app · React + Socket.io + MongoDB
  - Portfolio website · React + Tailwind + Vercel
  - CRUD app · Node.js + Express + PostgreSQL

--- EDUCATION ---
• B.Tech Computer Science & Engineering — Meerut Institute of Technology (2022–2026)

--- CERTIFICATIONS & ACHIEVEMENTS ---
• SQL 5-Star Gold Badge — HackerRank
• Frontend Developer Internship Certificate — RAYGAIN Technologies
• 50+ LeetCode problems solved
• B.Tech CSE graduate · 2026

--- ATS KEYWORDS ---
${data.keywords.join(', ')}
`;

  const coverText = `${company ? `[Date]\n\n${company}\n` : '[Company Name]\n'}
Dear Hiring Manager,

I am writing to express my strong interest in the ${role}${company ? ` position at ${company}` : ''}. As a B.Tech Computer Science graduate (2022–2026) with a 12-week Frontend Developer internship at RAYGAIN Technologies, I offer a rare combination of production frontend experience and a fast-growing backend skill set.

${data.summary}

Here is what I bring:
${data.highlights.map((h) => `  ✓ ${h}`).join('\n')}

I am ${toneWords[0]} clean, maintainable code, ${toneWords[1]} scalable systems, and ${toneWords[2]} the intersection of great UX and solid engineering. I speak English and Hindi natively, and I'm currently learning German A2→B1 — so I am ready for remote, hybrid, and India-based teams.

I would love to discuss how my React, JavaScript, and backend learning can help${company ? ` ${company}` : ' your team'} ship the next quarter's goals.

Thank you for your time — looking forward to your reply.

Best regards,
Tushar Chandel
📧 sc970557@gmail.com  |  📞 7505873300
💼 linkedin.com/in/tushar-chandel-68b917247/
🐙 github.com/tusharchandel567
`;

  return (
    <section className="py-20 border-y border-[#1A2333]" style={{ background: '#080C10' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full"
            style={{ background: 'rgba(155,114,255,.12)', border: '1px solid rgba(155,114,255,.3)' }}>
            <span>🤖</span>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest" style={{ color: '#9B72FF' }}>AI-Powered · Role-Specific</span>
          </div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            AI <span style={{ color: '#9B72FF' }}>Resume & Cover Letter</span> Builder
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
            Pick your target role — instantly generate an ATS-optimized resume and cover letter, keyword-matched and ready to download.
          </p>
        </div>

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
              <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="e.g. RAYGAIN, TCS..."
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
              <label className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest block mb-2">📄 Format</label>
              <div className="flex gap-1 p-1 rounded-lg" style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
                <button className="flex-1 py-2.5 text-[0.7rem] font-bold rounded-md" style={{ background: '#9B72FF', color: '#000' }}>.txt</button>
                <button className="flex-1 py-2.5 text-[0.7rem] font-bold rounded-md text-[#5A6880]">.pdf</button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-4" style={{ borderTop: '1px solid #1A2333' }}>
            <span className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest mr-2">🔑 ATS Keywords:</span>
            {data.keywords.slice(0, 14).map((k) => (
              <span key={k} className="font-mono text-[0.62rem] px-2 py-1 rounded"
                style={{ background: 'rgba(155,114,255,.08)', border: '1px solid rgba(155,114,255,.2)', color: '#9B72FF' }}>{k}</span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="card p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span>📄</span>
                <h3 className="font-display text-[1rem] font-extrabold text-white">{role} Resume</h3>
              </div>
              <span className="font-mono text-[0.58rem] uppercase tracking-widest px-2 py-1 rounded-full"
                style={{ background: 'rgba(155,114,255,.1)', border: '1px solid rgba(155,114,255,.22)', color: '#9B72FF' }}>✓ ATS Optimized</span>
            </div>
            <pre className="flex-1 p-4 rounded-lg text-[0.7rem] leading-[1.75] whitespace-pre-wrap overflow-auto max-h-[420px]"
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

          <div className="card p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <h3 className="font-display text-[1rem] font-extrabold text-white">Cover Letter</h3>
              </div>
              <button onClick={() => setShowCover(!showCover)} className="font-mono text-[0.58rem] uppercase tracking-widest px-2 py-1 rounded-full cursor-pointer"
                style={{ background: 'rgba(155,114,255,.08)', color: '#9B72FF', border: '1px solid rgba(155,114,255,.2)' }}>
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

        <div className="mt-6 card2 p-5 text-center">
          <div className="font-mono text-[0.62rem] text-[#5A6880] uppercase tracking-widest mb-2">💡 Pro Tip</div>
          <p className="text-[0.78rem] text-[#7A8A9F] leading-[1.8]">
            <strong className="text-[#EDF2F7]">Step 1:</strong> Paste into Canva / Google Docs → apply clean template. &nbsp;
            <strong className="text-[#EDF2F7]">Step 2:</strong> Match JD keywords like "<span className="text-[#9B72FF]">{data.keywords[2] || 'React'}</span>". &nbsp;
            <strong className="text-[#EDF2F7]">Step 3:</strong> Send — expect ~2× higher callback rates with a tailored resume.
          </p>
        </div>
      </div>
    </section>
  );
}
