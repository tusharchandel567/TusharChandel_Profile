import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', role: 'Data Analyst Role', msg: '' });

  const send = () => {
    if (!form.name || !form.email) { alert('Please fill in your name and email.'); return; }
    const sub = encodeURIComponent(`Data Opportunity for Tushar Chandel — ${form.role}`);
    const body = encodeURIComponent(`Hi Tushar,\n\nI found your portfolio and would like to discuss an opportunity.\n\nName: ${form.name}\nEmail: ${form.email}\nRole: ${form.role}\n\nMessage:\n${form.msg}\n\nBest regards,\n${form.name}`);
    window.location.href = `mailto:sc970557@gmail.com?subject=${sub}&body=${body}`;
  };

  const cLinks = [
    { ico: '📧', l: 'Email', v: 'sc970557@gmail.com', href: 'mailto:sc970557@gmail.com' },
    { ico: '📞', l: 'Phone', v: '7505873300', href: 'tel:7505873300' },
    { ico: '💼', l: 'LinkedIn', v: 'tushar-chandel-68b917247', href: 'https://www.linkedin.com/in/tushar-chandel-68b917247/' },
    { ico: '🐙', l: 'GitHub', v: 'tusharchandel567', href: 'https://github.com/tusharchandel567' },
    { ico: '📄', l: 'Resume', v: 'View / Download PDF ↗', href: 'https://drive.google.com/file/d/1YnTtZz-gOIpT8y5WOL6htbC6g_OzGs-V/view' },
  ];
  const roles = ['Frontend Developer', 'React Developer', 'Software Engineer', 'Full-Stack Developer', 'UI/UX Engineer', 'Internship / Praktikum', 'Werkstudent (Germany)'];

  return (
    <section id="contact" className="py-20 border-t border-[#1A2333]" style={{ background: '#080C10' }}>
      <div className="max-w-[1120px] mx-auto px-5 md:px-10">
        <div className="sec-tag mb-3"><span>Contact</span></div>

        <div className="flex flex-wrap items-center justify-between gap-3 p-4 mb-8 rounded-xl"
          style={{ background: 'rgba(34,212,122,.08)', border: '1px solid rgba(34,212,122,.22)' }}>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#22D47A] pulse-dot"></div>
            <span className="font-mono text-[0.74rem] font-medium" style={{ color: '#9B72FF' }}>
              🟢 Open to Work — Frontend Dev · Software Engineer · Full-Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {roles.map((r) => (
              <span key={r} className="font-mono text-[0.62rem] px-2 py-1 rounded"
                style={{ background: 'rgba(34,212,122,.07)', color: '#22D47A', border: '1px solid rgba(34,212,122,.15)' }}>{r}</span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            {/* Mini profile card */}
            <div className="flex items-center gap-4 mb-6 p-4 rounded-xl" style={{ background: '#0F151C', border: '1px solid rgba(245,200,66,.2)' }}>
              <img src="/profile.jpg" alt="Tushar" className="w-16 h-16 rounded-full object-cover flex-shrink-0" style={{ border: '2px solid #F5C842' }} />
              <div>
                <div className="font-display text-[0.95rem] font-extrabold text-white">Tushar Chandel</div>
                <div className="font-mono text-[0.65rem]" style={{ color: '#9B72FF' }}>Software Engineer · B.Tech CSE</div>
                <div className="text-[0.65rem] text-[#7A8A9F]">📍 Meerut, IN · Open to Remote 🇮🇳</div>
              </div>
            </div>

            <h2 className="font-display font-extrabold text-white leading-[1.1] mb-4" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}>
              Let's Build <span style={{ color: '#9B72FF' }}>Great Software</span> Together
            </h2>
            <p className="text-[0.86rem] text-[#7A8A9F] leading-[1.85] mb-6">
              Actively looking for Frontend Developer, Software Engineer, and Full-Stack roles. Full-time, internship, or remote — let's talk!
            </p>

            <div className="flex flex-col gap-2 mb-6">
              {cLinks.map((l) => (
                <a key={l.l} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl no-underline hover-gold" style={{ background: '#0F151C', border: '1px solid #1A2333' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[0.9rem] flex-shrink-0" style={{ background: '#131A22' }}>{l.ico}</div>
                  <div className="flex-1">
                    <span className="font-mono text-[0.58rem] text-[#5A6880] uppercase tracking-widest block">{l.l}</span>
                    <span className="text-[0.8rem] text-[#EDF2F7] font-medium">{l.v}</span>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <div className="font-mono text-[0.62rem] text-[#5A6880] uppercase tracking-widest mb-2">🎯 Target Roles</div>
              <div className="flex flex-wrap gap-2">
                {roles.map((r) => (
                  <span key={r} className="font-mono text-[0.7rem] font-semibold px-3 py-1.5 rounded"
                    style={{ background: 'rgba(245,200,66,.1)', border: '1px solid rgba(245,200,66,.25)', color: '#F5C842' }}>{r}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <label className="font-mono text-[0.64rem] text-[#7A8A9F] uppercase tracking-widest block mb-1.5">Your Name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe" className="w-full rounded-lg px-4 py-3 text-[0.85rem] outline-none"
                style={{ background: '#131A22', border: '1px solid #1F2D3D', color: '#EDF2F7' }} />
            </div>
            <div>
              <label className="font-mono text-[0.64rem] text-[#7A8A9F] uppercase tracking-widest block mb-1.5">Your Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="contact@company.com" className="w-full rounded-lg px-4 py-3 text-[0.85rem] outline-none"
                style={{ background: '#131A22', border: '1px solid #1F2D3D', color: '#EDF2F7' }} />
            </div>
            <div>
              <label className="font-mono text-[0.64rem] text-[#7A8A9F] uppercase tracking-widest block mb-1.5">Opportunity Type</label>
              <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-[0.85rem] outline-none cursor-pointer"
                style={{ background: '#131A22', border: '1px solid #1F2D3D', color: '#EDF2F7' }}>
                {roles.map((r) => <option key={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label className="font-mono text-[0.64rem] text-[#7A8A9F] uppercase tracking-widest block mb-1.5">Message</label>
              <textarea value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} rows={5}
                placeholder="Tell me about the role or project..." className="w-full rounded-lg px-4 py-3 text-[0.85rem] outline-none resize-y"
                style={{ background: '#131A22', border: '1px solid #1F2D3D', color: '#EDF2F7' }} />
            </div>
            <button onClick={send} className="btn-primary w-full justify-center mt-1" style={{ padding: '13px 20px' }}>
              📩 Send Message
            </button>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-14">
          <div className="sec-tag mb-3"><span>Languages</span></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { f: '🇬🇧', l: 'English', p: 'Professional Working Proficiency' },
              { f: '🇩🇪', l: 'Deutsch', p: 'A2–B1 → Goethe B2 in Progress' },
              { f: '🇮🇳', l: 'Hindi', p: 'Native Language' },
            ].map((l) => (
              <div key={l.l} className="card2 p-5 text-center hover-gold">
                <div className="text-[2rem] mb-2">{l.f}</div>
                <h3 className="font-display text-[0.95rem] font-bold text-white mb-1">{l.l}</h3>
                <p className="text-[0.76rem] text-[#7A8A9F]">{l.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
