import { useState, useEffect } from 'react';

const jobTitles = [
  '[DE] Data Analyst · Berlin (12 min ago)',
  '[IN] Junior Data Analyst · Bengaluru',
  '[DE] Werkstudent Data & Analytics',
  '[DE] BI Developer Power BI · München',
  '[IN] Power BI Developer · Noida',
  '[DE] Data Analyst · Frankfurt',
  '[IN] Data Analyst · Gurugram',
  '[DE] Werkstudent Data Engineering · Berlin',
  '[IN] SQL / Python Analyst · Pune',
  '[DE] Junior Data Engineer · Hamburg',
];

const notifications = [
  { icon: '📬', title: 'New matching job posted', time: 'just now', text: '[DE] Werkstudent Data & Analytics — Siemens', detail: 'Berlin · Full-time · Posted 1h ago', tone: 'teal' },
  { icon: '🔔', title: 'Job alert match', time: '2 min', text: 'Power BI Developer at RAYGAIN', detail: 'Delhi · ₹25–32LPA · 12 new applicants', tone: 'gold' },
  { icon: '📈', title: 'Career tip of the week', time: '8 min', text: 'Switching from Frontend → Data Analyst', detail: 'LinkedIn: 5,412 open roles matching', tone: 'purple' },
  { icon: '👀', title: 'Recruiter viewed your profile', time: '1h', text: 'Recruiter at Deutsche Bank', detail: 'Viewed resume · Data Analyst Werkstudent', tone: 'green' },
  { icon: '🤝', title: 'Interview invite', time: '6h', text: 'Junior BI role invite sent', detail: 'Interview: Wed 11:00 · Video Call', tone: 'gold' },
  { icon: '💼', title: 'ATS score updated', time: '12h', text: 'Your resume viewed 14× today', detail: 'ATS score: 92/100 → "Data Analyst" role', tone: 'teal' },
];

const toneColor: Record<string, string> = { teal: '#00D4AA', gold: '#F5C842', purple: '#9B72FF', green: '#22D47A' };

