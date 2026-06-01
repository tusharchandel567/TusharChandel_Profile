import { useState } from 'react';

const projects = [
  {
    title: 'Responsive Portfolio Website',
    desc: 'A multi-section responsive portfolio with smooth scrolling, dark mode toggle, animated skill bars, and contact form. Built with React + Tailwind CSS, deployed on Vercel.',
    tech: ['React', 'Tailwind', 'Vercel', 'Framer Motion'],
    color: '#F5C842',
    ico: '🎨',
    preview: 'portfolio',
  },
  {
    title: 'E-Commerce Product Page',
    desc: 'Full e-commerce product listing with filters, sorting, add-to-cart, and checkout flow. Integrated REST API for product data and Stripe for payments.',
    tech: ['React', 'Redux', 'Node.js', 'Stripe'],
    color: '#00D4AA',
    ico: '🛒',
    preview: 'ecommerce',
  },
  {
    title: 'Real-Time Chat Application',
    desc: 'A real-time messaging app with WebSockets, typing indicators, read receipts, emoji support, and group chats. Built during RAYGAIN internship.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    color: '#9B72FF',
    ico: '💬',
    preview: 'chat',
  },
];

function ProjectPreview({ type, color }: { type: string; color: string }) {
  if (type === 'portfolio') {
    return (
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
        <rect x="0" y="0" width="400" height="220" fill="#0F151C" />
        <rect x="0" y="0" width="400" height="40" fill="#131A22" />
        <circle cx="25" cy="20" r="4" fill="#F5C842" />
        <rect x="40" y="15" width="60" height="10" rx="2" fill="#5A6880" />
        <rect x="300" y="12" width="70" height="16" rx="4" fill={color} />
        <rect x="20" y="55" width="360" height="4" rx="2" fill="#1A2333" />
        <text x="20" y="80" fill="#F5C842" fontFamily="monospace" fontSize="10">HELLO, I'M</text>
        <text x="20" y="105" fill="#fff" fontFamily="'Bricolage Grotesque'" fontSize="28" fontWeight="800">Tushar Chandel</text>
        <text x="20" y="125" fill="#7A8A9F" fontFamily="monospace" fontSize="10">Frontend Developer → Data Analyst</text>
        <rect x="20" y="140" width="100" height="30" rx="6" fill={color} />
        <text x="70" y="160" fill="#000" textAnchor="middle" fontFamily="monospace" fontSize="10" fontWeight="bold">VIEW WORK</text>
        <rect x="130" y="140" width="90" height="30" rx="6" fill="#131A22" stroke="#1F2D3D" />
        <text x="175" y="160" fill="#7A8A9F" textAnchor="middle" fontFamily="monospace" fontSize="10">CONTACT ME</text>
        <rect x="280" y="60" width="100" height="100" rx="50" fill="#131A22" stroke={color} strokeWidth="2" />
        <text x="330" y="118" fill={color} textAnchor="middle" fontSize="28">👨‍💻</text>
      </svg>
    );
  }
  if (type === 'ecommerce') {
    return (
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
        <rect x="0" y="0" width="400" height="220" fill="#0F151C" />
        <rect x="0" y="0" width="400" height="36" fill="#131A22" />
        <rect x="10" y="10" width="100" height="16" rx="2" fill={color} />
        <text x="60" y="22" fill="#000" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="bold">SHOP</text>
        <rect x="280" y="10" width="80" height="16" rx="8" fill="#1A2333" />
        <text x="320" y="22" fill="#7A8A9F" textAnchor="middle" fontFamily="monospace" fontSize="8">🔍 Search</text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={10 + i * 95} y="50" width="85" height="100" rx="6" fill="#131A22" />
            <rect x={15 + i * 95} y="55" width="75" height="55" rx="4" fill={`${color}22`} stroke={color} strokeWidth="1" />
            <rect x={15 + i * 95} y="115" width="60" height="6" rx="2" fill="#5A6880" />
            <rect x={15 + i * 95} y="126" width="40" height="6" rx="2" fill={color} />
            <rect x={15 + i * 95} y="137" width="50" height="10" rx="3" fill={color} />
          </g>
        ))}
        <rect x="130" y="170" width="140" height="30" rx="6" fill={color} />
        <text x="200" y="190" fill="#000" textAnchor="middle" fontFamily="monospace" fontSize="10" fontWeight="bold">🛒 CHECKOUT · ₹2,499</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
      <rect x="0" y="0" width="400" height="220" fill="#0F151C" />
      <rect x="0" y="0" width="400" height="36" fill="#131A22" />
      <text x="20" y="22" fill={color} fontFamily="monospace" fontSize="11" fontWeight="bold">💬 ChatApp</text>
      <text x="380" y="22" fill="#22D47A" textAnchor="end" fontFamily="monospace" fontSize="9">● Online</text>
      {/* Chat bubbles */}
      <rect x="20" y="50" width="180" height="28" rx="10" fill="#131A22" />
      <text x="30" y="68" fill="#EDF2F7" fontFamily="monospace" fontSize="9">Hey! How's the project?</text>
      <rect x="200" y="85" width="180" height="28" rx="10" fill={color} />
      <text x="210" y="103" fill="#000" fontFamily="monospace" fontSize="9" fontWeight="bold">Going great! Almost done 🚀</text>
      <rect x="20" y="120" width="220" height="28" rx="10" fill="#131A22" />
      <text x="30" y="138" fill="#EDF2F7" fontFamily="monospace" fontSize="9">Ship it tomorrow? 📦</text>
      <rect x="180" y="155" width="200" height="28" rx="10" fill={color} />
      <text x="190" y="173" fill="#000" fontFamily="monospace" fontSize="9" fontWeight="bold">Absolutely! Deploying tonight ✅</text>
      <rect x="20" y="195" width="320" height="18" rx="9" fill="#131A22" stroke="#1F2D3D" />
      <text x="35" y="207" fill="#5A6880" fontFamily="monospace" fontSize="8">Type a message...</text>
      <circle cx="360" cy="204" r="8" fill={color} />
      <text x="360" y="207" fill="#000" textAnchor="middle" fontSize="8">➤</text>
    </svg>
  );
}

