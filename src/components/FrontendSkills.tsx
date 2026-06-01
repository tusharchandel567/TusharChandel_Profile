import { useEffect, useState } from 'react';

// Frontend skill roadmap based on the provided structure
const frontendCats = [
  {
    title: 'A. How the Web Works',
    ico: '🌐',
    items: ['Domain Names', 'DNS', 'HTTP / HTTPS', 'Web Servers', 'Client-Server'],
    status: 'done',
  },
  {
    title: 'B. Workspace Setup',
    ico: '💻',
    items: ['VS Code', 'WebStorm', 'Sublime Text', 'Cursor AI', 'Wind Surf', 'Prettier', 'Spell Checker', 'Live Server'],
    status: 'done',
  },
  {
    title: 'C. HTML',
    ico: '📄',
    items: ['Tags', 'Elements', 'Attributes', 'Semantics', 'Forms', 'Accessibility'],
    status: 'done',
  },
  {
    title: 'D. CSS',
    ico: '🎨',
    items: ['Selectors', 'Box Model', 'Flexbox', 'Grid', 'Positioning', 'Responsive Design', 'CSS Variables', 'Sass/Less', 'Tailwind', 'Bootstrap'],
    status: 'done',
  },
  {
    title: 'E. JavaScript',
    ico: '⚡',
    items: ['Variables & Types', 'Functions', 'Conditionals', 'Arrays & Objects', 'DOM Events', 'Async JS', 'Event Loop', 'Fetch API', 'ES6+', 'Modules'],
    status: 'done',
  },
  {
    title: 'F. Version Control',
    ico: '🔀',
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
    status: 'done',
  },
  {
    title: 'G. React & Frameworks',
    ico: '⚛️',
    items: ['JSX', 'Components', 'Props & State', 'Hooks', 'React Router', 'Context API', 'Redux', 'Next.js', 'TypeScript', 'Testing (Jest/Vitest/Cypress)'],
    status: 'done',
  },
  {
    title: 'H. TypeScript',
    ico: '🔷',
    items: ['Types & Interfaces', 'Utility Types', 'Generics', 'OOP vs FP', 'Decorators'],
    status: 'done',
  },
];

const backendCats = [
  {
    title: 'J. Programming Language',
    ico: '🐍',
    items: ['Node.js', 'Express.js', 'NestJS', 'Python', 'Event Loop', 'Async Programming', 'Middleware', 'Error Handling'],
    status: 'learning',
  },
  {
    title: 'K. Databases',
    ico: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'ACID', 'Indexing', 'Migrations', 'Normalization', 'ORMs'],
    status: 'learning',
  },
  {
    title: 'L. APIs',
    ico: '🔗',
    items: ['REST', 'GraphQL', 'gRPC', 'CORS', 'SSL/TLS', 'JWT', 'OAuth', 'Rate Limiting', 'Caching', 'Security (OWASP)'],
    status: 'learning',
  },
  {
    title: 'M. Deployment',
    ico: '🚀',
    items: ['Docker', 'Nginx', 'AWS', 'CI/CD', 'Load Balancing', 'CDN', 'Redis Cache'],
    status: 'learning',
  },
];

function BlinkingSkill({ text, color, delay = 0 }: { text: string; color: string; delay?: number }) {
  return (
    <span className="inline-block font-mono text-[0.66rem] px-3 py-1.5 rounded-full my-0.5"
      style={{
        background: `${color}15`,
        border: `1px solid ${color}55`,
        color,
        animation: `blink 2s ease-in-out ${delay}s infinite, pulseGlow 2s ease-in-out ${delay}s infinite`,
        boxShadow: `0 0 0 ${color}00`,
      }}>
      {text}
    </span>
  );
}

function CategoryBlock({ cat, status }: { cat: typeof frontendCats[0]; status: 'done' | 'learning' }) {
  const dot = status === 'done' ? '#22D47A' : '#F5C842';
  const label = status === 'done' ? '✓ Mastered' : '📚 Learning';
  return (
    <div className="card2 p-5 hover-gold relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: dot }}></div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-[1.1rem]">{cat.ico}</span>
          <h4 className="font-display text-[0.95rem] font-extrabold text-white">{cat.title}</h4>
        </div>
        <span className="font-mono text-[0.55rem] px-2 py-1 rounded-full"
          style={{ background: `${dot}15`, border: `1px solid ${dot}44`, color: dot }}>
          {label}
        </span>
      </div>
      <div className="flex flex-wrap gap-1">
        {cat.items.map((t, i) => (
          <BlinkingSkill key={t} text={t} color={dot} delay={i * 0.15} />
        ))}
      </div>
    </div>
  );
}

