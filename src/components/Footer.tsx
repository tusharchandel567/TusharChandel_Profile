export default function Footer() {
  return (
    <footer className="max-w-[1120px] mx-auto px-5 md:px-10 py-8 flex flex-wrap justify-between items-center gap-3" style={{ borderTop: '1px solid #1A2333' }}>
      <div className="font-mono text-[0.68rem] text-[#5A6880]">
        <strong className="text-[#7A8A9F]">Tushar Chandel</strong> · Data Analyst Portfolio © 2026 · Built with data-first thinking.
      </div>
      <div className="flex gap-5">
        {[['About', '#about'], ['Projects', '#projects'], ['Engineering', '#engineering'], ['Resume', 'https://drive.google.com/file/d/1YnTtZz-gOIpT8y5WOL6htbC6g_OzGs-V/view'], ['Contact', '#contact']].map(([l, h]) => (
          <a key={l} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
            className="font-mono text-[0.65rem] text-[#5A6880] no-underline hover:text-[#F5C842]">{l}</a>
        ))}
      </div>
    </footer>
  );
}
