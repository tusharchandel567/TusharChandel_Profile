import { useState, useEffect } from 'react';

const levels = [
  { code: 'A1', label: 'Beginner', status: 'done', desc: 'Basic phrases, introductions' },
  { code: 'A2', label: 'Elementary', status: 'done', desc: 'Simple conversations, daily tasks' },
  { code: 'B1', label: 'Intermediate', status: 'done', desc: 'Work & study contexts' },
  { code: 'B2', label: 'Upper Intermediate', status: 'current', desc: 'Complex texts, abstract topics' },
  { code: 'C1', label: 'Advanced', status: 'upcoming', desc: 'Flexible & effective language use' },
  { code: 'C2', label: 'Mastery', status: 'upcoming', desc: 'Near-native proficiency' },
];

const phrases = [
  { de: 'Ich suche eine Stelle als Softwareentwickler.', en: 'I am looking for a position as a software developer.' },
  { de: 'Ich habe Erfahrung mit React und JavaScript.', en: 'I have experience with React and JavaScript.' },
  { de: 'Ich lerne gerade Backend-Entwicklung.', en: 'I am currently learning backend development.' },
  { de: 'Ich habe mein B.Tech in Informatik abgeschlossen.', en: 'I have completed my B.Tech in Computer Science.' },
  { de: 'Ich habe ein Praktikum als Frontend-Entwickler gemacht.', en: 'I did an internship as a frontend developer.' },
  { de: 'Ich spreche Deutsch auf dem Niveau B1.', en: 'I speak German at level B1.' },
  { de: 'Ich arbeite an meinem Goethe-B2-Zertifikat.', en: 'I am working on my Goethe B2 certificate.' },
  { de: 'Ich bin bereit für eine Werkstudentenstelle in Deutschland.', en: 'I am ready for a working student position in Germany.' },
];

