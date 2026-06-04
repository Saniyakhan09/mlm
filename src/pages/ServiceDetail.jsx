import { useParams, Link, Navigate } from 'react-router-dom'
import { FiCheck, FiArrowRight, FiArrowLeft, FiChevronRight } from 'react-icons/fi'
import { services, getService } from '../data/services.jsx'
import CTA from '../components/CTA'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) return <Navigate to="/" replace />

  const others = services.filter((s) => s.slug !== slug).slice(0, 6)

  return (
    <>
      {/* hero */}
      <section className="relative px-4 pt-14 pb-16 md:pt-20 md:pb-20 bg-gradient-to-br from-orange-50 via-white to-rose-50 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-[-6rem] w-[30rem] h-[30rem] rounded-full bg-amber-300/40 blur-[110px]"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-black mb-8">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <FiChevronRight className="text-slate-300" />
            <Link to="/#products" className="hover:text-orange-600">Services</Link>
            <FiChevronRight className="text-slate-300" />
            <span className="text-slate-800 font-medium truncate">{service.title}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-rose-500 text-4xl text-white shadow-lg shadow-orange-500/30 flex-shrink-0">
              {service.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">{service.title}</h1>
              <p className="text-lg text-black max-w-2xl">{service.tagline}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="/#enquiry" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-rose-500 shadow-lg shadow-orange-500/30 hover:scale-105 transition">
              Get a Free Quote <FiArrowRight />
            </a>
            <Link to="/#products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-800 bg-white border border-slate-200 hover:border-orange-300 hover:text-orange-600 transition">
              <FiArrowLeft /> All Services
            </Link>
          </div>
        </div>
      </section>

      {/* body */}
      <section className="px-4 py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* overview */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">Overview</h2>
            {service.long.map((p, i) => (
              <p key={i} className="text-black text-lg leading-relaxed mb-5">{p}</p>
            ))}

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-5">Key Features</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 mt-0.5 rounded-full bg-gradient-to-br from-orange-500 to-rose-500 text-white">
                    <FiCheck className="text-xs" />
                  </span>
                  <span className="text-slate-700">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* sidebar: other services */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-200 p-6 sticky top-28">
              <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-4">Other Services</h3>
              <ul className="space-y-1">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="group flex items-center gap-3 py-2 text-black hover:text-orange-600 transition">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-orange-50 text-orange-500 group-hover:bg-orange-100 transition">
                        {s.icon}
                      </span>
                      <span className="text-sm font-medium flex-1">{s.title}</span>
                      <FiArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
    </>
  )
}