export default function FrontendSkills() {
  const [glow, setGlow] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setGlow((g) => !g), 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="frontend" className="py-20 border-y border-[#1A2333] relative overflow-hidden" style={{ background: '#050709' }}>
      {/* Animated grid bg */}
      <div className="absolute inset-0 hero-grid-bg opacity-60"></div>
      {/* RGB blinking lights background */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle,rgba(245,200,66,.08) 0%,transparent 65%)',
          animation: 'rgbShift 6s ease-in-out infinite',
        }}></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle,rgba(155,114,255,.08) 0%,transparent 65%)',
          animation: 'rgbShift2 7s ease-in-out infinite',
        }}></div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle,rgba(0,212,170,.06) 0%,transparent 65%)',
          animation: 'rgbShift3 5s ease-in-out infinite',
        }}></div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full"
            style={{ background: glow ? 'rgba(245,200,66,.12)' : 'rgba(0,212,170,.12)', border: `1px solid ${glow ? 'rgba(245,200,66,.3)' : 'rgba(0,212,170,.3)'}`, transition: 'all 0.5s' }}>
            <span className="text-[0.9rem]">💡</span>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest" style={{ color: glow ? '#F5C842' : '#00D4AA' }}>
              Complete Skill Roadmap
            </span>
          </div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Frontend <span className="gold">→ Backend</span> Full Stack
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
            Every technology I've mastered on the frontend — with a live roadmap of what I'm learning on the backend. Each skill blinks to show it's alive and active.
          </p>
        </div>

        {/* FRONTEND SECTION */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[0.75rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(34,212,122,.12)', border: '1px solid rgba(34,212,122,.3)', color: '#22D47A' }}>
              ✓ FRONTEND — MASTERED
            </span>
            <span className="text-[0.75rem] text-[#5A6880]">Skills used at RAYGAIN Technologies</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {frontendCats.map((c) => <CategoryBlock key={c.title} cat={c} status="done" />)}
          </div>
        </div>

        {/* BACKEND SECTION */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[0.75rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(245,200,66,.12)', border: '1px solid rgba(245,200,66,.3)', color: '#F5C842' }}>
              📚 BACKEND — CURRENTLY LEARNING
            </span>
            <span className="text-[0.75rem] text-[#5A6880]">Building toward full-stack engineer</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {backendCats.map((c) => <CategoryBlock key={c.title} cat={c} status="learning" />)}
          </div>
        </div>

        {/* Blinking progress bar */}
        <div className="mt-10 card2 p-6">
          <div className="flex justify-between items-center mb-3">
            <span className="font-display text-[0.95rem] font-bold text-white">Full-Stack Progress</span>
            <span className="font-mono text-[0.8rem] text-[#F5C842] font-bold">70% — Backend in progress</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ background: '#1A2333' }}>
            <div className="h-full rounded-full"
              style={{
                width: '70%',
                background: 'linear-gradient(90deg,#22D47A,#F5C842,#9B72FF,#00D4AA)',
                backgroundSize: '200% 100%',
                animation: 'gradientMove 3s linear infinite',
                boxShadow: glow ? '0 0 20px rgba(245,200,66,.5)' : '0 0 10px rgba(34,212,122,.3)',
              }}></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245,200,66,0); }
          50% { box-shadow: 0 0 12px 2px rgba(245,200,66,.2); }
        }
        @keyframes rgbShift {
          0%, 100% { transform: translate(0,0) scale(1); opacity: 0.6; }
          50% { transform: translate(30px,-20px) scale(1.1); opacity: 1; }
        }
        @keyframes rgbShift2 {
          0%, 100% { transform: translate(0,0) scale(1); opacity: 0.6; }
          50% { transform: translate(-20px,25px) scale(1.15); opacity: 1; }
        }
        @keyframes rgbShift3 {
          0%, 100% { transform: translate(-50%,-50%) scale(0.9); opacity: 0.4; }
          50% { transform: translate(-50%,-50%) scale(1.1); opacity: 0.8; }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </section>
  );
}
