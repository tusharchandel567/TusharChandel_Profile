export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[58px] flex items-center justify-between px-6 md:px-9 border-b border-[#1A2333]"
      style={{ background: 'rgba(5,7,9,.88)', backdropFilter: 'blur(24px)' }}>
      <a href="#top" className="font-display text-[1rem] font-extrabold no-underline flex items-center gap-2"
        style={{ color: '#9B72FF' }}>
        <span className="w-[7px] h-[7px] rounded-full bg-[#22D47A] pulse-dot"></span>
        Tushar Chandel
      </a>
      <ul className="hidden md:flex gap-6 list-none">
        {[
          ['About', '#about'],
          ['Frontend', '#frontend'],
          ['Projects', '#frontend-projects'],
          ['AI Tools', '#ai-tools'],
          ['Offer', '#offer'],
          ['Contact', '#contact'],
        ].map(([label, href]) => (
          <li key={href}>
            <a href={href} className="text-[0.72rem] font-medium no-underline tracking-widest uppercase transition-colors"
              style={{ color: '#7A8A9F' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#9B72FF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#7A8A9F')}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex items-center gap-2">
        <span className="font-mono text-[0.6rem] uppercase tracking-widest" style={{ color: '#7A8A9F' }}>SWE · 2026</span>
      </div>
    </nav>
  );
}
