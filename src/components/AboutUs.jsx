import { FiArrowRight, FiCheck, FiSettings } from 'react-icons/fi'
import { BlurredStagger } from './ui/blurred-stagger-text'

const stats = [
  { value: '16+', label: 'Years of Experience' },
  { value: '10,000+', label: 'Global Installations' },
  { value: '8,000+', label: 'Organizations' },
  { value: '200+', label: 'Active Projects' },
]

const points = [
  { title: 'Proven Track Record', text: '16+ years serving the MLM industry' },
  { title: 'Comprehensive Solutions', text: 'Every compensation plan, customizable' },
  { title: 'Advanced Technology', text: 'Crypto, blockchain & binary matrix' },
  { title: '24/7 Dedicated Support', text: 'A team that stays with you' },
]

export default function AboutUs() {
  return (
    <section id="about" className="relative py-14 md:py-16 px-4 bg-gradient-to-b from-white via-orange-50/40 to-white overflow-hidden">
      <div className="pointer-events-none absolute top-40 -left-24 w-96 h-96 bg-orange-200/30 rounded-full blur-[130px]"></div>
      <div className="pointer-events-none absolute bottom-20 -right-24 w-96 h-96 bg-rose-200/30 rounded-full blur-[130px]"></div>
      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section heading ── */}
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-orange-200 bg-orange-50 text-sm font-semibold text-orange-700">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            About Us
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            <BlurredStagger text="Who We Are" />
          </h2>
          <p className="mt-4 text-lg text-black">
            A trusted MLM software partner helping network marketing businesses grow for 16+ years.
          </p>
        </div>

        {/* ── Statement block ── */}
        <div className="border-t border-slate-200 pt-10">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* label + highlight card */}
            <div className="lg:col-span-4 lg:pr-6">
              <div className="flex items-center gap-2 text-sm font-medium text-black mb-6">
                <FiSettings className="text-orange-500" /> Statement
              </div>
              <div className="relative rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 text-white p-6 overflow-hidden shadow-lg shadow-orange-500/25">
                <div className="pointer-events-none absolute -top-10 -right-8 w-32 h-32 rounded-full bg-white/20 blur-2xl"></div>
                <span className="relative block text-6xl leading-none mb-1 text-white/90 font-serif">&ldquo;</span>
                <p className="relative font-semibold leading-relaxed text-lg">
                  We don&apos;t sell promises — we deliver MLM solutions that scale.
                </p>
                <p className="relative mt-4 text-sm text-white/80 font-medium">— Team MLM Software</p>
              </div>
            </div>

            {/* statement */}
            <div className="lg:col-span-8 lg:border-l lg:border-slate-200 lg:pl-12">
              <p className="text-2xl md:text-[1.9rem] lg:text-[2.05rem] leading-[1.45] tracking-tight text-slate-700 font-normal">
                MLM Software was founded on the principle that enduring
                network&#8209;marketing success is created through{' '}
                <span className="text-slate-900 font-medium">reliable technology, transparent payouts, and long&#8209;term partnership.</span>{' '}
                We build with patience, clarity, and responsibility across every compensation plan.
              </p>

              <a href="#products" className="group inline-flex items-center gap-2 mt-9 text-sm font-semibold">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 text-slate-900 group-hover:border-orange-400 group-hover:text-orange-600 transition">
                  See how we work <FiArrowRight className="group-hover:translate-x-0.5 transition" />
                </span>
              </a>
            </div>
          </div>

          {/* corner meta labels */}
          <div className="mt-14 pt-6 border-t border-slate-200 flex justify-between text-[11px] font-bold uppercase tracking-[0.18em] text-black">
            <span>Long-Term Focus</span>
            <span>Disciplined Execution</span>
          </div>
        </div>

        {/* ── Approach block ── */}
        <div className="mt-24 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* left: heading + checklist */}
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-black mb-5">
              <FiSettings className="text-orange-500" /> Our Approach
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-semibold tracking-tight text-slate-900 leading-[1.15] mb-5">
              <BlurredStagger text="Building Long-Term Value Through Discipline" />
            </h2>
            <p className="text-black text-lg leading-relaxed mb-9 max-w-xl">
              For 16+ years we&apos;ve aligned technology, operations, and support to help
              8,000+ organizations scale with confidence. No shortcuts — just dependable
              software and a team that stays with you.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {points.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 mt-0.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600">
                    <FiCheck className="text-xs" />
                  </span>
                  <span>
                    <strong className="block text-slate-900 font-semibold">{p.title}</strong>
                    <span className="text-sm text-black">{p.text}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* right: clean stat panel */}
          <div>
            <div className="grid grid-cols-2 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-card">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`group p-5 sm:p-7 bg-white hover:bg-orange-50/60 transition duration-300 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''} border-slate-200`}
                >
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent group-hover:scale-105 transition origin-left">
                    {s.value}
                  </div>
                  <p className="mt-2 text-sm text-black">{s.label}</p>
                </div>
              ))}
            </div>

            {/* certifications */}
            <div className="mt-5 flex flex-wrap gap-2">
              {['CMMI Level 3', 'ISO Certified', 'Trusted Partner'].map((c) => (
                <span key={c} className="px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-black">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
