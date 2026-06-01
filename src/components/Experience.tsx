export default function Experience() {
  const jobs = [
    {
      title: 'Frontend Developer Intern',
      company: 'RAYGAIN Technologies Pvt. Ltd. · Delhi, India',
      date: 'Jan 2026 – Mar 2026',
      desc: 'Completed a 12-week internship as Frontend Developer. Worked on real-time frontend development projects using modern web technologies. Actively involved in building responsive user interfaces, integrating APIs, and collaborating with the development team to deliver high-quality solutions.',
      details: [
        'Built responsive user interfaces with React, HTML, CSS, and JavaScript',
        'Integrated REST APIs and handled data flow between frontend and backend',
        'Maintained clean, reusable component libraries with a focus on UX',
        'Collaborated with team using Git / GitHub and agile workflows',
        'Demonstrated strong technical skills, keen ability to learn, and excellent problem-solving',
        'Consistently met project deadlines with dedication and professionalism',
      ],
      tags: ['React', 'HTML5', 'CSS3', 'JavaScript', 'API Integration', 'Git', 'Responsive UI', 'Tailwind'],
    },
    {
      title: 'Academic Projects — Full-Stack',
      company: 'Meerut Institute of Technology · B.Tech CSE',
      date: '2023 – 2026',
      desc: 'Multiple academic projects spanning frontend, backend, and full-stack development. Built responsive web apps, integrated databases, and deployed to cloud platforms.',
      details: [
        'E-commerce product page with cart, filters, and Stripe checkout',
        'Real-time chat application with Socket.io and MongoDB',
        'Responsive portfolio website with dark mode and smooth scrolling',
        'CRUD application with Node.js, Express, and PostgreSQL',
      ],
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Socket.io', 'Stripe'],
    },
    {
      title: 'Competitive Coding & Problem Solving',
      company: 'LeetCode · HackerRank · Codeforces',
      date: '2023 – ongoing',
      desc: 'Active competitive programmer — solving data structures and algorithms problems daily to sharpen problem-solving skills.',
      details: [
        'SQL 5-Star Gold Badge on HackerRank',
        '50+ LeetCode Database problems solved',
        'Strong foundation in DSA, OOP, and system design basics',
      ],
      tags: ['DSA', 'SQL', 'Problem Solving', 'OOP', 'Algorithms'],
    },
    {
      title: 'Backend Development — Self-Study',
      company: 'Node.js · Express · Databases · APIs',
      date: '2025 – ongoing',
      desc: 'Actively learning the modern backend stack to become a full-stack Software Engineer. Building projects with Node.js, Express, databases, REST/GraphQL APIs, authentication, and Docker.',
      details: [
        'Building REST APIs with Node.js + Express',
        'Learning PostgreSQL (relational) and MongoDB (NoSQL)',
        'Authentication: JWT, OAuth, bcrypt',
        'Docker containerization and basic CI/CD',
        'Deployment on Vercel, Render, and AWS basics',
      ],
      tags: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'JWT', 'Docker', 'REST', 'GraphQL'],
    },
  ];

  return (
    <section id="experience" className="max-w-[1120px] mx-auto px-5 md:px-10 py-20">
      <div className="sec-tag mb-3"><span>Experience</span></div>
      <h2 className="font-display font-extrabold text-white leading-[1.08] mb-2" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
        Frontend → <span style={{ color: '#9B72FF' }}>Full-Stack</span> Journey
      </h2>
      <p className="text-[0.86rem] text-[#7A8A9F] leading-[1.85] max-w-[520px] mb-10">
        From RAYGAIN internship to academic projects to backend self-study — my path to becoming a complete Software Engineer.
      </p>

      <div className="relative pl-6">
        <div className="absolute left-0 top-0 bottom-0 w-[1px]"
          style={{ background: 'linear-gradient(180deg,#9B72FF 0%,#00D4AA 60%,transparent 100%)' }}></div>
        {jobs.map((job, idx) => (
          <div key={idx} className="relative mb-6 pl-6">
            <div className="absolute left-[-30px] top-4 w-[13px] h-[13px] rounded-full bg-[#050709] border-2 flex items-center justify-center tl-dot"
              style={{ borderColor: idx === 0 ? '#F5C842' : '#9B72FF' }}>
              <span className="w-[5px] h-[5px] rounded-full" style={{ background: idx === 0 ? '#F5C842' : '#9B72FF' }}></span>
            </div>
            <div className="card2 p-5 hover-gold" style={{ borderLeft: `2px solid ${idx === 0 ? '#F5C842' : '#9B72FF'}`, borderRadius: 12 }}>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <span className="font-display text-[0.95rem] font-extrabold text-white">{job.title}</span>
                <span className="font-mono text-[0.62rem] px-3 py-1 rounded-full"
                  style={{ background: 'rgba(155,114,255,.1)', color: '#9B72FF', border: '1px solid rgba(155,114,255,.22)' }}>
                  {job.date}
                </span>
              </div>
              <div className="text-[0.76rem] font-medium mb-3" style={{ color: '#F5C842' }}>{job.company}</div>
              <p className="text-[0.78rem] text-[#7A8A9F] leading-[1.75] mb-3">{job.desc}</p>
              <ul className="list-none p-0 mb-3 space-y-1.5">
                {job.details.map((d, i) => (
                  <li key={i} className="text-[0.75rem] text-[#7A8A9F] pl-3 relative leading-[1.7]">
                    <span className="absolute left-0" style={{ color: '#9B72FF' }}>▸</span>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {job.tags.map((t) => (
                  <span key={t} className="font-mono text-[0.59rem] px-2 py-1 rounded"
                    style={{ background: 'rgba(155,114,255,.08)', color: '#9B72FF', border: '1px solid rgba(155,114,255,.18)' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
