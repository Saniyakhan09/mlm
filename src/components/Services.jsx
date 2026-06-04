import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { Reveal } from './ui/reveal'
import { BlurredStagger } from './ui/blurred-stagger-text'
import { services } from '../data/services.jsx'

const VIZ_STYLES = `
  @keyframes svc-sonar   { 0% { transform: scale(.55); opacity: .7 } 100% { transform: scale(2.6); opacity: 0 } }
  @keyframes svc-float   { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
  @keyframes svc-glow    { 0%,100% { box-shadow: 0 0 16px rgba(249,115,22,.30) } 50% { box-shadow: 0 0 30px rgba(249,115,22,.55) } }
  @keyframes svc-pulse   { 0%,100% { opacity: 1 } 50% { opacity: .3 } }
  @keyframes svc-shimmer { 0% { background-position: -150% 0 } 100% { background-position: 250% 0 } }
  @keyframes svc-spin    { to { transform: rotate(360deg) } }
  @keyframes svc-toggle      { 0%,42% { transform: translateX(0) } 58%,100% { transform: translateX(16px) } }
  @keyframes svc-toggle-bg   { 0%,42% { background: rgba(148,163,184,.35) } 58%,100% { background: rgba(249,115,22,.55) } }
  @keyframes svc-toggle-knob { 0%,42% { background: #94a3b8 } 58%,100% { background: #f97316 } }
  @keyframes svc-bg-pan {
    0%   { background-position: 0% 0%, 100% 100%, 50% 50% }
    50%  { background-position: 100% 50%, 0% 50%, 70% 40% }
    100% { background-position: 0% 0%, 100% 100%, 50% 50% }
  }

  .svc-darkbg {
    background:
      radial-gradient(55% 50% at 18% 12%, rgba(249,115,22,0.28), transparent 60%),
      radial-gradient(50% 50% at 88% 82%, rgba(244,63,94,0.22), transparent 60%),
      radial-gradient(45% 45% at 62% 48%, rgba(251,146,60,0.16), transparent 60%);
    background-size: 200% 200%, 200% 200%, 200% 200%;
    animation: svc-bg-pan 16s ease-in-out infinite;
  }

  .svc-bar {
    background: linear-gradient(90deg, rgba(148,163,184,.25), rgba(100,116,139,.55), rgba(148,163,184,.25));
    background-size: 200% 100%;
    animation: svc-shimmer 2.4s linear infinite;
  }
  .svc-sonar { animation: svc-sonar 2.6s ease-out infinite }
  .svc-float { animation: svc-float 4s ease-in-out infinite, svc-glow 3s ease-in-out infinite }
  .svc-spin-slow { animation: svc-spin 14s linear infinite }
  .svc-pulse { animation: svc-pulse 1.8s ease-in-out infinite }
  .svc-toggle-track { animation: svc-toggle-bg 3.2s ease-in-out infinite }
  .svc-toggle-knob  { animation: svc-toggle 3.2s ease-in-out infinite, svc-toggle-knob 3.2s ease-in-out infinite }

  @media (prefers-reduced-motion: reduce) {
    .svc-bar,.svc-sonar,.svc-float,.svc-spin-slow,.svc-pulse,.svc-toggle-track,.svc-toggle-knob,.svc-darkbg { animation: none !important }
  }
`

function Viz({ type, icon }) {
  if (type === 'rows') {
    return (
      <div className="absolute inset-0 flex flex-col justify-center gap-2 px-5">
        {[0, 1, 2].map((r) => (
          <div key={r} className="flex items-center gap-2.5 rounded-lg border border-slate-100 bg-white shadow-sm px-3 py-2">
            <span className="w-5 h-5 rounded-md bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center text-[9px] text-white svc-pulse" style={{ animationDelay: `${r * 0.3}s` }}>{['A', 'B', 'C'][r]}</span>
            <span className="h-1.5 rounded-full svc-bar" style={{ width: `${70 - r * 14}%`, animationDelay: `${r * 0.25}s` }}></span>
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500 svc-pulse" style={{ animationDelay: `${r * 0.4}s` }}></span>
          </div>
        ))}
      </div>
    )
  }
  if (type === 'panel') {
    return (
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="w-full rounded-xl border border-slate-200 bg-white shadow-sm p-3.5">
          <div className="flex items-center justify-between mb-3">
            <span className="h-2 w-16 rounded-full svc-bar"></span>
            <span className="svc-toggle-track w-8 h-4 rounded-full relative flex items-center px-0.5">
              <span className="svc-toggle-knob w-3 h-3 rounded-full"></span>
            </span>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full rounded-full svc-bar" style={{ animationDelay: '0.3s' }}></div>
            <div className="h-2 w-3/4 rounded-full svc-bar" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </div>
    )
  }
  // rings — radar / sonar pulse
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute w-40 h-40 rounded-full border border-dashed border-slate-300/70 svc-spin-slow"></div>
      <div className="absolute w-28 h-28 rounded-full border border-slate-200"></div>
      {/* expanding sonar rings */}
      <span className="absolute w-14 h-14 rounded-full border border-orange-400/60 svc-sonar"></span>
      <span className="absolute w-14 h-14 rounded-full border border-orange-400/60 svc-sonar" style={{ animationDelay: '1.3s' }}></span>
      {/* center icon */}
      <div className="svc-float relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center text-xl text-white">
        {icon}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="products" className="relative py-14 px-4 overflow-hidden bg-slate-950">
      <style>{VIZ_STYLES}</style>
      {/* background video */}
      <video
        className="pointer-events-none absolute inset-0 w-full h-full object-cover z-0"
        src="/bg1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* readability overlays */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-slate-950/55 via-slate-900/45 to-slate-950/60"></div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.18),transparent_55%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-semibold text-orange-200">
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            <BlurredStagger text="Our MLM Software" />
            <BlurredStagger text="Services" className="text-orange-400" />
          </h2>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">
            A complete suite of MLM software services, engineered to help your network marketing business scale.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 0.08}
              className="group relative rounded-2xl border border-slate-100 bg-white shadow-card overflow-hidden
                         hover:shadow-soft hover:-translate-y-1 hover:border-orange-200 transition duration-300"
            >
              <div className="relative p-5 h-full flex flex-col">
                {/* preview pane */}
                <div className="relative h-40 rounded-xl border border-orange-100/70 bg-gradient-to-br from-orange-50 to-rose-50 overflow-hidden mb-5">
                  <Viz type={s.viz} icon={s.icon} />
                </div>

                {/* text */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-black text-sm leading-relaxed mb-5 flex-grow">{s.desc}</p>
                <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition">
                  View Details <FiArrowRight className="group-hover:translate-x-0.5 transition" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
