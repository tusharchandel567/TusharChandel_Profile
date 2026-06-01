export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 px-5 md:px-10">
      <div className="absolute inset-0 hero-grid-bg"></div>

      {/* ═══════════════════════════════════════════
          BIG FLOATING BLINKING FLAGS
         ═══════════════════════════════════════════ */}
      {/* INDIA FLAG — large, floating, blinking */}
      <div className="absolute pointer-events-none"
        style={{
          top: '18%', left: '-4%', width: '220px', height: '150px',
          animation: 'flagFloat 8s ease-in-out infinite alternate, flagBlink 2.5s ease-in-out infinite',
          zIndex: 2,
        }}>
        <div className="w-full h-full rounded-lg shadow-2xl" style={{
          boxShadow: '0 0 40px rgba(255,153,51,.5), 0 0 80px rgba(19,136,8,.3)',
        }}>
          <div className="w-full h-1/3" style={{ background: '#FF9933' }}></div>
          <div className="w-full h-1/3 flex items-center justify-center relative" style={{ background: '#FFFFFF' }}>
            {/* Ashoka Chakra */}
            <div className="relative" style={{ width: '40px', height: '40px' }}>
              <div className="absolute inset-0 rounded-full" style={{ border: '2px solid #000080' }}></div>
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="absolute top-1/2 left-1/2 w-px h-4"
                  style={{ background: '#000080', transformOrigin: '0 0', transform: `rotate(${i * 15}deg) translateY(-8px)` }}></div>
              ))}
              <div className="absolute inset-0 rounded-full" style={{ border: '1px solid #000080', top: '3px', left: '3px', right: '3px', bottom: '3px' }}></div>
            </div>
          </div>
          <div className="w-full h-1/3" style={{ background: '#138808' }}></div>
        </div>
        <div className="text-center mt-2 font-mono text-[0.7rem] font-bold" style={{ color: '#FF9933', textShadow: '0 0 10px rgba(255,153,51,.8)' }}>
          🇮🇳 INDIA
        </div>
      </div>

      {/* GERMANY FLAG — large, floating, blinking */}
      <div className="absolute pointer-events-none"
        style={{
          top: '15%', right: '-2%', width: '220px', height: '150px',
          animation: 'flagFloat2 9s ease-in-out infinite alternate, flagBlink 3s ease-in-out infinite .5s',
          zIndex: 2,
        }}>
        <div className="w-full h-full rounded-lg shadow-2xl" style={{
          boxShadow: '0 0 40px rgba(253,208,0,.5), 0 0 80px rgba(221,0,0,.3)',
        }}>
          <div className="w-full h-1/3" style={{ background: '#000000' }}></div>
          <div className="w-full h-1/3" style={{ background: '#DD0000' }}></div>
          <div className="w-full h-1/3" style={{ background: '#FFCE00' }}></div>
        </div>
        <div className="text-center mt-2 font-mono text-[0.7rem] font-bold" style={{ color: '#FFCE00', textShadow: '0 0 10px rgba(255,206,0,.8)' }}>
          🇩🇪 GERMANY
        </div>
      </div>

      {/* Small blinking flag — India bottom left */}
      <div className="absolute pointer-events-none"
        style={{
          bottom: '10%', left: '8%', width: '100px', height: '68px',
          animation: 'flagFloat 7s ease-in-out infinite alternate-reverse, flagBlink 2s ease-in-out infinite 1s',
          zIndex: 2,
        }}>
        <div className="w-full h-full rounded shadow-xl">
          <div className="w-full h-1/3" style={{ background: '#FF9933' }}></div>
          <div className="w-full h-1/3" style={{ background: '#FFFFFF' }}></div>
          <div className="w-full h-1/3" style={{ background: '#138808' }}></div>
        </div>
      </div>

      {/* Small blinking flag — Germany bottom right */}
      <div className="absolute pointer-events-none"
        style={{
          bottom: '8%', right: '12%', width: '110px', height: '75px',
          animation: 'flagFloat2 7.5s ease-in-out infinite alternate, flagBlink 2.2s ease-in-out infinite 1.5s',
          zIndex: 2,
        }}>
        <div className="w-full h-full rounded shadow-xl">
          <div className="w-full h-1/3" style={{ background: '#000000' }}></div>
          <div className="w-full h-1/3" style={{ background: '#DD0000' }}></div>
          <div className="w-full h-1/3" style={{ background: '#FFCE00' }}></div>
        </div>
      </div>

      {/* Radial glows */}
      <div className="absolute -top-48 -right-20 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(155,114,255,.08) 0%,transparent 65%)', animation: 'rgbShift 6s ease-in-out infinite' }}></div>
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(0,212,170,.06) 0%,transparent 65%)', animation: 'rgbShift2 7s ease-in-out infinite' }}></div>

      {/* ═══════════════════════════════════════════
          MAIN CONTENT
         ═══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1120px] mx-auto grid md:grid-cols-[1fr_400px] gap-12 items-center">
        <div>
          {/* B2 German Banner */}
          <div className="inline-flex items-center gap-3 mb-5 px-4 py-2 rounded-full"
            style={{ background: 'rgba(255,206,0,.12)', border: '1px solid rgba(255,206,0,.35)', animation: 'flagBlink 2s ease-in-out infinite' }}>
            <span className="text-[1.1rem]">🇩🇪</span>
            <span className="font-mono text-[0.72rem] font-bold" style={{ color: '#FFCE00', letterSpacing: '.06em' }}>
              GOETHE B2 ZERTIFIKAT — IN PROGRESS
            </span>
            <span className="w-2 h-2 rounded-full bg-[#FFCE00] pulse-dot"></span>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-widest uppercase mb-3"
            style={{ background: 'rgba(155,114,255,.1)', border: '1px solid rgba(155,114,255,.2)', padding: '6px 14px', borderRadius: 99, color: '#9B72FF' }}>
            💻 Software Engineer · Frontend Dev · Learning Backend
          </div>

          <h1 className="font-display font-extrabold text-white leading-[1.03] mb-3"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 4.4rem)', letterSpacing: '-0.03em' }}>
            Building <span style={{ color: '#FF9933' }}>Pixel-Perfect</span><br />
            <span style={{ color: '#9B72FF' }}>Software</span> That <span style={{ color: '#FFCE00' }}>Scales</span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="role-chip active">Frontend Developer</span>
            <span className="role-chip active">React Engineer</span>
            <span className="role-chip active">Software Engineer</span>
            <span className="role-chip learning">→ Learning: Backend (Node.js)</span>
            <span className="role-chip">B.Tech CSE · 2022–2026</span>
            <span className="role-chip" style={{ background: 'rgba(255,206,0,.1)', borderColor: 'rgba(255,206,0,.3)', color: '#FFCE00' }}>🇩🇪 Deutsch B2</span>
          </div>

          <p className="text-[0.9rem] text-[#7A8A9F] leading-[1.85] max-w-[520px] mb-8">
            <strong className="text-[#EDF2F7]">B.Tech Computer Science graduate (2022–2026)</strong> from Meerut Institute of Technology.
            <strong className="text-[#EDF2F7]"> Frontend Developer</strong> at RAYGAIN Technologies — built production UIs with React.
            Now <strong className="text-[#EDF2F7]">expanding into Backend</strong> and preparing
            <strong className="text-[#EDF2F7]"> Goethe B2 German</strong> for opportunities in 🇩🇪 Germany & 🇮🇳 India.
          </p>

          <div className="flex flex-wrap gap-3 mb-7">
            <a href="https://drive.google.com/file/d/1YnTtZz-gOIpT8y5WOL6htbC6g_OzGs-V/view" target="_blank" className="btn-primary">📄 View Resume</a>
            <a href="#frontend-projects" className="btn-sec">💻 See Projects</a>
            <a href="#offer" className="btn-sec">📄 Offer Letter</a>
            <a href="#contact" className="btn-sec">✉️ Hire Me</a>
          </div>

          <div className="flex flex-wrap gap-2">
            <a className="sico" href="https://www.linkedin.com/in/tushar-chandel-68b917247/" target="_blank">💼 LinkedIn</a>
            <a className="sico" href="https://github.com/tusharchandel567" target="_blank">🐙 GitHub</a>
            <a className="sico" href="mailto:sc970557@gmail.com">📧 Email</a>
          </div>
        </div>

        {/* Right card */}
        <div className="card overflow-hidden flex flex-col relative">
          <div className="relative">
            <img src="/profile.jpg" alt="Tushar Chandel" className="w-full h-[340px] object-cover" style={{ objectPosition: 'center 25%' }} />
            {/* Germany flag ring effect */}
            <div className="absolute top-0 left-0 right-0 h-[5px]"
              style={{ background: 'linear-gradient(90deg,#000 0%,#000 33%,#DD0000 33%,#DD0000 66%,#FFCE00 66%,#FFCE00 100%)' }}></div>
            {/* India flag stripe */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px]"
              style={{ background: 'linear-gradient(90deg,#FF9933,#FFFFFF,#138808)' }}></div>
            <div className="absolute bottom-0 left-0 right-0 h-24"
              style={{ background: 'linear-gradient(180deg,transparent,#0F151C)' }}></div>
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
              <div>
                <div className="font-display text-[1.1rem] font-extrabold text-white drop-shadow-lg">Tushar Chandel</div>
                <div className="text-[0.65rem] font-semibold tracking-widest uppercase drop-shadow" style={{ color: '#9B72FF' }}>
                  Software Engineer · Frontend Dev
                </div>
              </div>
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-[#22D47A] pulse-dot"></div>
              </div>
            </div>
            {/* B2 badge on photo */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full font-mono text-[0.6rem] font-bold"
              style={{ background: 'rgba(255,206,0,.95)', color: '#000', animation: 'flagBlink 2s ease-in-out infinite' }}>
              🇩🇪 B2
            </div>
          </div>

          <div className="p-5 flex flex-col gap-4">
            <div className="text-[0.66rem] text-[#7A8A9F] flex items-center gap-1">
              📍 Meerut, IN · <span className="font-semibold" style={{ color: '#FFCE00' }}>Open to Germany 🇩🇪</span>
            </div>

            <div className="card2 p-4">
              <div className="font-mono text-[0.62rem] text-[#5A6880] tracking-widest uppercase mb-3">Tech Proficiency</div>
              <div className="flex items-end gap-1 h-14">
                {[
                  { h: '95%', d: '.1s' }, { h: '92%', d: '.2s' }, { h: '90%', d: '.3s' },
                  { h: '88%', d: '.4s' }, { h: '85%', d: '.5s' }, { h: '60%', d: '.6s', teal: true }, { h: '45%', d: '.7s', teal: true },
                ].map((b, i) => (
                  <div key={i} className="flex-1 rounded-t bar-anim" style={{
                    height: b.h, animationDelay: b.d,
                    background: b.teal ? 'linear-gradient(180deg,#00D4AA,rgba(0,212,170,.4))' : 'linear-gradient(180deg,#9B72FF,rgba(155,114,255,.4))'
                  }}></div>
                ))}
              </div>
              <div className="flex gap-1 mt-2">
                {['React','JS','TS','HTML','CSS','Node','DB'].map((l) => (
                  <div key={l} className="flex-1 text-center font-mono text-[0.52rem] text-[#5A6880]">{l}</div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { n: '12w', l: 'Internship' }, { n: '4+', l: 'Projects' }, { n: 'B.Tech', l: 'CSE 2026' },
              ].map((k) => (
                <div key={k.l} className="card2 text-center py-3">
                  <div className="font-display text-[1.1rem] font-extrabold" style={{ color: '#9B72FF' }}>{k.n}</div>
                  <div className="font-mono text-[0.52rem] text-[#5A6880] uppercase tracking-widest mt-1">{k.l}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1">
              {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind'].map((s) => (
                <span key={s} className="font-mono text-[0.6rem] font-medium px-3 py-1 rounded"
                  style={{ background: '#131A22', border: '1px solid rgba(155,114,255,.3)', color: '#9B72FF' }}>{s}</span>
              ))}
              {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git'].map((s) => (
                <span key={s} className="font-mono text-[0.6rem] font-medium px-3 py-1 rounded"
                  style={{ background: '#131A22', border: '1px solid rgba(0,212,170,.25)', color: '#00D4AA' }}>{s}</span>
              ))}
            </div>

            <div className="flex items-center gap-2 px-4 py-3 rounded-lg"
              style={{ background: 'rgba(255,206,0,.1)', border: '1px solid rgba(255,206,0,.25)' }}>
              <div className="w-2 h-2 rounded-full bg-[#FFCE00] pulse-dot flex-shrink-0"></div>
              <span className="font-mono text-[0.72rem] font-medium" style={{ color: '#FFCE00' }}>
                🇩🇪 Goethe B2 · Learning · A2→B1 done
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          KEYFRAMES
         ═══════════════════════════════════════════ */}
      <style>{`
        @keyframes flagFloat {
          0% { transform: translate(0, 0) rotate(-3deg) scale(1); }
          50% { transform: translate(15px, -25px) rotate(2deg) scale(1.04); }
          100% { transform: translate(-10px, 15px) rotate(-2deg) scale(0.98); }
        }
        @keyframes flagFloat2 {
          0% { transform: translate(0, 0) rotate(3deg) scale(1); }
          50% { transform: translate(-15px, 25px) rotate(-2deg) scale(1.04); }
          100% { transform: translate(10px, -15px) rotate(2deg) scale(0.98); }
        }
        @keyframes flagBlink {
          0%, 100% { opacity: 1; filter: brightness(1); }
          50% { opacity: 0.65; filter: brightness(1.4); }
        }
        @keyframes rgbShift {
          0%, 100% { transform: translate(0,0) scale(1); opacity: 0.7; }
          50% { transform: translate(30px,-20px) scale(1.1); opacity: 1; }
        }
        @keyframes rgbShift2 {
          0%, 100% { transform: translate(0,0) scale(1); opacity: 0.6; }
          50% { transform: translate(-20px,25px) scale(1.15); opacity: 1; }
        }
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,206,0,.6); }
          50% { box-shadow: 0 0 0 8px rgba(255,206,0,0); }
        }
      `}</style>
    </section>
  );
}
