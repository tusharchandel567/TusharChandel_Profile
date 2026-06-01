export default function DashboardMockup() {
  // small KPI bars
  const bars = [72, 68, 84, 91, 76, 88, 95, 80, 73, 86, 92, 78];
  // donut
  const donutData = [
    { val: 45, color: '#F5C842', label: 'Segment A' },
    { val: 28, color: '#00D4AA', label: 'Segment B' },
    { val: 15, color: '#9B72FF', label: 'Segment C' },
    { val: 12, color: '#FF5F6D', label: 'Segment D' },
  ];
  const circumference = 2 * Math.PI * 38;
  let offset = 0;

  return (
    <section className="py-20 border-y border-[#1A2333]" style={{ background: '#0C1117' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="sec-tag mb-3 justify-center"><span style={{ margin: 'auto' }}>Interactive Proof</span></div>
          <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            A Dashboard I <span className="gold">Actually Built</span>
          </h2>
          <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
            A stylized preview of the kind of Power BI / Tableau dashboards I deliver — executive KPIs, trend lines, segmentation, and geographic insights.
          </p>
        </div>

        {/* DASHBOARD */}
        <div className="rounded-2xl p-4 md:p-6 shadow-2xl" style={{ background: '#0F151C', border: '1px solid rgba(245,200,66,.2)' }}>
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4" style={{ borderBottom: '1px solid #1A2333' }}>
            <div>
              <div className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest">Executive Dashboard</div>
              <h3 className="font-display text-[1.3rem] font-extrabold text-white mt-0.5">📊 Retail Sales Analytics · FY 2025</h3>
            </div>
            <div className="flex gap-2 flex-wrap">
              {['📅 Last 12 Months', '🌍 All Regions', '🏪 All Stores'].map((f) => (
                <span key={f} className="font-mono text-[0.62rem] px-3 py-1.5 rounded-md"
                  style={{ background: '#131A22', border: '1px solid #1F2D3D', color: '#7A8A9F' }}>{f}</span>
              ))}
            </div>
          </div>

          {/* KPI Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {[
              { l: 'Total Revenue', v: '₹ 4.28M', d: '+18.4%', pos: true, ico: '💰' },
              { l: 'Orders', v: '24,853', d: '+12.1%', pos: true, ico: '🛒' },
              { l: 'Avg. Order Value', v: '₹ 172', d: '-3.2%', pos: false, ico: '📦' },
              { l: 'Return Rate', v: '2.8%', d: '-0.5%', pos: true, ico: '↩️' },
            ].map((k) => (
              <div key={k.l} className="p-4 rounded-xl" style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[0.58rem] uppercase tracking-widest text-[#5A6880]">{k.l}</span>
                  <span className="text-[0.85rem]">{k.ico}</span>
                </div>
                <div className="font-display text-[1.5rem] font-extrabold text-white mt-2">{k.v}</div>
                <span className={`font-mono text-[0.6rem] font-semibold ${k.pos ? 'text-[#22D47A]' : 'text-[#FF5F6D]'}`}>
                  {k.pos ? '▲' : '▼'} {k.d} vs. last FY
                </span>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-4 mb-4">
            {/* Line + Bar chart */}
            <div className="p-5 rounded-xl" style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="font-display text-[0.9rem] font-bold text-white">Monthly Revenue Trend</h4>
                  <p className="font-mono text-[0.6rem] text-[#5A6880]">Revenue vs. Target · FY 2025</p>
                </div>
                <div className="flex gap-3 text-[0.62rem]">
                  <span className="flex items-center gap-1 text-[#7A8A9F]"><span className="w-2 h-2 rounded-sm bg-[#F5C842]"></span> Revenue</span>
                  <span className="flex items-center gap-1 text-[#7A8A9F]"><span className="w-2 h-2 rounded-sm bg-[#00D4AA]"></span> Target</span>
                </div>
              </div>
              <svg viewBox="0 0 500 220" className="w-full h-52">
                {/* Grid */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line key={i} x1="30" y1={30 + i * 40} x2="480" y2={30 + i * 40} stroke="#1F2D3D" strokeDasharray="4,4" />
                ))}
                {/* Y labels */}
                {['500k', '400k', '300k', '200k', '100k'].map((l, i) => (
                  <text key={l} x="25" y={36 + i * 40} fontSize="8" fill="#5A6880" fontFamily="monospace" textAnchor="end">{l}</text>
                ))}
                {/* Bars */}
                {bars.map((b, i) => {
                  const h = (b / 100) * 160;
                  const x = 45 + i * 36;
                  return <rect key={i} x={x} y={190 - h} width="14" height={h} rx="2" fill="#F5C842" opacity="0.85" />;
                })}
                {/* Target line */}
                <polyline
                  fill="none" stroke="#00D4AA" strokeWidth="2.5"
                  points="52,140 88,128 124,135 160,115 196,105 232,120 268,95 304,85 340,100 376,80 412,70 448,62"
                />
                {[52, 88, 124, 160, 196, 232, 268, 304, 340, 376, 412, 448].map((x, i) => (
                  <circle key={i} cx={x} cy={[140, 128, 135, 115, 105, 120, 95, 85, 100, 80, 70, 62][i]} r="3" fill="#00D4AA" />
                ))}
                {/* X labels */}
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => (
                  <text key={m} x={52 + i * 36} y="208" fontSize="8" fill="#5A6880" fontFamily="monospace" textAnchor="middle">{m}</text>
                ))}
              </svg>
            </div>

            {/* Donut + breakdown */}
            <div className="p-5 rounded-xl" style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
              <h4 className="font-display text-[0.9rem] font-bold text-white mb-1">Customer Segment Share</h4>
              <p className="font-mono text-[0.6rem] text-[#5A6880] mb-4">By revenue contribution</p>
              <div className="flex items-center gap-5">
                <svg viewBox="0 0 100 100" className="w-36 h-36 flex-shrink-0">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#1A2333" strokeWidth="14" />
                  {donutData.map((d, i) => {
                    const length = (d.val / 100) * circumference;
                    const seg = (
                      <circle key={i} cx="50" cy="50" r="38" fill="none" stroke={d.color} strokeWidth="14"
                        strokeDasharray={`${length} ${circumference - length}`}
                        strokeDashoffset={-offset} transform="rotate(-90 50 50)" />
                    );
                    offset += length;
                    return seg;
                  })}
                  <text x="50" y="48" fontSize="9" fill="#5A6880" textAnchor="middle" fontFamily="monospace">TOTAL</text>
                  <text x="50" y="60" fontSize="12" fill="#F5C842" textAnchor="middle" fontWeight="bold" fontFamily="'Bricolage Grotesque'">100%</text>
                </svg>
                <div className="flex-1 space-y-2">
                  {donutData.map((d) => (
                    <div key={d.label} className="flex items-center justify-between text-[0.7rem]">
                      <span className="flex items-center gap-2 text-[#7A8A9F]">
                        <span className="w-2 h-2 rounded-sm" style={{ background: d.color }}></span>{d.label}
                      </span>
                      <span className="font-mono font-semibold" style={{ color: d.color }}>{d.val}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Small top products */}
              <div className="mt-5 pt-4" style={{ borderTop: '1px solid #1A2333' }}>
                <div className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest mb-3">Top Products by Revenue</div>
                {[
                  { n: 'Premium Electronics', v: 92, c: '#F5C842' },
                  { n: 'Fashion & Apparel', v: 74, c: '#00D4AA' },
                  { n: 'Home & Kitchen', v: 58, c: '#9B72FF' },
                ].map((p) => (
                  <div key={p.n} className="mb-2">
                    <div className="flex justify-between text-[0.68rem] mb-1">
                      <span className="text-[#7A8A9F]">{p.n}</span>
                      <span className="font-mono" style={{ color: p.c }}>{p.v}%</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: '#1A2333' }}>
                      <div className="h-full rounded-full" style={{ width: `${p.v}%`, background: p.c }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Region row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { r: 'North', v: '₹ 1.42M', g: 85, c: '#F5C842' },
              { r: 'South', v: '₹ 1.18M', g: 72, c: '#00D4AA' },
              { r: 'East', v: '₹ 890K', g: 54, c: '#9B72FF' },
              { r: 'West', v: '₹ 790K', g: 48, c: '#22D47A' },
            ].map((r) => (
              <div key={r.r} className="p-4 rounded-xl" style={{ background: '#131A22', border: '1px solid #1F2D3D' }}>
                <div className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest mb-1">{r.r} Region</div>
                <div className="font-display text-[1.05rem] font-extrabold text-white mb-2">{r.v}</div>
                <div className="h-1.5 rounded-full" style={{ background: '#1A2333' }}>
                  <div className="h-full rounded-full" style={{ width: `${r.g}%`, background: r.c }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 pt-4" style={{ borderTop: '1px solid #1A2333' }}>
            <span className="font-mono text-[0.65rem] text-[#5A6880]">
              💡 <span className="text-[#7A8A9F]">Slicers · Drill-through · Bookmarks · Conditional formatting · DAX measures</span>
            </span>
          </div>
        </div>

        {/* Action row */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a href="#contact" className="btn-primary" style={{ padding: '13px 26px' }}>📩 Request a Dashboard Demo</a>
          <a href="#projects" className="btn-sec" style={{ padding: '12px 24px' }}>📊 See More Projects</a>
        </div>
      </div>
    </section>
  );
}
