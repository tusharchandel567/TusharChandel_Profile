export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[58px] flex items-center justify-between px-6 md:px-9 border-b border-[#1A2333]"
      style={{ background: 'rgba(5,7,9,.88)', backdropFilter: 'blur(24px)' }}>
      <a href="#top" className="font-display text-[1rem] font-extrabold text-[#F5C842] no-underline flex items-center gap-2">
        <span className="w-[7px] h-[7px] rounded-full bg-[#22D47A] pulse-dot"></span>
        Tushar Chandel
      </a>
      <ul className="hidden md:flex gap-6 list-none">
        {[
          ['About', '#about'],
          ['Skills', '#skills'],
          ['Projects', '#projects'],
          ['Experience', '#experience'],
          ['Offer Letter', '#offer'],
          ['Contact', '#contact'],
        ].map(([label, href]) => (
          <li key={href}>
            <a href={href} className="text-[0.72rem] font-medium text-[#7A8A9F] no-underline tracking-widest uppercase hover:text-[#F5C842] transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex items-center gap-2">
        <span className="font-mono text-[0.6rem] text-[#7A8A9F] uppercase tracking-widest">Portfolio · 2026</span>
      </div>
    </nav>
  );
}
