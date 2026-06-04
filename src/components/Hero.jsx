import { useState } from 'react'
import {
  FiArrowRight, FiUser, FiPhone, FiMail, FiLayers, FiMessageSquare,
  FiCheck, FiTrendingUp, FiUsers, FiWifi, FiBatteryCharging,
} from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi2'
import { FlipWords } from './ui/flip-words'

const MLM_PLANS = [
  'Binary Plan', 'Matrix Plan', 'Unilevel Plan', 'Hybrid Plan', 'Board Plan',
  'Generation Plan', 'Monoline Plan', 'Party Plan', 'Stair Step Plan',
  'Gift / Donation Plan', 'Investment / HYIP Plan', 'Crowdfunding Plan',
  'Affiliate / Growth Plan', 'Crypto MLM Plan', 'Other / Custom',
]

const AVATARS = [
  { i: 'R', c: 'bg-rose-400' },
  { i: 'A', c: 'bg-amber-400' },
  { i: 'P', c: 'bg-emerald-400' },
  { i: 'S', c: 'bg-sky-400' },
]

export default function Hero() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', plan: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', plan: '', message: '' })
    }, 3200)
  }

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden px-4 pt-10 pb-12 md:pt-12 md:pb-16
                 bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50"
    >
      {/* warm sun glow + soft blobs */}
      <div className="pointer-events-none absolute -top-32 right-[-6rem] w-[34rem] h-[34rem] rounded-full bg-gradient-to-br from-amber-300/60 via-orange-300/40 to-transparent blur-[90px]"></div>
      <div className="pointer-events-none absolute bottom-[-8rem] left-[-6rem] w-[28rem] h-[28rem] rounded-full bg-rose-200/50 blur-[110px]"></div>
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* ── LEFT ── */}
        <div className="animate-fade-in-up text-center lg:text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-6 rounded-full border border-orange-200/70 bg-white shadow-sm text-[13px] font-semibold text-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <HiSparkles className="text-amber-500" />
            Loved by 8,000+ organizations worldwide
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900 mb-5">
            Unlock Network Growth with
            <br className="hidden sm:block" />
            <FlipWords
              words={['Smart', 'Powerful', 'Scalable', 'Future-Ready']}
              className="!px-0 italic font-extrabold text-orange-500"
            />
            <span className="italic font-bold bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              MLM Software
            </span>
          </h1>

          <p className="text-black text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Take control of your network marketing with every compensation plan,
            real-time analytics, crypto-ready payouts, and seamless integration —
            backed by <span className="font-semibold text-slate-800">16+ years</span> of expertise.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-9">
            <a href="#enquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white
                         bg-gradient-to-r from-orange-500 to-rose-500 shadow-lg shadow-orange-500/30
                         hover:shadow-xl hover:scale-105 transition duration-300">
              Get a Free Quote <FiArrowRight />
            </a>
            <a href="#products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold
                         text-slate-800 bg-white border border-slate-200 shadow-sm
                         hover:border-orange-300 hover:text-orange-600 transition duration-300">
              Book a Demo
            </a>
          </div>

          {/* social proof */}
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {AVATARS.map((a, i) => (
                <span key={i}
                  className={`inline-flex items-center justify-center w-9 h-9 rounded-full ${a.c} text-white text-sm font-bold ring-2 ring-white`}>
                  {a.i}
                </span>
              ))}
            </div>
            <p className="text-sm text-black">
              <span className="font-bold text-slate-900">10,000+</span> installations · 16+ years
            </p>
          </div>
        </div>

        {/* ── RIGHT: PHONE MOCKUP WITH FORM ── */}
        <div className="relative flex justify-center lg:justify-end animate-slide-up pt-8 lg:pt-0">
          {/* floating stat card — top */}
          {/* <div className="hidden sm:flex absolute left-0 lg:-left-6 top-2 z-20 items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-card border border-slate-100 animate-float">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 text-xl"><FiTrendingUp /></span>
            <div className="text-left">
              <p className="text-xs text-black font-medium">Total Payouts</p>
              <p className="text-base font-extrabold text-slate-900">₹240.8L <span className="text-emerald-500 text-xs font-semibold">+2.6%</span></p>
            </div>
          </div> */}

          {/* floating stat card — bottom
          <div className="hidden sm:flex absolute left-0 lg:-left-10 bottom-6 z-20 items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-card border border-slate-100 animate-float" style={{ animationDelay: '3s' }}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-orange-600 text-xl"><FiUsers /></span>
            <div className="text-left">
              <p className="text-xs text-black font-medium">Active Members</p>
              <p className="text-base font-extrabold text-slate-900">8,000+</p>
            </div>
          </div> */}

          {/* phone frame */}
          <div className="relative w-[378px] max-w-full rounded-[3rem] bg-slate-900 p-3.5 shadow-2xl ring-1 ring-black/10">
            {/* side buttons */}
            <span className="absolute -left-[3px] top-24 w-[3px] h-7 rounded-l-md bg-slate-700"></span>
            <span className="absolute -left-[3px] top-36 w-[3px] h-12 rounded-l-md bg-slate-700"></span>
            <span className="absolute -left-[3px] top-52 w-[3px] h-12 rounded-l-md bg-slate-700"></span>
            <span className="absolute -right-[3px] top-44 w-[3px] h-16 rounded-r-md bg-slate-700"></span>

            {/* screen */}
            <div className="relative rounded-[2.4rem] bg-white overflow-hidden">
              {/* dynamic island / notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-28 h-7 bg-slate-900 rounded-full"></div>

              {/* status bar */}
              <div className="flex items-center justify-between px-6 pt-3.5 pb-1 text-[12px] font-semibold text-slate-800">
                <span>9:41</span>
                <span className="flex items-center gap-1.5"><FiWifi /> <FiBatteryCharging /></span>
              </div>

              {/* app header */}
              <div className="px-5 pt-2 pb-2.5 bg-gradient-to-br from-orange-500 to-rose-500 text-white">
                <p className="text-[9px] uppercase tracking-wide leading-none opacity-90 mb-0.5">Quick Enquiry</p>
                <h2 className="text-[15px] font-extrabold leading-tight">Get a Free Quote</h2>
                <p className="text-[10px] mt-0.5 opacity-90 flex items-center gap-1">
                  <FiCheck className="text-[11px]" /> 100% safe &amp; confidential
                </p>
              </div>

              {/* form / success */}
              <div className="px-5 py-3.5">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 gap-3">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl">
                      <FiCheck />
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900">Enquiry Sent!</h3>
                    <p className="text-sm text-black">Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2.5">
                    <div>
                      <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-black mb-1"><FiUser className="text-orange-500" /> FULL NAME</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-orange-400 transition" />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-black mb-1"><FiPhone className="text-orange-500" /> PHONE</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required
                          className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-orange-400 transition" />
                      </div>
                      <div>
                        <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-black mb-1"><FiMail className="text-orange-500" /> EMAIL</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required
                          className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-orange-400 transition" />
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-black mb-1"><FiLayers className="text-orange-500" /> MLM PLAN</label>
                      <select name="plan" value={formData.plan} onChange={handleChange} required
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:border-orange-400 transition">
                        <option value="">Choose a plan…</option>
                        {MLM_PLANS.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-black mb-1"><FiMessageSquare className="text-orange-500" /> MESSAGE</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your requirement" rows="2"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-orange-400 transition resize-none"></textarea>
                    </div>

                    <button type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-sm text-white
                                 bg-gradient-to-r from-orange-500 to-rose-500 shadow-lg shadow-orange-500/30 hover:scale-[1.02] transition">
                      Submit Enquiry <FiArrowRight />
                    </button>
                    <p className="text-center text-[10px] text-black">We reply within 24 hours · No spam</p>
                  </form>
                )}
              </div>

              {/* home indicator */}
              <div className="flex justify-center pb-2.5 pt-0.5">
                <span className="w-28 h-1.5 rounded-full bg-slate-300"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
