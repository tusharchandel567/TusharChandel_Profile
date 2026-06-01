import { useState } from 'react';

export default function OfferLetter() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="offer" className="py-20 border-y border-[#1A2333]" style={{ background: '#080C10' }}>
      <div className="max-w-[1120px] mx-auto px-5 md:px-10">
        <div className="sec-tag mb-3"><span>Proof of Experience</span></div>
        <h2 className="font-display font-extrabold text-white leading-[1.08] mb-2" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
          Frontend Developer <span className="gold">Internship</span>
        </h2>
        <p className="text-[0.86rem] text-[#7A8A9F] leading-[1.85] max-w-[520px] mb-10">
          Offer letter & certificate of completion from RAYGAIN Technologies Pvt. Ltd. — 12-week internship as Frontend Developer.
        </p>

        <div className="grid md:grid-cols-[1fr_340px] gap-6 items-start">
          {/* Letter Card */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-2xl" style={{ border: '1px solid #1A2333' }}>
              <div className="offer-letter" style={{ color: '#111' }}>
                {/* Header */}
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-300">
                  <div>
                    <div className="text-2xl font-extrabold tracking-wider" style={{ fontFamily: 'Arial Black, sans-serif', color: '#111' }}>
                      RAYGAIN
                    </div>
                    <div className="text-[0.72rem] text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                      Business Ideas into Reality
                    </div>
                  </div>
                  <div className="text-right text-[0.7rem] text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
                    <div>CIN : U72900DL2010PTC197829</div>
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex justify-between items-center text-[0.75rem] mb-8 text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
                  <div><strong>Letter No:</strong> HR/Training/15/01/26</div>
                  <div><strong>Date:</strong> 15 January, 2026</div>
                </div>

                {/* Title */}
                <div className="text-center mb-6">
                  <div className="inline-block text-[0.95rem] font-bold border-b-2 border-gray-800 pb-1" style={{ fontFamily: 'Georgia, serif', color: '#111' }}>
                    TO WHOMSOEVER IT MAY CONCERN
                  </div>
                </div>

                {/* Body */}
                <div className="text-[0.82rem] leading-[1.8] text-gray-800 space-y-4" style={{ fontFamily: 'Georgia, serif' }}>
                  <p>
                    This is to certify that <strong>Mr. Tushar Chandel</strong>, student of Meerut Institute of
                    Technology, Meerut has successfully completed his internship in the capacity of
                    &ldquo;<strong>Intern as Frontend Developer</strong>&rdquo;.
                  </p>
                  <p>
                    The internship was for a period of <strong>12 weeks, from 1st January, 2026 to 25th March,
                    2026</strong>, during which Tushar worked on real-time frontend development projects using
                    modern web technologies. He was actively involved in building responsive user interfaces,
                    integrating APIs, and collaborating with the development team to deliver high-quality solutions.
                  </p>
                  <p>
                    During his tenure, Tushar demonstrated <strong>strong technical skills</strong>, a keen ability to learn,
                    and excellent problem-solving capabilities. He consistently showed initiative, maintained
                    code quality, and met project deadlines with dedication. His commitment, professionalism,
                    and positive attitude made a valuable contribution to the success of the projects.
                  </p>
                  <p>
                    We wish him a bright future. This certificate acknowledges Tushar&rsquo;s noteworthy work,
                    signifying the successful culmination of the comprehensive Frontend development project.
                  </p>
                </div>

                {/* Signature */}
                <div className="flex justify-between items-end mt-10 pt-4">
                  <div>
                    <div className="text-[0.8rem] text-gray-800 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                      <strong>HR Manager</strong>
                    </div>
                    <div className="text-[0.8rem] text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
                      <strong>Jaya Pandey</strong>
                    </div>
                  </div>
                  <div className="flex items-end gap-3">
                    {/* Seal */}
                    <div className="w-24 h-24 rounded-full border-2 border-blue-700 flex items-center justify-center text-center text-[0.55rem] font-bold text-blue-800"
                      style={{ fontFamily: 'Arial, sans-serif', transform: 'rotate(-8deg)' }}>
                      <div>
                        <div style={{ lineHeight: 1.3 }}>
                          RAYGAN<br />TECHNOLOGIES<br />PVT. LTD.<br />
                          <span className="text-yellow-600">★</span><br />
                          DELHI
                        </div>
                      </div>
                    </div>
                    {/* Signature */}
                    <div className="text-[1.6rem] text-blue-700 italic font-light" style={{ fontFamily: 'cursive, Brush Script MT', transform: 'rotate(-4deg)' }}>
                      Jaya
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-3 border-t border-gray-300 text-center text-[0.72rem] font-bold text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
                  RAYGAIN TECHNOLOGIES PVT. LTD.
                </div>
                <div className="mt-1 text-center text-[0.68rem] text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                  CIN : U72900DL2010PTC197829
                </div>
                <div className="mt-1 text-center text-[0.65rem] text-gray-600 italic" style={{ fontFamily: 'Georgia, serif' }}>
                  B/3/17 LGF Safdarjung Enclave New Delhi 110029 &nbsp;|&nbsp; PHONE : +91-11-40452150 &nbsp;|&nbsp; E-MAIL : INFO@RAYGAIN.COM
                </div>
              </div>
            </div>

            {/* Expand hint */}
            {!expanded && (
              <button onClick={() => setExpanded(true)}
                className="mt-4 mx-auto block text-[0.72rem] font-mono text-[#7A8A9F] hover:text-[#F5C842] tracking-widest uppercase">
                ↓ Click to see full details and key highlights ↓
              </button>
            )}
          </div>

          {/* Side info */}
          <div className="space-y-3">
            <div className="card2 p-5 hover-gold">
              <div className="text-[1.3rem] mb-2">📄</div>
              <h3 className="font-display text-[0.95rem] font-extrabold text-white mb-2">Internship Certificate</h3>
              <p className="text-[0.78rem] text-[#7A8A9F] leading-[1.7] mb-3">
                Official certificate of completion from RAYGAIN Technologies — Delhi, India.
              </p>
              <div className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest mb-1">Certificate No.</div>
              <div className="font-mono text-[0.75rem] text-[#F5C842] mb-3">HR/Training/15/01/26</div>
              <a href="#" className="btn-primary text-[0.75rem] w-full justify-center">📥 Download PDF</a>
            </div>

            <div className="card2 p-5 hover-gold">
              <div className="text-[1.2rem] mb-2">💼</div>
              <h3 className="font-display text-[0.9rem] font-extrabold text-white mb-3">Key Takeaways</h3>
              <ul className="space-y-2 text-[0.75rem] text-[#7A8A9F]">
                <li className="pl-3 relative"><span className="absolute left-0 text-[#F5C842]">▸</span> 12 weeks of hands-on React & JS development</li>
                <li className="pl-3 relative"><span className="absolute left-0 text-[#F5C842]">▸</span> Built responsive UIs integrated with REST APIs</li>
                <li className="pl-3 relative"><span className="absolute left-0 text-[#F5C842]">▸</span> Git workflow & team collaboration</li>
                <li className="pl-3 relative"><span className="absolute left-0 text-[#F5C842]">▸</span> Exposed to data-driven product teams</li>
              </ul>
            </div>

            <div className="rounded-xl p-5 text-center"
              style={{ background: 'rgba(245,200,66,.06)', border: '1px solid rgba(245,200,66,.2)' }}>
              <div className="text-[1.1rem] mb-1">🎯</div>
              <div className="font-mono text-[0.6rem] text-[#F5C842] uppercase tracking-widest mb-1">Career Switch</div>
              <div className="text-[0.78rem] text-[#EDF2F7] leading-[1.6]">
                From Frontend Developer to <strong className="text-[#F5C842]">Data Analyst</strong> — combining UI sense with SQL & BI tools.
              </div>
            </div>
          </div>
        </div>

        {/* Scoring platforms */}
        <div className="mt-14">
          <div className="sec-tag mb-3"><span>Competitive Scores</span></div>
          <h2 className="font-display font-extrabold text-white leading-[1.08] mb-2" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
            Proven on <span className="gold">Platforms</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-4 mt-6">
            {[
              { ico: '🎯', h4: 'HackerRank', p: 'SQL & Problem Solving', rows: [['SQL', '⭐⭐⭐⭐⭐ 5 Stars', 'gold'], ['Problem Solving', 'Gold Badge', 'green'], ['Python', 'Certified', 'gold']], width: '92%' },
              { ico: '💡', h4: 'LeetCode', p: 'Database / SQL', rows: [['Database Problems', '50+ Solved', 'gold'], ['Medium SQL', 'Consistent', 'green']], width: '78%' },
              { ico: '📊', h4: 'Kaggle', p: 'Notebooks & Datasets', rows: [['Rank', 'Contributor', 'blue'], ['EDA Notebooks', 'Published', 'gold']], width: '60%' },
              { ico: '🐍', h4: 'Microsoft', p: 'Power BI Certification', rows: [['PL-300', 'Certified', 'green'], ['Azure Fundamentals', 'AZ-900', 'gold']], width: '88%' },
            ].map((s) => (
              <div key={s.h4} className="card2 p-5 hover-gold">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[1rem]" style={{ background: '#050709', border: '1px solid #1A2333' }}>{s.ico}</div>
                  <div>
                    <h4 className="font-display text-[0.85rem] font-bold text-white">{s.h4}</h4>
                    <p className="font-mono text-[0.62rem] text-[#5A6880]">{s.p}</p>
                  </div>
                </div>
                <div className="space-y-1 mb-3">
                  {s.rows.map(([k, v, c]: any) => (
                    <div key={k} className="flex justify-between text-[0.73rem] border-b border-[#1A2333] pb-1.5">
                      <span className="text-[#7A8A9F]">{k}</span>
                      <span className="font-mono font-semibold" style={{ color: c === 'green' ? '#22D47A' : c === 'blue' ? '#4E9EFF' : '#F5C842' }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div className="h-[3px] rounded-full" style={{ background: '#1A2333' }}>
                  <div className="h-full rounded-full" style={{ width: s.width, background: 'linear-gradient(90deg,#d4a916,#F5C842)' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
