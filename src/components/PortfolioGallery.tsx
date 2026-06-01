import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    cat: 'Full-Stack',
    color: '#9B72FF',
    desc: 'Complete e-commerce platform with React frontend, Node.js backend, Stripe payments, and MongoDB database.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    features: ['Product catalog', 'Cart & checkout', 'User auth', 'Admin dashboard', 'Order tracking'],
  },
  {
    title: 'Real-Time Chat App',
    cat: 'Frontend',
    color: '#00D4AA',
    desc: 'Real-time messaging application with Socket.io, group chats, typing indicators, and read receipts.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    features: ['Real-time messaging', 'Group chats', 'Typing indicators', 'Read receipts', 'Emoji support'],
  },
  {
    title: 'Portfolio Website',
    cat: 'Frontend',
    color: '#F5C842',
    desc: 'Responsive portfolio website with dark mode, animated sections, and contact form.',
    tech: ['React', 'Tailwind', 'Vite', 'Vercel'],
    features: ['Dark mode toggle', 'Animated sections', 'Contact form', 'Responsive design', 'SEO optimized'],
  },
  {
    title: 'Task Manager',
    cat: 'Frontend',
    color: '#FF5F6D',
    desc: 'Drag-and-drop task management app with Kanban boards, due dates, and team collaboration.',
    tech: ['React', 'Redux', 'DnD Kit', 'Firebase'],
    features: ['Kanban boards', 'Drag & drop', 'Due dates', 'Team collaboration', 'Notifications'],
  },
  {
    title: 'Weather Dashboard',
    cat: 'Frontend',
    color: '#4E9EFF',
    desc: 'Beautiful weather dashboard with 7-day forecast, interactive maps, and location search.',
    tech: ['React', 'OpenWeather API', 'Leaflet', 'Chart.js'],
    features: ['7-day forecast', 'Interactive maps', 'Location search', 'Weather alerts', 'Unit conversion'],
  },
  {
    title: 'Blog Platform',
    cat: 'Full-Stack',
    color: '#22D47A',
    desc: 'Full-stack blogging platform with markdown editor, comments, likes, and tag-based filtering.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
    features: ['Markdown editor', 'Comments & likes', 'Tag filtering', 'SEO optimized', 'RSS feed'],
  },
];

const categories = ['All', 'Frontend', 'Full-Stack'];

export default function PortfolioGallery() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section className="py-20 border-y border-[#1A2333]" style={{ background: '#080C10' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full"
            style={{ background: 'rgba(155,114,255,.1)', border: '1px solid rgba(155,114,255,.25)' }}>
            <span className="text-[0.9rem]">🎨</span>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest" style={{ color: '#9B72FF' }}>Portfolio Gallery</span>
          </div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Projects I've <span style={{ color: '#9B72FF' }}>Built</span>
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
            A curated selection of projects — from frontend UIs to full-stack applications.
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {categories.map((c) => (
            <button key={c} onClick={() => setFilter(c)}
              className="font-mono text-[0.72rem] font-bold px-5 py-2.5 rounded-full transition-all"
              style={{
                background: filter === c ? '#9B72FF' : '#131A22',
                color: filter === c ? '#000' : '#7A8A9F',
                border: `1px solid ${filter === c ? '#9B72FF' : '#1F2D3D'}`,
              }}>
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <div key={p.title} className="card overflow-hidden hover-gold group relative">
              {/* Color band */}
              <div className="h-32 relative flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${p.color}33, ${p.color}11)` }}>
                <div className="text-[3rem] font-extrabold opacity-20" style={{ color: p.color }}>
                  {p.title.charAt(0)}
                </div>
                <span className="absolute top-3 right-3 font-mono text-[0.55rem] uppercase tracking-widest px-2 py-1 rounded"
                  style={{ background: `${p.color}22`, color: p.color, border: `1px solid ${p.color}44` }}>
                  {p.cat}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-[1.05rem] font-extrabold text-white mb-2">{p.title}</h3>
                <p className="text-[0.78rem] text-[#7A8A9F] leading-[1.7] mb-4">{p.desc}</p>

                <div className="mb-4">
                  <div className="font-mono text-[0.55rem] uppercase tracking-widest mb-2" style={{ color: '#5A6880' }}>Key Features</div>
                  <div className="space-y-1">
                    {p.features.map((f) => (
                      <div key={f} className="text-[0.72rem] text-[#B8C5D9] pl-3 relative">
                        <span className="absolute left-0 text-[0.5rem]" style={{ color: p.color }}>▸</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[0.6rem] px-2 py-1 rounded"
                      style={{ background: `${p.color}14`, border: `1px solid ${p.color}33`, color: p.color }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a href="https://github.com/tusharchandel567" target="_blank" rel="noreferrer"
                    className="btn-sec text-[0.7rem] flex-1 justify-center" style={{ padding: '8px 12px' }}>
                    🐙 Code
                  </a>
                  <a href="#" className="btn-primary text-[0.7rem] flex-1 justify-center" style={{ padding: '8px 12px' }}>
                    🔗 Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