export default function JobAlerts() {
  const [email, setEmail] = useState('sc970557@gmail.com');
  const [phone, setPhone] = useState('+91 75058 73300');
  const [subscribed, setSubscribed] = useState(false);
  const [tickerIdx, setTickerIdx] = useState(0);
  const [jobs, setJobs] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = [...jobTitles].sort(() => Math.random() - 0.5).slice(0, 6);
    setJobs(shuffled);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTickerIdx((i) => (i + 1) % 6), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10">
          <div className="sec-tag mb-3 justify-center"><span style={{ margin: 'auto' }}>Live Job Activity</span></div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Daily Job <span className="gold">Alerts & Notifications</span>
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
            Live feed of matching roles, recruiter views, and application status. Subscribe for daily job-match emails straight to your inbox.
          </p>
        </div>

        {/* Ticker */}
        <div className="mb-6 p-4 rounded-xl overflow-hidden" style={{ background: 'linear-gradient(90deg,#F5C842, #d4a916)', boxShadow: '0 8px 32px rgba(245,200,66,0.25)' }}>
          <div className="flex items-center gap-3 text-[#000] font-bold flex-wrap">
            <span>🔥</span>
            <span className="font-mono text-[0.7rem] uppercase tracking-widest">LIVE · DATA JOBS FEED</span>
            <span className="text-[0.85rem]">{jobs[tickerIdx] || 'Loading...'}</span>
            <span className="ml-auto text-[0.7rem] opacity-70">↑</span>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_420px] gap-6 items-start">
          {/* Notifications feed */}
          <div className="card p-5 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-[1.05rem] font-extrabold text-white flex items-center gap-2">
                <span className="text-[1rem]">🔔</span> Activity Feed
              </h3>
              <span className="font-mono text-[0.6rem] text-[#5A6880]">⚡ Auto-updating</span>
            </div>

            <div className="space-y-3">
              {notifications.map((n, i) => {
                const col = toneColor[n.tone];
                return (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg relative"
                    style={{ background: '#131A22', border: `1px solid ${col}22` }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[1rem] flex-shrink-0"
                      style={{ background: `${col}14`, border: `1px solid ${col}33` }}>{n.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-display text-[0.85rem] font-bold text-[#EDF2F7]">{n.title}</span>
                        <span className="font-mono text-[0.58rem] text-[#5A6880] ml-auto">{n.time} ago</span>
                      </div>
                      <div className="text-[0.8rem] font-semibold mb-1" style={{ color: col }}>{n.text}</div>
                      <div className="font-mono text-[0.68rem] text-[#7A8A9F]">{n.detail}</div>
                    </div>
                    <div className="w-2 h-2 rounded-full mt-4 flex-shrink-0"
                      style={{ background: col, boxShadow: `0 0 0 3px ${col}44` }}></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Subscribe */}
          <div className="space-y-3">
            <div className="card p-6">
              <h3 className="font-display text-[1.05rem] font-extrabold text-white mb-2">📬 Subscribe to daily alerts</h3>
              <p className="text-[0.78rem] text-[#7A8A9F] mb-4 leading-[1.75]">
                Every morning at 9 AM IST, I'll send 3 hand-picked matching roles to your email & phone.
              </p>

              <div className="space-y-3 mb-4">
                <div>
                  <label className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest block mb-1.5">📧 Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg px-4 py-3 text-[0.82rem] outline-none"
                    style={{ background: '#131A22', border: '1px solid #1F2D3D', color: '#EDF2F7' }} />
                </div>
                <div>
                  <label className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest block mb-1.5">📱 Mobile (SMS Alerts)</label>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg px-4 py-3 text-[0.82rem] outline-none"
                    style={{ background: '#131A22', border: '1px solid #1F2D3D', color: '#EDF2F7' }} />
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {[
                  { t: '🔔 Data Analyst roles', c: '#F5C842' },
                  { t: '⚙️ Junior DE / Werkstudent', c: '#00D4AA' },
                  { t: '📊 BI Developer openings', c: '#9B72FF' },
                ].map((opt, i) => (
                  <label key={i} className="flex items-center gap-2 p-3 rounded-lg cursor-pointer"
                    style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span className="text-[0.78rem] font-semibold" style={{ color: opt.c }}>{opt.t}</span>
                  </label>
                ))}
              </div>

              <button onClick={() => setSubscribed(!subscribed)}
                className="btn-primary w-full justify-center text-[0.9rem]" style={{ padding: '14px 24px' }}>
                {subscribed ? '✓ Subscribed! Check email ✓' : '🚀 Send me daily job alerts'}
              </button>

              {subscribed && (
                <div className="mt-4 p-4 rounded-xl text-center"
                  style={{ background: 'rgba(34,212,122,0.1)', border: '1px solid rgba(34,212,122,0.25)' }}>
                  <div className="font-mono text-[0.7rem] text-[#22D47A]">
                    ✅ Great! You'll receive 3 roles every morning at 9 AM IST to:
                    <br />
                    <span className="text-[#EDF2F7]">{email} · {phone}</span>
                  </div>
                </div>
              )}
            </div>

            {/* German flag + Germany focus */}
            <div className="card p-6 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: 'linear-gradient(90deg,#000 0%,#000 33%,#DD0000 33%,#DD0000 66%,#F5C842 66%,#F5C842 100%)' }}></div>
              <div className="text-[1.4rem] mb-1">🇩🇪</div>
              <h4 className="font-display text-[1rem] font-extrabold text-white mb-1">Germany-Focused</h4>
              <p className="text-[0.78rem] text-[#7A8A9F] mb-3 leading-[1.75]">
                Targeting <strong className="text-[#EDF2F7]">Werkstudent</strong>, <strong className="text-[#EDF2F7]">Working Student</strong>, and Junior Analyst roles across Germany.
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 mb-2">
                {['Berlin', 'München', 'Hamburg', 'Frankfurt', 'Stuttgart', 'Köln'].map((c) => (
                  <span key={c} className="font-mono text-[0.65rem] px-2 py-1 rounded"
                    style={{ background: 'rgba(245,200,66,.08)', border: '1px solid rgba(245,200,66,.2)', color: '#F5C842' }}>{c}</span>
                ))}
              </div>
              <div className="font-mono text-[0.68rem] text-[#22D47A] mt-2">
                ✓ Deutsch A2→B1 · Goethe B2 in progress
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