export default function GermanLearning() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % phrases.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="german" className="relative py-20 overflow-hidden border-y border-[#1A2333]"
      style={{ background: '#050709' }}>
      {/* Big Germany flag background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-1/3" style={{ background: '#000000' }}></div>
        <div className="absolute top-1/3 left-0 right-0 h-1/3" style={{ background: '#DD0000' }}></div>
        <div className="absolute top-2/3 left-0 right-0 h-1/3" style={{ background: '#FFCE00' }}></div>
      </div>

      {/* Floating blinking mini flags */}
      <div className="absolute pointer-events-none" style={{ top: '10%', left: '5%', width: '80px', height: '55px', animation: 'flagFloat 7s ease-in-out infinite alternate, flagBlink 2.5s ease-in-out infinite', zIndex: 1 }}>
        <div className="w-full h-full rounded shadow-lg"><div className="w-full h-1/3" style={{ background: '#000' }}></div><div className="w-full h-1/3" style={{ background: '#DD0000' }}></div><div className="w-full h-1/3" style={{ background: '#FFCE00' }}></div></div>
      </div>
      <div className="absolute pointer-events-none" style={{ bottom: '12%', right: '8%', width: '90px', height: '60px', animation: 'flagFloat2 8s ease-in-out infinite alternate, flagBlink 3s ease-in-out infinite 1s', zIndex: 1 }}>
        <div className="w-full h-full rounded shadow-lg"><div className="w-full h-1/3" style={{ background: '#FF9933' }}></div><div className="w-full h-1/3" style={{ background: '#FFFFFF' }}></div><div className="w-full h-1/3" style={{ background: '#138808' }}></div></div>
      </div>
      <div className="absolute pointer-events-none" style={{ top: '60%', left: '3%', width: '60px', height: '40px', animation: 'flagFloat 6s ease-in-out infinite alternate-reverse, flagBlink 2.2s ease-in-out infinite .8s', zIndex: 1 }}>
        <div className="w-full h-full rounded"><div className="w-full h-1/3" style={{ background: '#000' }}></div><div className="w-full h-1/3" style={{ background: '#DD0000' }}></div><div className="w-full h-1/3" style={{ background: '#FFCE00' }}></div></div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full"
            style={{ background: 'rgba(255,206,0,.12)', border: '1px solid rgba(255,206,0,.35)', animation: 'flagBlink 2s ease-in-out infinite' }}>
            <span className="text-[1.1rem]">🇩🇪</span>
            <span className="font-mono text-[0.7rem] font-bold uppercase tracking-widest" style={{ color: '#FFCE00' }}>
              Deutsch Lernen · German Language Journey
            </span>
            <span className="w-2 h-2 rounded-full bg-[#FFCE00] pulse-dot"></span>
          </div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Goethe <span style={{ color: '#FFCE00' }}>B2</span> — Im Lernen
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
            Preparing for the Goethe B2 German certificate to unlock Werkstudent and full-time Software Engineering opportunities in Germany.
          </p>
        </div>

        {/* CEFR Levels */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-10">
          {levels.map((lv) => {
            const color = lv.status === 'done' ? '#22D47A' : lv.status === 'current' ? '#FFCE00' : '#3a4a5e';
            const bg = lv.status === 'done' ? 'rgba(34,212,122,.1)' : lv.status === 'current' ? 'rgba(255,206,0,.12)' : 'rgba(40,50,65,.4)';
            return (
              <div key={lv.code} className="card2 p-4 text-center relative" style={{ borderColor: lv.status === 'current' ? 'rgba(255,206,0,.4)' : '#1A2333' }}>
                {lv.status === 'current' && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#FFCE00] pulse-dot"></div>
                )}
                <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center font-display font-extrabold text-lg mb-2"
                  style={{ background: bg, border: `2px solid ${color}`, color }}>
                  {lv.code}
                </div>
                <div className="text-[0.8rem] font-bold text-[#EDF2F7] mb-1">{lv.label}</div>
                <div className="font-mono text-[0.58rem] text-[#7A8A9F]">{lv.desc}</div>
                <div className="font-mono text-[0.55rem] mt-2 uppercase tracking-widest" style={{ color }}>
                  {lv.status === 'done' ? '✓ Abgeschlossen' : lv.status === 'current' ? '⚡ Aktuell' : '⏳ Kommend'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="card2 p-6 mb-10">
          <div className="flex justify-between items-center mb-3">
            <span className="font-display text-[0.95rem] font-bold text-white">Overall Progress</span>
            <span className="font-mono text-[0.8rem] font-bold" style={{ color: '#FFCE00' }}>60% — B2 in Progress</span>
          </div>
          <div className="h-4 rounded-full overflow-hidden" style={{ background: '#1A2333' }}>
            <div className="h-full rounded-full flex" style={{ width: '60%' }}>
              <div className="h-full" style={{ flex: '3 1 0%', background: '#22D47A' }}></div>
              <div className="h-full" style={{ flex: '2 1 0%', background: 'linear-gradient(90deg,#22D47A,#FFCE00)', animation: 'flagBlink 1.5s ease-in-out infinite' }}></div>
              <div className="h-full" style={{ flex: '1 1 0%', background: '#FFCE00' }}></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 font-mono text-[0.55rem] text-[#5A6880] uppercase tracking-widest">
            <span>A1</span><span>A2</span><span>B1</span><span style={{ color: '#FFCE00' }}>B2 (Lernen)</span><span>C1</span><span>C2</span>
          </div>
        </div>

        {/* Rotating German phrases */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card2 p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg,#000,#DD0000,#FFCE00)' }}></div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[1.1rem]">🇩🇪</span>
              <h3 className="font-display text-[0.95rem] font-extrabold text-white">Wichtige Sätze · Key Phrases</h3>
            </div>
            <div className="p-5 rounded-lg min-h-[180px] flex flex-col justify-center"
              style={{ background: '#0C1117', border: '1px solid rgba(255,206,0,.2)' }}>
              <div className="font-mono text-[0.6rem] uppercase tracking-widest mb-2" style={{ color: '#FFCE00' }}>🇩🇪 Deutsch</div>
              <div className="font-display text-[1.1rem] font-bold text-[#EDF2F7] leading-[1.5] mb-3" style={{ minHeight: '50px' }}>
                {phrases[idx].de}
              </div>
              <div className="font-mono text-[0.6rem] uppercase tracking-widest mb-2" style={{ color: '#FF9933' }}>🇮🇳 English</div>
              <div className="text-[0.85rem] text-[#7A8A9F] leading-[1.5]" style={{ minHeight: '40px' }}>
                {phrases[idx].en}
              </div>
            </div>
            <div className="flex justify-center gap-1.5 mt-3">
              {phrases.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ background: i === idx ? '#FFCE00' : '#1F2D3D', transform: i === idx ? 'scale(1.5)' : 'scale(1)' }}></button>
              ))}
            </div>
          </div>

          <div className="card2 p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg,#FF9933,#FFFFFF,#138808)' }}></div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[1.1rem]">🎯</span>
              <h3 className="font-display text-[0.95rem] font-extrabold text-white">Lernplan · Learning Plan</h3>
            </div>
            <div className="space-y-3">
              {[
                { t: 'Goethe B2 Zertifikat', d: 'Grammatik, Wortschatz, Hören, Sprechen, Lesen, Schreiben', p: '55%', c: '#FFCE00' },
                { t: 'Werkstudent Bewerbungen', d: 'Anschreiben, Lebenslauf, Vorstellungsgespräch', p: '40%', c: '#9B72FF' },
                { t: 'Technisches Deutsch', d: 'Fachbegriffe für Softwareentwicklung', p: '30%', c: '#00D4AA' },
                { t: 'Deutsche Kultur', d: 'Arbeitskultur, Geschäftsetikette, Kommunikation', p: '25%', c: '#FF9933' },
              ].map((item) => (
                <div key={item.t}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[0.78rem] font-bold text-[#EDF2F7]">{item.t}</span>
                    <span className="font-mono text-[0.7rem] font-bold" style={{ color: item.c }}>{item.p}</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ background: '#1A2333' }}>
                    <div className="h-full rounded-full" style={{ width: item.p, background: item.c, animation: 'flagBlink 3s ease-in-out infinite' }}></div>
                  </div>
                  <div className="font-mono text-[0.6rem] text-[#5A6880] mt-1">{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Big CTA */}
        <div className="mt-10 p-8 md:p-10 rounded-2xl text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(255,206,0,.1), rgba(255,153,51,.06))', border: '1px solid rgba(255,206,0,.3)' }}>
          <div className="absolute -top-20 left-1/3 w-60 h-60 rounded-full opacity-20 pointer-events-none" style={{ background: '#FFCE00', filter: 'blur(60px)' }}></div>
          <div className="text-[2.5rem] mb-3 relative">🇩🇪 🇮🇳 🚀</div>
          <h3 className="font-display font-extrabold text-white leading-[1.2] mb-3 relative" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>
            Bereit für Deutschland — <span style={{ color: '#FFCE00' }}>Goethe B2 Kommt</span>
          </h3>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[560px] mx-auto mb-6 leading-[1.9] relative">
            From Meerut to München — actively preparing for German language certification and Werkstudent roles in Germany.
            Frontend production experience + backend learning + German B2 = a complete package for German tech teams.
          </p>
          <div className="flex flex-wrap justify-center gap-3 relative">
            <a href="#contact" className="btn-primary" style={{ padding: '14px 28px', background: '#FFCE00' }}>
              📩 Kontakt Aufnehmen
            </a>
            <a href="https://www.goethe.de/" target="_blank" rel="noreferrer" className="btn-sec" style={{ padding: '13px 26px' }}>
              📚 Über Goethe-Institut
            </a>
          </div>
        </div>
      </div>

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
          50% { opacity: 0.6; filter: brightness(1.4); }
        }
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,206,0,.6); }
          50% { box-shadow: 0 0 0 8px rgba(255,206,0,0); }
        }
      `}</style>
    </section>
  );
}
