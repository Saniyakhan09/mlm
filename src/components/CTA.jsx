import { FiArrowRight, FiPhoneCall } from 'react-icons/fi'
import { HiCubeTransparent } from 'react-icons/hi2'

export default function CTA() {
  return (
    <section className="relative pt-12 pb-8 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-[2.25rem] bg-gradient-to-br from-orange-50 via-white to-amber-50 ring-1 ring-orange-100 shadow-soft overflow-hidden px-6 py-16 md:px-16 md:py-20 text-center">
          {/* warm light glow sweep (reference vibe, on light) */}
          <div className="pointer-events-none absolute right-0 -top-1/3 bottom-0 w-[70%] bg-[radial-gradient(ellipse_at_right,rgba(251,146,60,0.45),rgba(251,191,36,0.2)_45%,transparent_72%)]"></div>
          <div className="pointer-events-none absolute -left-16 -bottom-10 w-72 h-72 rounded-full bg-rose-200/40 blur-[110px]"></div>
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-50"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* brand */}
            <div className="inline-flex items-center gap-2 mb-8 text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-rose-500 text-white text-lg shadow-md shadow-orange-500/30">
                <HiCubeTransparent />
              </span>
              MLM Software
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-[1.05] tracking-tight text-slate-900">
              Realize Your{' '}
              <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">Network Vision</span>
            </h2>
            <p className="text-lg text-black mb-10 max-w-xl mx-auto">
              Join 8,000+ organizations using our MLM software to streamline operations
              and accelerate growth. We sell solutions — not promises.
            </p>

            <div className="flex gap-3.5 justify-center flex-wrap">
              <a href="#enquiry" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-orange-500/30 hover:scale-105 transition duration-300">
                Get a Free Demo <FiArrowRight />
              </a>
              <a href="tel:+910000000000" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 hover:border-orange-300 hover:text-orange-600 font-bold py-3.5 px-8 rounded-xl shadow-sm transition duration-300">
                <FiPhoneCall /> Talk to Experts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
