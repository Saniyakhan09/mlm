import { FiArrowRight, FiGitBranch, FiGrid, FiLayers, FiTrendingUp } from 'react-icons/fi'
import { FaBitcoin } from 'react-icons/fa'
import { Reveal } from './ui/reveal'
import { BlurredStagger } from './ui/blurred-stagger-text'

const STYLES = `
  @keyframes bento-wave   { 0%,100% { opacity:.2; transform:scale(.85) } 50% { opacity:1; transform:scale(1) } }
  @keyframes bento-pulse  { 0% { transform:scale(.5); opacity:.7 } 100% { transform:scale(2.4); opacity:0 } }
  @keyframes bento-grow   { 0%,100% { transform:scaleY(.35) } 50% { transform:scaleY(1) } }
  @keyframes bento-dash   { to { stroke-dashoffset:-24 } }
  @keyframes bento-float  { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-6px) } }
  @keyframes bento-sweepX { 0% { transform:translateX(-120%) } 100% { transform:translateX(320%) } }

  .b-wave  { animation: bento-wave 2.4s ease-in-out infinite }
  .b-pulse { animation: bento-pulse 2.6s ease-out infinite }
  .b-grow  { animation: bento-grow 1.8s ease-in-out infinite; transform-origin:bottom }
  .b-dash  { stroke-dasharray:5 5; animation: bento-dash 1.2s linear infinite }
  .b-float { animation: bento-float 3.5s ease-in-out infinite }
  .b-sweep { animation: bento-sweepX 2.6s ease-in-out infinite }

  @media (prefers-reduced-motion: reduce) {
    .b-wave,.b-pulse,.b-grow,.b-dash,.b-float,.b-sweep { animation: none !important }
  }
`

/* ── animated visuals ── */
function BinaryViz() {
  return (
    <svg viewBox="0 0 220 130" className="absolute inset-0 w-full h-full">
      <line x1="110" y1="34" x2="60" y2="96" stroke="#fb923c" strokeWidth="2" className="b-dash" />
      <line x1="110" y1="34" x2="160" y2="96" stroke="#fb923c" strokeWidth="2" className="b-dash" />
      <circle cx="110" cy="34" r="13" fill="url(#bg1)" className="b-float" />
      <circle cx="60" cy="100" r="11" fill="#fff" stroke="#fdba74" strokeWidth="2" className="b-float" style={{ animationDelay: '.4s' }} />
      <circle cx="160" cy="100" r="11" fill="#fff" stroke="#fdba74" strokeWidth="2" className="b-float" style={{ animationDelay: '.8s' }} />
      <defs>
        <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f97316" /><stop offset="1" stopColor="#f43f5e" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function MatrixViz() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-4 gap-2.5">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="b-wave w-7 h-7 rounded-md bg-gradient-to-br from-orange-400 to-rose-400" style={{ animationDelay: `${(i % 4) * 0.15 + Math.floor(i / 4) * 0.15}s` }} />
        ))}
      </div>
    </div>
  )
}

function UnilevelViz() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
      <span className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-rose-500 b-float" />
      <div className="flex gap-3">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="b-wave w-6 h-6 rounded-full border-2 border-orange-300 bg-white" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>
    </div>
  )
}

function CryptoViz() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative flex items-center gap-2 overflow-hidden px-4 py-3 rounded-xl">
        {[0, 1, 2].map((i) => (
          <span key={i} className="w-9 h-9 rounded-lg bg-white border border-orange-200 shadow-sm b-float" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
        <span className="absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-orange-300/50 to-transparent b-sweep" />
        <span className="absolute left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white text-xl b-float">
          <FaBitcoin />
        </span>
      </div>
    </div>
  )
}

function InvestViz() {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-2.5 pb-8 pt-6">
      {[0.5, 0.7, 0.55, 0.85, 1].map((h, i) => (
        <span key={i} className="b-grow w-6 rounded-t-md bg-gradient-to-t from-orange-500 to-rose-400" style={{ height: `${h * 70}px`, animationDelay: `${i * 0.18}s` }} />
      ))}
    </div>
  )
}

const cards = [
  { span: 'md:col-span-2 lg:col-span-3', viz: <BinaryViz />, icon: <FiGitBranch />, name: 'Binary Plan', desc: 'Two-leg structure with spillover & balanced volume payouts — built for fast, viral growth.' },
  { span: 'md:col-span-2 lg:col-span-3', viz: <MatrixViz />, icon: <FiGrid />, name: 'Matrix Plan', desc: 'Forced matrix with fixed width & depth for steady, predictable, team-driven growth.' },
  { span: 'md:col-span-1 lg:col-span-2', viz: <UnilevelViz />, icon: <FiLayers />, name: 'Unilevel Plan', desc: 'Unlimited frontline width with simple level-based commissions.' },
  { span: 'md:col-span-1 lg:col-span-2', viz: <CryptoViz />, icon: <FaBitcoin />, name: 'Crypto MLM Plan', desc: 'Blockchain payouts, crypto wallets & smart-contract rewards.' },
  { span: 'md:col-span-2 lg:col-span-2', viz: <InvestViz />, icon: <FiTrendingUp />, name: 'Investment Plan', desc: 'ROI & daily-return plans with automated payout scheduling.' },
]

const MORE_PLANS = [
  'Generation', 'Board / Cycle', 'Monoline', 'Party', 'Stair Step', 'Gift / Donation',
  'Hybrid', 'Crowdfunding', 'Affiliate / Growth', 'Australian X-Up', 'Differential 50-50', 'Custom',
]

export default function Plans() {
  return (
    <section id="plans" className="relative py-14 px-4 bg-gradient-to-b from-orange-50/60 via-white to-white overflow-hidden">
      <style>{STYLES}</style>
      <div className="pointer-events-none absolute top-1/4 -right-24 w-96 h-96 bg-rose-200/30 rounded-full blur-[130px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-orange-200 bg-orange-50 text-sm font-semibold text-orange-700">
            All MLM Compensation Plans
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">
            <BlurredStagger text="MLM Plans" />
            <BlurredStagger text="We Build" className="text-orange-500" />
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            Whatever your business model, we have a ready-to-deploy and fully customizable plan — or we&apos;ll build yours from scratch.
          </p>
        </Reveal>

        {/* bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          {cards.map((c, i) => (
            <Reveal
              key={c.name}
              delay={(i % 3) * 0.08}
              className={`group ${c.span} rounded-3xl bg-white border border-slate-100 shadow-card hover:shadow-soft hover:-translate-y-1 transition duration-300 overflow-hidden flex flex-col`}
            >
              {/* animated visual */}
              <div className="relative h-44 bg-gradient-to-br from-orange-50 to-rose-50 border-b border-orange-100/60 overflow-hidden">
                {c.viz}
              </div>
              {/* text */}
              <div className="p-6">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-rose-500 text-white">
                    {c.icon}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{c.name}</h3>
                </div>
                <p className="text-black text-sm leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}

          {/* wide "all plans" card */}
          <Reveal className="md:col-span-2 lg:col-span-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-7 md:p-9 overflow-hidden relative">
            <div className="pointer-events-none absolute -top-16 -right-10 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl"></div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold mb-3">16+ compensation plans, all customizable</h3>
                <div className="flex flex-wrap gap-2 max-w-3xl">
                  {MORE_PLANS.map((p) => (
                    <span key={p} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-slate-200">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <a href="#enquiry" className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-rose-500 shadow-lg shadow-orange-500/30 hover:scale-105 transition duration-300">
                Discuss your plan <FiArrowRight />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