export default function FrontendProjects() {
  const [active, setActive] = useState(0);
  return (
    <section id="frontend-projects" className="max-w-[1280px] mx-auto px-5 md:px-10 py-20">
      <div className="text-center mb-12">
        <div className="sec-tag mb-3 justify-center"><span style={{ margin: 'auto' }}>Frontend Developer Work</span></div>
        <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
          3 <span className="gold">Frontend Projects</span> That Shipped
        </h2>
        <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
          Real projects built during the RAYGAIN internship and independently — each with live SVG previews.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <div key={p.title} className="card overflow-hidden group hover-gold relative" onMouseEnter={() => setActive(i)}>
            <div className="h-[180px] relative" style={{ background: '#131A22' }}>
              <ProjectPreview type={p.preview} color={p.color} />
              <div className="absolute top-2 right-2 w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: `${p.color}14`, border: `1px solid ${p.color}44`, backdropFilter: 'blur(8px)' }}>
                {p.ico}
              </div>
              {active === i && (
                <div className="absolute inset-0 flex items-center justify-center"
                  style={{ background: 'rgba(245,200,66,.08)', backdropFilter: 'blur(2px)' }}>
                  <a href="https://github.com/tusharchandel567" target="_blank" rel="noreferrer"
                    className="btn-primary text-[0.75rem]">View Code ↗</a>
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-display text-[1rem] font-extrabold text-white mb-2">{p.title}</h3>
              <p className="text-[0.78rem] text-[#7A8A9F] leading-[1.75] mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-[0.62rem] px-2 py-1 rounded"
                    style={{ background: `${p.color}14`, border: `1px solid ${p.color}33`, color: p.color }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
