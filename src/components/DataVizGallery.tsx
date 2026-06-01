export default function DataVizGallery() {
  // Heatmap data
  const heat = Array.from({ length: 7 }, () =>
    Array.from({ length: 24 }, () => Math.random())
  );

  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-20">
      <div className="text-center mb-12">
        <div className="sec-tag mb-3 justify-center"><span style={{ margin: 'auto' }}>Data Visualization Repertoire</span></div>
        <h2 className="font-display font-extrabold text-white leading-[1.08]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
          Chart Types I <span className="gold">Master</span>
        </h2>
        <p className="text-[0.88rem] text-[#7A8A9F] max-w-[620px] mx-auto mt-3 leading-[1.85]">
          From line charts to heatmaps to geospatial — every visualization type I use to turn numbers into narrative.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {/* Line Chart */}
        <div className="card2 p-5 hover-gold">
          <div className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest mb-2">#1 Trend</div>
          <h4 className="font-display text-[0.9rem] font-bold text-white mb-3">Line Chart</h4>
          <svg viewBox="0 0 200 80" className="w-full h-20">
            <polyline fill="none" stroke="#F5C842" strokeWidth="2"
              points="5,60 25,50 45,55 65,35 85,40 105,25 125,30 145,20 165,15 185,10 195,8" />
            {[5, 25, 45, 65, 85, 105, 125, 145, 165, 185, 195].map((x, i) => (
              <circle key={i} cx={x} cy={[60, 50, 55, 35, 40, 25, 30, 20, 15, 10, 8][i]} r="2" fill="#F5C842" />
            ))}
          </svg>
          <div className="font-mono text-[0.6rem] text-[#7A8A9F] mt-3">Revenue over time</div>
        </div>

        {/* Bar chart */}
        <div className="card2 p-5 hover-gold">
          <div className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest mb-2">#2 Comparison</div>
          <h4 className="font-display text-[0.9rem] font-bold text-white mb-3">Bar Chart</h4>
          <svg viewBox="0 0 200 80" className="w-full h-20">
            {[60, 45, 70, 35, 55, 50, 65].map((h, i) => (
              <rect key={i} x={10 + i * 27} y={72 - h} width="18" height={h} rx="2" fill="#00D4AA" opacity={0.5 + (i % 3) * 0.15} />
            ))}
          </svg>
          <div className="font-mono text-[0.6rem] text-[#7A8A9F] mt-3">Category performance</div>
        </div>

        {/* Donut */}
        <div className="card2 p-5 hover-gold">
          <div className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest mb-2">#3 Composition</div>
          <h4 className="font-display text-[0.9rem] font-bold text-white mb-3">Donut / Pie</h4>
          <svg viewBox="0 0 200 80" className="w-full h-20">
            <circle cx="40" cy="40" r="28" fill="#131A22" stroke="#F5C842" strokeWidth="8" strokeDasharray="80 400" transform="rotate(-90 40 40)" />
            <circle cx="40" cy="40" r="28" fill="none" stroke="#00D4AA" strokeWidth="8" strokeDasharray="100 400" strokeDashoffset="-80" transform="rotate(-90 40 40)" />
            <circle cx="40" cy="40" r="28" fill="none" stroke="#9B72FF" strokeWidth="8" strokeDasharray="60 400" strokeDashoffset="-180" transform="rotate(-90 40 40)" />
            <circle cx="40" cy="40" r="28" fill="none" stroke="#22D47A" strokeWidth="8" strokeDasharray="160 400" strokeDashoffset="-240" transform="rotate(-90 40 40)" />
            <g fontFamily="monospace" fontSize="8">
              <rect x="85" y="15" width="6" height="6" fill="#F5C842" /><text x="95" y="21" fill="#7A8A9F">Segment A</text>
              <rect x="85" y="30" width="6" height="6" fill="#00D4AA" /><text x="95" y="36" fill="#7A8A9F">Segment B</text>
              <rect x="85" y="45" width="6" height="6" fill="#9B72FF" /><text x="95" y="51" fill="#7A8A9F">Segment C</text>
              <rect x="85" y="60" width="6" height="6" fill="#22D47A" /><text x="95" y="66" fill="#7A8A9F">Segment D</text>
            </g>
          </svg>
          <div className="font-mono text-[0.6rem] text-[#7A8A9F] mt-3">Share of revenue</div>
        </div>

        {/* Area */}
        <div className="card2 p-5 hover-gold">
          <div className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest mb-2">#4 Cumulative</div>
          <h4 className="font-display text-[0.9rem] font-bold text-white mb-3">Area Chart</h4>
          <svg viewBox="0 0 200 80" className="w-full h-20">
            <defs>
              <linearGradient id="areaG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9B72FF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#9B72FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M5,65 L30,50 L55,55 L80,35 L105,40 L130,25 L155,18 L180,10 L195,8 L195,72 L5,72 Z" fill="url(#areaG)" />
            <path d="M5,65 L30,50 L55,55 L80,35 L105,40 L130,25 L155,18 L180,10 L195,8" fill="none" stroke="#9B72FF" strokeWidth="2" />
          </svg>
          <div className="font-mono text-[0.6rem] text-[#7A8A9F] mt-3">Cumulative growth</div>
        </div>

        {/* Scatter */}
        <div className="card2 p-5 hover-gold">
          <div className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest mb-2">#5 Correlation</div>
          <h4 className="font-display text-[0.9rem] font-bold text-white mb-3">Scatter Plot</h4>
          <svg viewBox="0 0 200 80" className="w-full h-20">
            {Array.from({ length: 35 }).map((_, i) => (
              <circle key={i} cx={10 + Math.random() * 180} cy={10 + Math.random() * 55} r={2 + Math.random() * 3}
                fill={i % 3 === 0 ? '#F5C842' : i % 3 === 1 ? '#00D4AA' : '#9B72FF'} opacity="0.75" />
            ))}
          </svg>
          <div className="font-mono text-[0.6rem] text-[#7A8A9F] mt-3">Spend vs. Revenue</div>
        </div>

        {/* Funnel */}
        <div className="card2 p-5 hover-gold">
          <div className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest mb-2">#6 Drop-off</div>
          <h4 className="font-display text-[0.9rem] font-bold text-white mb-3">Funnel Chart</h4>
          <svg viewBox="0 0 200 80" className="w-full h-20">
            <rect x="10" y="8" width="180" height="12" rx="2" fill="#F5C842" />
            <rect x="30" y="24" width="140" height="12" rx="2" fill="#F5C842" opacity="0.8" />
            <rect x="55" y="40" width="90" height="12" rx="2" fill="#F5C842" opacity="0.6" />
            <rect x="75" y="56" width="50" height="12" rx="2" fill="#F5C842" opacity="0.45" />
            <text x="100" y="18" fontSize="7" textAnchor="middle" fill="#000" fontFamily="monospace">100%</text>
            <text x="100" y="34" fontSize="7" textAnchor="middle" fill="#000" fontFamily="monospace">65%</text>
            <text x="100" y="50" fontSize="7" textAnchor="middle" fill="#fff" fontFamily="monospace">28%</text>
            <text x="100" y="66" fontSize="7" textAnchor="middle" fill="#fff" fontFamily="monospace">12%</text>
          </svg>
          <div className="font-mono text-[0.6rem] text-[#7A8A9F] mt-3">User conversion</div>
        </div>

        {/* Heatmap */}
        <div className="card2 p-5 hover-gold">
          <div className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest mb-2">#7 Intensity</div>
          <h4 className="font-display text-[0.9rem] font-bold text-white mb-3">Heatmap</h4>
          <svg viewBox="0 0 200 80" className="w-full h-20">
            {heat.map((row, r) =>
              row.map((v, c) => (
                <rect key={`${r}-${c}`} x={c * 8} y={r * 11} width="7" height="10" rx="1"
                  fill={`rgba(245,200,66,${0.1 + v * 0.85})`} />
              ))
            )}
          </svg>
          <div className="font-mono text-[0.6rem] text-[#7A8A9F] mt-3">Traffic: Day × Hour</div>
        </div>

        {/* Treemap */}
        <div className="card2 p-5 hover-gold">
          <div className="font-mono text-[0.6rem] text-[#5A6880] uppercase tracking-widest mb-2">#8 Hierarchy</div>
          <h4 className="font-display text-[0.9rem] font-bold text-white mb-3">Treemap</h4>
          <svg viewBox="0 0 200 80" className="w-full h-20">
            <rect x="0" y="0" width="80" height="80" fill="#F5C842" opacity="0.85" />
            <rect x="80" y="0" width="120" height="40" fill="#00D4AA" opacity="0.75" />
            <rect x="80" y="40" width="60" height="40" fill="#9B72FF" opacity="0.8" />
            <rect x="140" y="40" width="60" height="25" fill="#22D47A" opacity="0.8" />
            <rect x="140" y="65" width="60" height="15" fill="#4E9EFF" opacity="0.8" />
            <text x="40" y="44" fontSize="9" textAnchor="middle" fill="#000" fontFamily="monospace" fontWeight="bold">40%</text>
            <text x="140" y="24" fontSize="9" textAnchor="middle" fill="#000" fontFamily="monospace" fontWeight="bold">30%</text>
            <text x="110" y="64" fontSize="9" textAnchor="middle" fill="#fff" fontFamily="monospace" fontWeight="bold">15%</text>
          </svg>
          <div className="font-mono text-[0.6rem] text-[#7A8A9F] mt-3">Product category share</div>
        </div>
      </div>

      {/* Tag cloud */}
      <div className="card p-8 text-center">
        <div className="font-mono text-[0.68rem] text-[#5A6880] uppercase tracking-widest mb-5">Techniques & Methodologies I Apply</div>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { t: 'RFM Analysis', s: 1.3 }, { t: 'Cohort Analysis', s: 1.2 }, { t: 'K-Means Clustering', s: 1.1 },
            { t: 'Funnel Analysis', s: 1.3 }, { t: 'A/B Testing', s: 1 }, { t: 'Hypothesis Testing', s: 0.95 },
            { t: 'Time-Series Forecasting', s: 1.1 }, { t: 'Churn Prediction', s: 1 }, { t: 'Customer Segmentation', s: 1.25 },
            { t: 'DAX Measures', s: 1.3 }, { t: 'Star / Snowflake Schema', s: 1 }, { t: 'Medallion Architecture', s: 1.05 },
            { t: 'ETL / ELT', s: 1.1 }, { t: 'Data Modelling', s: 1.2 }, { t: 'Statistical Significance', s: 0.95 },
            { t: 'KPIs & Dashboards', s: 1.35 }, { t: 'Drill-Through', s: 0.9 }, { t: 'Market Basket Analysis', s: 1 },
          ].map((t) => (
            <span key={t.t} className="font-display font-semibold px-4 py-2 rounded-xl no-underline"
              style={{
                background: 'rgba(245,200,66,.06)',
                border: '1px solid rgba(245,200,66,.2)',
                color: '#F5C842',
                fontSize: `${t.s * 0.85}rem`,
              }}>
              {t.t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
