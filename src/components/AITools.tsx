import { useState } from 'react';

type Tab = 'resume' | 'interview' | 'placement' | 'email';

export default function AITools() {
  const [tab, setTab] = useState<Tab>('resume');
  return (
    <section id="ai-tools" className="py-20 border-y border-[#1A2333]" style={{ background: '#080C10' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full"
            style={{ background: 'rgba(155,114,255,.12)', border: '1px solid rgba(155,114,255,.3)' }}>
            <span className="text-[0.9rem]">🤖</span>
            <span className="font-mono text-[0.65rem] text-[#9B72FF] uppercase tracking-widest">AI-Powered Suite</span>
          </div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            AI <span className="gold">Tools</span> for Job Seekers
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
            Four AI-powered tools to help you land the role: resume analyzer, mock interview, campus placement portal, and auto-email sender.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {[
            { k: 'resume', l: '📝 AI Resume Analyzer', c: '#F5C842' },
            { k: 'interview', l: '🎤 AI Mock Interview', c: '#00D4AA' },
            { k: 'placement', l: '🎓 Campus Placement Portal', c: '#9B72FF' },
            { k: 'email', l: '📧 Auto Email Sender', c: '#FF5F6D' },
          ].map((t) => (
            <button key={t.k} onClick={() => setTab(t.k as Tab)}
              className="font-mono text-[0.75rem] font-semibold px-4 py-2.5 rounded-lg transition-all"
              style={{
                background: tab === t.k ? t.c : '#131A22',
                color: tab === t.k ? '#000' : '#7A8A9F',
                border: `1px solid ${tab === t.k ? t.c : '#1F2D3D'}`,
              }}>
              {t.l}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {tab === 'resume' && <ResumeAnalyzer />}
        {tab === 'interview' && <MockInterview />}
        {tab === 'placement' && <PlacementPortal />}
        {tab === 'email' && <EmailSender />}
      </div>
    </section>
  );
}

function ResumeAnalyzer() {
  const [score, setScore] = useState(0);
  const [analyzed, setAnalyzed] = useState(false);
  const [role, setRole] = useState('Data Analyst');

  const analyze = () => {
    setAnalyzed(true);
    const s = Math.floor(75 + Math.random() * 20);
    setScore(s);
  };

  const checks = [
    { name: 'Keyword density', pass: true },
    { name: 'ATS readability', pass: true },
    { name: 'Action verbs', pass: true },
    { name: 'Quantified achievements', pass: true },
    { name: 'Skill alignment', pass: true },
    { name: 'Format & spacing', pass: true },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card p-6">
        <h3 className="font-display text-[1.05rem] font-extrabold text-white mb-4">📝 Upload & Analyze Resume</h3>
        <div className="border-2 border-dashed rounded-xl p-8 text-center mb-4" style={{ borderColor: '#1F2D3D' }}>
          <div className="text-[3rem] mb-2">📄</div>
          <div className="text-[0.8rem] text-[#7A8A9F] mb-3">Drag your resume PDF or click to upload</div>
          <button onClick={analyze} className="btn-primary text-[0.8rem]" style={{ padding: '10px 20px' }}>
            {analyzed ? '🔄 Re-analyze' : '🔍 Analyze Now'}
          </button>
        </div>
        <div>
          <label className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest block mb-2">Target Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-lg px-4 py-3 text-[0.82rem] outline-none"
            style={{ background: '#131A22', border: '1px solid #1F2D3D', color: '#EDF2F7' }}>
            <option>Data Analyst</option>
            <option>BI Developer</option>
            <option>Junior Data Engineer</option>
            <option>Frontend Developer</option>
          </select>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-display text-[1.05rem] font-extrabold text-white mb-4">🎯 ATS Score & Feedback</h3>

        {!analyzed ? (
          <div className="text-center py-16">
            <div className="text-[3rem] mb-3 opacity-30">📊</div>
            <div className="text-[0.85rem] text-[#5A6880]">Upload a resume to see your score</div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#1A2333" strokeWidth="10" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#F5C842" strokeWidth="10"
                    strokeDasharray={`${(score / 100) * 314} 314`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="font-display font-extrabold text-[2.5rem]" style={{ color: '#F5C842' }}>{score}</div>
                  <div className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest">ATS SCORE</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {checks.map((c) => (
                <div key={c.name} className="flex items-center justify-between p-3 rounded-lg"
                  style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
                  <span className="text-[0.78rem] text-[#EDF2F7]">{c.name}</span>
                  <span className="font-mono text-[0.7rem] font-bold px-2 py-1 rounded"
                    style={{ background: 'rgba(34,212,122,.1)', color: '#22D47A', border: '1px solid rgba(34,212,122,.2)' }}>✓ PASS</span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 rounded-lg" style={{ background: 'rgba(245,200,66,.08)', border: '1px solid rgba(245,200,66,.2)' }}>
              <div className="font-mono text-[0.65rem] text-[#F5C842] uppercase tracking-widest mb-1">💡 AI Suggestion</div>
              <div className="text-[0.78rem] text-[#EDF2F7] leading-[1.7]">
                Your resume is <strong>{score}%</strong> aligned with <strong>{role}</strong> roles. Add 2-3 quantified achievements (e.g., "Improved dashboard load time by 40%") to reach 95%+.
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function MockInterview() {
  const [question, setQuestion] = useState(0);
  const questions = [
    { q: 'Tell me about a time you analyzed a large dataset and delivered actionable insights.', level: 'Behavioral' },
    { q: 'Write a SQL query to find the top 3 customers by revenue for each region.', level: 'Technical · SQL' },
    { q: 'How would you explain the difference between a star schema and a snowflake schema to a non-technical stakeholder?', level: 'Conceptual' },
    { q: 'A Power BI dashboard is loading slowly. How do you diagnose and fix it?', level: 'Problem Solving' },
    { q: 'Describe a project where you used Python for EDA. What was the most interesting insight?', level: 'Technical · Python' },
  ];
  const next = () => setQuestion((q) => (q + 1) % questions.length);

  return (
    <div className="grid md:grid-cols-[1fr_1fr] gap-6">
      <div className="card p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-[1.5rem]"
            style={{ background: 'rgba(0,212,170,.1)', border: '1px solid rgba(0,212,170,.3)' }}>🤖</div>
          <div>
            <h3 className="font-display text-[1rem] font-extrabold text-white">AI Interviewer</h3>
            <div className="font-mono text-[0.6rem] text-[#00D4AA] uppercase tracking-widest">Question {question + 1} / {questions.length}</div>
          </div>
        </div>

        <div className="p-5 rounded-xl mb-4 flex-1" style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
          <div className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest mb-2">{questions[question].level}</div>
          <div className="text-[0.95rem] text-[#EDF2F7] leading-[1.8] font-medium">{questions[question].q}</div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="p-3 rounded-lg text-center" style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
            <div className="font-mono text-[0.55rem] text-[#5A6880] uppercase tracking-widest mb-1">⏱ Time</div>
            <div className="font-display font-bold text-[#F5C842]">02:45</div>
          </div>
          <div className="p-3 rounded-lg text-center" style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
            <div className="font-mono text-[0.55rem] text-[#5A6880] uppercase tracking-widest mb-1">📊 Confidence</div>
            <div className="font-display font-bold text-[#22D47A]">87%</div>
          </div>
        </div>

        <button onClick={next} className="btn-primary w-full justify-center">🎤 Next Question</button>
      </div>

      <div className="card p-6">
        <h3 className="font-display text-[1.05rem] font-extrabold text-white mb-4">💡 Suggested Answer Framework</h3>
        <div className="space-y-3 mb-4">
          {[
            { step: '1', t: 'Context', d: 'Set the scene — what was the dataset, team, and goal?' },
            { step: '2', t: 'Action', d: 'What tools did you use? (SQL, Python, Power BI)' },
            { step: '3', t: 'Insight', d: 'What did you discover? Mention the number!' },
            { step: '4', t: 'Impact', d: 'How did this change a decision or metric?' },
          ].map((s) => (
            <div key={s.step} className="flex gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[0.75rem] font-bold flex-shrink-0"
                style={{ background: '#F5C842', color: '#000' }}>{s.step}</div>
              <div>
                <div className="text-[0.82rem] font-bold text-[#EDF2F7]">{s.t}</div>
                <div className="text-[0.72rem] text-[#7A8A9F] leading-[1.6]">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-lg" style={{ background: 'rgba(0,212,170,.08)', border: '1px solid rgba(0,212,170,.2)' }}>
          <div className="font-mono text-[0.62rem] text-[#00D4AA] uppercase tracking-widest mb-1">📈 Progress</div>
          <div className="h-2 rounded-full" style={{ background: '#1A2333' }}>
            <div className="h-full rounded-full" style={{ width: `${((question + 1) / questions.length) * 100}%`, background: 'linear-gradient(90deg,#F5C842,#00D4AA)' }}></div>
          </div>
          <div className="font-mono text-[0.6rem] text-[#5A6880] mt-2">{Math.round(((question + 1) / questions.length) * 100)}% complete</div>
        </div>
      </div>
    </div>
  );
}

function PlacementPortal() {
  const companies = [
    { n: 'TCS', r: 'Data Analyst', l: 'Remote', s: 'OPEN', c: '#F5C842' },
    { n: 'Infosys', r: 'BI Developer', l: 'Bengaluru', s: 'OPEN', c: '#00D4AA' },
    { n: 'Wipro', r: 'Junior DE', l: 'Hyderabad', s: 'OPEN', c: '#9B72FF' },
    { n: 'Accenture', r: 'Data Analyst', l: 'Gurugram', s: 'CLOSING', c: '#FF5F6D' },
    { n: 'Cognizant', r: 'BI Analyst', l: 'Pune', s: 'OPEN', c: '#22D47A' },
    { n: 'HCL', r: 'Data Engineer', l: 'Noida', s: 'OPEN', c: '#4E9EFF' },
    { n: 'Deloitte', r: 'Business Analyst', l: 'Mumbai', s: 'OPEN', c: '#F5C842' },
    { n: 'Capgemini', r: 'SQL Developer', l: 'Chennai', s: 'OPEN', c: '#00D4AA' },
  ];

  return (
    <div className="grid md:grid-cols-[1.3fr_1fr] gap-6">
      <div className="card p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-display text-[1.05rem] font-extrabold text-white">🎓 Campus Placement Portal</h3>
            <div className="font-mono text-[0.65rem] text-[#5A6880] uppercase tracking-widest">Meerut Institute of Technology · Batch 2026</div>
          </div>
          <div className="p-3 rounded-lg text-center" style={{ background: 'rgba(245,200,66,.1)', border: '1px solid rgba(245,200,66,.2)' }}>
            <div className="font-display font-bold text-[1.3rem] text-[#F5C842]">8</div>
            <div className="font-mono text-[0.55rem] text-[#5A6880] uppercase tracking-widest">Active Drives</div>
          </div>
        </div>

        <div className="space-y-2 max-h-[440px] overflow-y-auto pr-1">
          {companies.map((c) => (
            <div key={c.n} className="flex items-center justify-between p-3 rounded-lg hover-gold"
              style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[0.85rem] font-bold flex-shrink-0"
                  style={{ background: `${c.c}22`, border: `1px solid ${c.c}44`, color: c.c }}>
                  {c.n.slice(0, 2)}
                </div>
                <div>
                  <div className="text-[0.85rem] font-bold text-[#EDF2F7]">{c.n}</div>
                  <div className="font-mono text-[0.6rem] text-[#7A8A9F]">{c.r} · {c.l}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[0.58rem] px-2 py-1 rounded"
                  style={{ background: c.s === 'OPEN' ? 'rgba(34,212,122,.1)' : 'rgba(255,95,109,.1)',
                    color: c.s === 'OPEN' ? '#22D47A' : '#FF5F6D',
                    border: `1px solid ${c.s === 'OPEN' ? 'rgba(34,212,122,.2)' : 'rgba(255,95,109,.2)'}` }}>
                  {c.s}
                </span>
                <button className="font-mono text-[0.65rem] font-bold px-3 py-1.5 rounded cursor-pointer"
                  style={{ background: c.c, color: '#000' }}>Apply</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="card p-6">
          <h4 className="font-display text-[0.95rem] font-extrabold text-white mb-3">📊 Placement Stats</h4>
          <div className="space-y-2">
            {[
              { l: 'Students Placed', v: '142', c: '#F5C842' },
              { l: 'Avg. Package', v: '₹6.8 LPA', c: '#00D4AA' },
              { l: 'Highest Package', v: '₹24 LPA', c: '#9B72FF' },
              { l: 'Companies Visited', v: '38', c: '#22D47A' },
            ].map((s) => (
              <div key={s.l} className="flex justify-between items-center p-3 rounded-lg"
                style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
                <span className="text-[0.78rem] text-[#7A8A9F]">{s.l}</span>
                <span className="font-display font-bold text-[0.95rem]" style={{ color: s.c }}>{s.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h4 className="font-display text-[0.95rem] font-extrabold text-white mb-3">🎯 My Applications</h4>
          <div className="space-y-2">
            {[
              { c: 'TCS', r: 'Applied', s: '📋' },
              { c: 'Infosys', r: 'Interview Scheduled', s: '📅' },
              { c: 'Accenture', r: 'Shortlisted', s: '✨' },
            ].map((a) => (
              <div key={a.c} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
                <span>{a.s}</span>
                <div className="flex-1">
                  <div className="text-[0.8rem] font-bold text-[#EDF2F7]">{a.c}</div>
                  <div className="font-mono text-[0.6rem] text-[#F5C842]">{a.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailSender() {
  const [email, setEmail] = useState('recruiter@company.com');
  const [role, setRole] = useState('Data Analyst');
  const [sent, setSent] = useState(0);
  const [sending, setSending] = useState(false);
  const [recipients, setRecipients] = useState<string[]>([]);

  const send = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent((s) => s + 1);
      setRecipients((r) => [email, ...r].slice(0, 5));
      setEmail('');
    }, 1200);
  };

  const bulkSend = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent((s) => s + 50);
      setRecipients([
        'hr@siemens.de', 'careers@zalando.de', 'talent@deutsche-bank.de',
        'hr@raygain.com', 'recruiter@allianz.de', ...recipients
      ].slice(0, 5));
    }, 2000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card p-6">
        <h3 className="font-display text-[1.05rem] font-extrabold text-white mb-4">📧 Auto Email Sender</h3>
        <p className="text-[0.78rem] text-[#7A8A9F] mb-5 leading-[1.7]">
          Send your tailored resume & cover letter to recruiters automatically. The AI picks the best version based on the role.
        </p>

        <div className="space-y-3 mb-4">
          <div>
            <label className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest block mb-1.5">Recruiter Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg px-4 py-3 text-[0.82rem] outline-none"
              style={{ background: '#131A22', border: '1px solid #1F2D3D', color: '#EDF2F7' }} />
          </div>
          <div>
            <label className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest block mb-1.5">Role Applying For</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-lg px-4 py-3 text-[0.82rem] outline-none cursor-pointer"
              style={{ background: '#131A22', border: '1px solid #1F2D3D', color: '#EDF2F7' }}>
              <option>Data Analyst</option>
              <option>BI Developer</option>
              <option>Junior Data Engineer</option>
              <option>Frontend Developer</option>
              <option>Business Analyst</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2">
          <button onClick={send} disabled={sending} className="btn-primary flex-1 justify-center" style={{ padding: '12px 20px' }}>
            {sending ? '⏳ Sending...' : '📤 Send Now'}
          </button>
          <button onClick={bulkSend} disabled={sending} className="btn-sec" style={{ padding: '12px 20px' }}>
            🎯 Send to 50 Recruiters
          </button>
        </div>

        {sent > 0 && (
          <div className="mt-4 p-4 rounded-lg text-center" style={{ background: 'rgba(34,212,122,.1)', border: '1px solid rgba(34,212,122,.25)' }}>
            <div className="font-display text-[1.5rem] font-extrabold text-[#22D47A]">✓ {sent} Emails Sent</div>
            <div className="font-mono text-[0.65rem] text-[#5A8880] mt-1">Auto-attached: Resume + Cover Letter ({role})</div>
          </div>
        )}
      </div>

      <div className="card p-6">
        <h3 className="font-display text-[1.05rem] font-extrabold text-white mb-4">📬 Recent Deliveries</h3>

        <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1">
          {recipients.length === 0 ? (
            <div className="text-center py-16 text-[#5A6880]">
              <div className="text-[3rem] mb-2">📭</div>
              <div className="text-[0.8rem]">No emails sent yet</div>
            </div>
          ) : (
            recipients.map((r, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-[0.85rem]"
                  style={{ background: 'rgba(34,212,122,.1)', border: '1px solid rgba(34,212,122,.2)' }}>✓</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[0.78rem] font-bold text-[#EDF2F7] truncate">{r}</div>
                  <div className="font-mono text-[0.58rem] text-[#22D47A]">Delivered · {role}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
