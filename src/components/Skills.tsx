const frontendSkills = [
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML5' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS3' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', name: 'Next.js' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', name: 'Sass' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', name: 'Bootstrap' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', name: 'GitHub' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', name: 'VS Code' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', name: 'Figma' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', name: 'Vite' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg', name: 'NPM' },
];

const backendSkills = [
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', name: 'Express.js' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', name: 'Nginx' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', name: 'GraphQL' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', name: 'Redis' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', name: 'AWS' },
];

const skillBars = [
  { name: 'React.js', pct: 92, color: 'main' },
  { name: 'JavaScript (ES6+)', pct: 90, color: 'main' },
  { name: 'HTML5 / CSS3 / Tailwind', pct: 95, color: 'main' },
  { name: 'TypeScript', pct: 78, color: 'main' },
  { name: 'Git / GitHub Workflow', pct: 88, color: 'main' },
  { name: 'Next.js (Learning)', pct: 65, color: 'teal' },
  { name: 'Node.js / Express (Learning)', pct: 55, color: 'teal' },
  { name: 'PostgreSQL / MongoDB (Learning)', pct: 45, color: 'teal' },
  { name: 'REST / GraphQL APIs (Learning)', pct: 50, color: 'teal' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-y border-[#1A2333]" style={{ background: '#080C10' }}>
      <div className="max-w-[1120px] mx-auto px-5 md:px-10">
        <div className="sec-tag mb-3"><span>Technical Stack</span></div>
        <h2 className="font-display font-extrabold text-white leading-[1.08] mb-2"
          style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
          Tools I <span style={{ color: '#9B72FF' }}>Work With</span>
        </h2>
        <p className="text-[0.86rem] text-[#7A8A9F] leading-[1.85] max-w-[520px] mb-10">
          Frontend stack I use daily, and a growing backend layer I'm actively building.
        </p>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.6rem] uppercase tracking-widest px-3 py-1 rounded"
              style={{ background: 'rgba(155,114,255,.12)', border: '1px solid rgba(155,114,255,.3)', color: '#9B72FF' }}>
              ✓ Frontend — Daily Use
            </span>
            <span className="text-[0.7rem] text-[#5A6880]">Used at RAYGAIN Technologies</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {frontendSkills.map((s) => (
              <div key={s.name} className="skill-card card2 py-4 px-2 text-center">
                <img src={s.img} alt={s.name} className="w-8 h-8 object-contain mx-auto mb-2"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <span className="font-mono text-[0.6rem] text-[#9B72FF] block">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.6rem] uppercase tracking-widest px-3 py-1 rounded"
              style={{ background: 'rgba(0,212,170,.12)', border: '1px solid rgba(0,212,170,.3)', color: '#00D4AA' }}>
              📚 Backend — Currently Learning
            </span>
            <span className="text-[0.7rem] text-[#5A6880]">Building toward full-stack engineer</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-2">
            {backendSkills.map((s) => (
              <div key={s.name} className="skill-card card2 py-4 px-2 text-center" style={{ borderColor: 'rgba(0,212,170,.12)' }}>
                <img src={s.img} alt={s.name} className="w-8 h-8 object-contain mx-auto mb-2"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <span className="font-mono text-[0.6rem] text-[#00D4AA] block">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
          {skillBars.map((b) => (
            <div key={b.name} className="flex items-center gap-3">
              <span className="text-[0.76rem] font-semibold text-[#EDF2F7] w-[220px] flex-shrink-0">{b.name}</span>
              <div className="flex-1 h-[3px] rounded-full" style={{ background: '#1F2D3D' }}>
                <div className="h-full rounded-full sb-fill" style={{
                  width: `${b.pct}%`,
                  background: b.color === 'main' ? 'linear-gradient(90deg,#9B72FF,#F5C842)' : 'linear-gradient(90deg,#00D4AA,rgba(0,212,170,.6))'
                }}></div>
              </div>
              <span className="font-mono text-[0.64rem] text-[#5A6880] w-[36px] text-right">{b.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
