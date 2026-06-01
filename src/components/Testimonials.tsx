export default function Testimonials() {
  const quotes = [
    {
      quote: 'Tushar demonstrated strong technical skills, a keen ability to learn, and excellent problem-solving capabilities. He consistently showed initiative, maintained code quality, and met project deadlines with dedication.',
      person: 'Jaya Pandey',
      role: 'HR Manager',
      company: 'RAYGAIN Technologies Pvt. Ltd.',
      color: '#F5C842',
      ico: '📄',
    },
    {
      quote: 'Tushar was actively involved in building responsive user interfaces, integrating APIs, and collaborating with the development team to deliver high-quality solutions. His commitment and positive attitude made a valuable contribution.',
      person: 'Development Team',
      role: 'Frontend Engineering Team',
      company: 'RAYGAIN Technologies · Delhi',
      color: '#9B72FF',
      ico: '💻',
    },
    {
      quote: 'A B.Tech CSE graduate with a rare combination of frontend production experience and a clear backend roadmap. Ready for SWE roles — his code quality and problem-solving stand out.',
      person: 'Academic Review',
      role: 'Capstone Evaluator',
      company: 'Meerut Institute of Technology',
      color: '#00D4AA',
      ico: '🎓',
    },
  ];

  return (
    <section className="py-20 border-y border-[#1A2333]" style={{ background: '#080C10' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="sec-tag mb-3 justify-center"><span style={{ margin: 'auto' }}>Proof of Work</span></div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            What the <span style={{ color: '#9B72FF' }}>Evidence Says</span>
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[560px] mx-auto mt-3 leading-[1.85]">
            Verbatim excerpts from the RAYGAIN internship certificate and academic evaluations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <div key={i} className="card2 p-6 hover-gold relative overflow-hidden">
              <div className="text-[2.5rem] leading-none mb-3 opacity-30" style={{ color: q.color, fontFamily: 'Georgia, serif' }}>"</div>
              <p className="text-[0.82rem] text-[#EDF2F7] italic leading-[1.85] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                {q.quote}
              </p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #1A2333' }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-[1.1rem] flex-shrink-0"
                  style={{ background: `${q.color}14`, border: `1px solid ${q.color}33` }}>{q.ico}</div>
                <div>
                  <div className="font-display text-[0.85rem] font-bold text-white">{q.person}</div>
                  <div className="font-mono text-[0.65rem]" style={{ color: q.color }}>{q.role}</div>
                  <div className="font-mono text-[0.6rem] text-[#5A6880]">{q.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-10 md:p-14 rounded-2xl text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(155,114,255,.1), rgba(0,212,170,.06))', border: '1px solid rgba(155,114,255,.25)' }}>
          <div className="absolute -top-20 left-1/4 w-80 h-80 rounded-full opacity-20"
            style={{ background: '#9B72FF', filter: 'blur(80px)' }}></div>
          <div className="text-[2.5rem] mb-4 relative">💻 🚀 📦</div>
          <h3 className="font-display font-extrabold text-white leading-[1.2] mb-4 relative"
            style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
            Frontend Developer with <span style={{ color: '#9B72FF' }}>Full-Stack Vision</span>
          </h3>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[560px] mx-auto mb-7 leading-[1.9] relative">
            I've shipped production UIs at RAYGAIN, I've built complete full-stack projects academically, and I'm learning backend every week.
            <br />If you need someone who can build great UI AND understand what's under the hood — I'm that engineer.
          </p>
          <div className="flex flex-wrap justify-center gap-3 relative">
            <a href="mailto:sc970557@gmail.com" className="btn-primary" style={{ padding: '14px 28px' }}>📩 Email Me Directly</a>
            <a href="https://www.linkedin.com/in/tushar-chandel-68b917247/" target="_blank" rel="noreferrer"
              className="btn-sec" style={{ padding: '13px 26px' }}>💼 Connect on LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
