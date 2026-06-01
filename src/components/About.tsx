export default function About() {
  return (
    <section id="about" className="max-w-[1120px] mx-auto px-5 md:px-10 py-20">
      <div className="sec-tag mb-3"><span>About Me</span></div>
      <div className="grid md:grid-cols-[1.25fr_1fr] gap-14 items-start">
        <div>
          <h2 className="font-display font-extrabold text-white leading-[1.08] mb-3"
            style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
            From <span style={{ color: '#9B72FF' }}>Frontend Pixels</span><br />to <span style={{ color: '#00D4AA' }}>Full-Stack Systems</span>
          </h2>
          <p className="text-[0.9rem] text-[#7A8A9F] leading-[1.9] mb-4">
            I'm a <strong className="text-[#EDF2F7]">B.Tech Computer Science graduate (2022–2026)</strong> from
            <strong className="text-[#EDF2F7]"> Meerut Institute of Technology</strong>. I completed a
            <strong className="text-[#EDF2F7]"> 12-week Frontend Developer internship at RAYGAIN Technologies</strong> (Jan–Mar 2026),
            building production UIs with React, integrating APIs, and collaborating with the dev team.
          </p>
          <p className="text-[0.9rem] text-[#7A8A9F] leading-[1.9] mb-4">
            Now I'm <strong className="text-[#EDF2F7]">expanding into Backend Development</strong> —
            learning Node.js, Express, databases (SQL + NoSQL), REST/GraphQL APIs, authentication, and deployment.
            My goal: becoming a <strong className="text-[#EDF2F7]">full-stack Software Engineer</strong> who can build complete, scalable products.
          </p>
          <p className="text-[0.9rem] text-[#7A8A9F] leading-[1.9] mb-4">
            I bring clean UI sense from frontend work, strong problem-solving from competitive coding, and
            a <strong className="text-[#EDF2F7]">growth mindset</strong> that has me shipping new skills every week.
          </p>

          <div className="grid grid-cols-2 gap-2 mt-6">
            {[
              { i: '⚛️', h: 'React Engineer', p: 'Components, hooks, state, routing' },
              { i: '🎨', h: 'UI/UX Sense', p: 'Clean, responsive, accessible designs' },
              { i: '🔗', h: 'API Integration', p: 'REST, Fetch, async/await patterns' },
              { i: '🗄️', h: 'Backend Learner', p: 'Node.js, Express, DBs, APIs' },
            ].map((c) => (
              <div key={c.h} className="card2 p-4 hover-gold">
                <div className="text-[1.15rem] mb-1">{c.i}</div>
                <h4 className="text-[0.8rem] font-bold text-white mb-1">{c.h}</h4>
                <p className="text-[0.7rem] text-[#7A8A9F] leading-[1.5]">{c.p}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {/* Profile photo card */}
          <div className="card overflow-hidden relative">
            <img src="/profile.jpg" alt="Tushar Chandel" className="w-full h-[280px] object-cover" style={{ objectPosition: 'center 25%' }} />
            <div className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: 'linear-gradient(90deg,#FF9933,#FFFFFF,#138808,#9B72FF,#00D4AA,#F5C842)' }}></div>
            <div className="absolute bottom-0 left-0 right-0 h-20"
              style={{ background: 'linear-gradient(180deg,transparent,#0F151C)' }}></div>
            <div className="absolute bottom-3 left-4 right-4">
              <div className="font-display text-[1rem] font-extrabold text-white drop-shadow-lg">Tushar Chandel</div>
              <div className="text-[0.68rem] font-semibold tracking-widest uppercase drop-shadow" style={{ color: '#9B72FF' }}>
                Software Engineer · B.Tech CSE
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-6"
            style={{ background: 'linear-gradient(135deg,#0F151C,#131A22)', border: '1px solid rgba(155,114,255,.18)' }}>
            <h3 className="font-display text-[1rem] font-bold mb-3" style={{ color: '#9B72FF' }}>🎯 Why Hire Me as a Software Engineer</h3>
            <ul className="flex flex-col gap-2 list-none p-0">
              {[
                '<strong>12-week production internship</strong> at RAYGAIN Technologies',
                '<strong>React + JavaScript</strong> — built responsive UIs & integrated APIs',
                'Frontend developer background = clean UI/UX for backend products',
                '<strong>Backend in progress</strong> — Node.js, Express, SQL, NoSQL',
                'Git workflow, code review, and agile team experience',
                'Competitive coder — SQL 5★, LeetCode problem-solving',
                'B.Tech CSE foundation — data structures, algorithms, OOP',
              ].map((li, i) => (
                <li key={i} className="text-[0.78rem] text-[#7A8A9F] pl-4 relative leading-[1.7]">
                  <span className="absolute left-0" style={{ color: '#9B72FF' }}>▸</span>
                  <span dangerouslySetInnerHTML={{ __html: li }}></span>
                </li>
              ))}
            </ul>
          </div>

          {[
            { i: '📧', l: 'Email', v: 'sc970557@gmail.com', href: 'mailto:sc970557@gmail.com' },
            { i: '📞', l: 'Phone', v: '7505873300', href: 'tel:7505873300' },
            { i: '📍', l: 'Location', v: 'Meerut, IN · Open to Remote', href: null },
            { i: '🎓', l: 'Education', v: 'B.Tech CSE · MIT Meerut · 2022–2026', href: null },
          ].map((c) => (
            <div key={c.l} className="flex items-center gap-3 card2 p-3">
              <span className="text-[0.95rem]">{c.i}</span>
              <div className="flex-1">
                <span className="font-mono text-[0.56rem] text-[#5A6880] uppercase tracking-widest block">{c.l}</span>
                {c.href ? (
                  <a href={c.href} className="text-[0.78rem] text-[#EDF2F7] hover:text-[#9B72FF]">{c.v}</a>
                ) : (
                  <span className="text-[0.78rem] text-[#EDF2F7]">{c.v}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
