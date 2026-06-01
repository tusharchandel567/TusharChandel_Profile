const communities = [
  { name: 'GitHub', ico: '🐙', role: 'Active Contributor', count: '15+ repos', color: '#24292e' },
  { name: 'Stack Overflow', ico: '📚', role: 'Problem Solver', count: '800+ rep', color: '#F48024' },
  { name: 'Dev.to', ico: '✍️', role: 'Writer', count: '12 articles', color: '#0A0A0A' },
  { name: 'Hashnode', ico: '📝', role: 'Blogger', count: '8 posts', color: '#2962FF' },
  { name: 'LinkedIn', ico: '💼', role: 'Networker', count: '500+ connections', color: '#0A66C2' },
  { name: 'Twitter/X', ico: '🐦', role: 'Tech Tweets', count: 'Active', color: '#000000' },
  { name: 'Discord', ico: '💬', role: 'Dev Communities', count: '20+ servers', color: '#5865F2' },
  { name: 'YouTube', ico: '📺', role: 'Learning', count: '500+ videos', color: '#FF0000' },
];

const blogPosts = [
  { title: 'From Frontend to Full-Stack: My 2026 Roadmap', date: 'Mar 2026', reads: '2.3K', color: '#9B72FF' },
  { title: 'React Performance: 10 Tips I Wish I Knew Sooner', date: 'Feb 2026', reads: '4.1K', color: '#00D4AA' },
  { title: 'Why I Switched from Data Analyst to Software Engineer', date: 'Jan 2026', reads: '1.8K', color: '#F5C842' },
  { title: 'Mastering CSS Grid: A Visual Guide', date: 'Dec 2025', reads: '3.5K', color: '#FF5F6D' },
];

export default function Community() {
  return (
    <section className="py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full"
            style={{ background: 'rgba(245,200,66,.1)', border: '1px solid rgba(245,200,66,.25)' }}>
            <span className="text-[0.9rem]">🌐</span>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest" style={{ color: '#F5C842' }}>Community & Presence</span>
          </div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Active in the <span style={{ color: '#F5C842' }}>Developer Community</span>
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
            Building presence across developer platforms — contributing, writing, and connecting with fellow engineers.
          </p>
        </div>

        {/* Community platforms */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {communities.map((c) => (
            <a key={c.name} href="#" className="card2 p-5 text-center hover-gold no-underline block">
              <div className="text-[1.8rem] mb-2">{c.ico}</div>
              <div className="font-display text-[0.9rem] font-extrabold text-white mb-1">{c.name}</div>
              <div className="font-mono text-[0.6rem] uppercase tracking-widest mb-1" style={{ color: c.color }}>{c.role}</div>
              <div className="font-mono text-[0.65rem]" style={{ color: '#7A8A9F' }}>{c.count}</div>
            </a>
          ))}
        </div>

        {/* Blog posts */}
        <div className="card2 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[1.1rem]">✍️</span>
            <h3 className="font-display text-[1.05rem] font-extrabold text-white">Recent Blog Posts</h3>
          </div>
          <div className="space-y-3">
            {blogPosts.map((b) => (
              <a key={b.title} href="#" className="flex items-center justify-between p-4 rounded-lg hover-gold no-underline"
                style={{ background: '#0C1117', border: '1px solid #1A2333' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-[1.1rem]"
                    style={{ background: `${b.color}14`, border: `1px solid ${b.color}33` }}>
                    📄
                  </div>
                  <div>
                    <div className="text-[0.88rem] font-bold text-[#EDF2F7]">{b.title}</div>
                    <div className="font-mono text-[0.6rem] mt-0.5" style={{ color: '#5A6880' }}>{b.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display font-bold" style={{ color: b.color }}>{b.reads}</div>
                  <div className="font-mono text-[0.55rem] uppercase tracking-widest" style={{ color: '#5A6880' }}>reads</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Social proof */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {[
            { t: 'Open Source Contributor', d: 'Contributing to React ecosystem and dev tools', c: '#9B72FF', i: '🌟' },
            { t: 'Tech Writer', d: 'Sharing knowledge through blog posts and tutorials', c: '#00D4AA', i: '📖' },
            { t: 'Community Helper', d: 'Answering questions on Stack Overflow & Discord', c: '#F5C842', i: '🤝' },
          ].map((s) => (
            <div key={s.t} className="card2 p-6 text-center hover-gold">
              <div className="text-[1.8rem] mb-2">{s.i}</div>
              <h4 className="font-display text-[0.95rem] font-extrabold text-white mb-2">{s.t}</h4>
              <p className="text-[0.78rem] leading-[1.7]" style={{ color: '#7A8A9F' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
