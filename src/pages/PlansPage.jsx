import { Link } from 'react-router-dom'
import { FiCheck, FiArrowRight, FiChevronRight } from 'react-icons/fi'
import { plans } from '../data/plans.jsx'
import { Reveal } from '../components/ui/reveal'
import CTA from '../components/CTA'

export default function PlansPage() {
  return (
    <>
      {/* hero */}
      <section className="relative px-4 pt-14 pb-16 md:pt-20 md:pb-20 bg-gradient-to-br from-orange-50 via-white to-rose-50 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-[-6rem] w-[30rem] h-[30rem] rounded-full bg-amber-300/40 blur-[110px]"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-black mb-6">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <FiChevronRight className="text-slate-300" />
            <span className="text-slate-800 font-medium">MLM Plans</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-orange-200 bg-white shadow-sm text-sm font-semibold text-orange-700">
            All MLM Compensation Plans
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            MLM Plans <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">We Build</span>
          </h1>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Explore every MLM compensation plan we develop. Whatever your business model,
            we have a ready-to-deploy and fully customizable plan — or we&apos;ll build yours from scratch.
          </p>
        </div>
      </section>

      {/* all plans */}
      <section className="px-4 py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={(i % 3) * 0.07}
              className="group flex flex-col rounded-2xl bg-white border border-slate-100 shadow-card hover:shadow-soft hover:-translate-y-1 transition duration-300 p-7"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 text-2xl text-white shadow-lg shadow-orange-500/25 group-hover:scale-110 group-hover:-rotate-6 transition duration-300">
                  {p.icon}
                </div>
                <span className="text-3xl font-extrabold leading-none text-slate-100 group-hover:text-orange-200 transition tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 mb-2">{p.name}</h2>
              <p className="text-black text-sm leading-relaxed mb-5">{p.desc}</p>

              <ul className="space-y-2 mb-6 flex-grow">
                {p.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-black">
                    <FiCheck className="flex-shrink-0 mt-0.5 text-orange-500" /> {f}
                  </li>
                ))}
              </ul>

              <Link
                to={`/plans/${p.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:gap-3 transition-all"
              >
                View full details <FiArrowRight />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
