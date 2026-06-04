import { FaWhatsapp, FaCheckDouble } from 'react-icons/fa'
import { FiArrowLeft, FiVideo, FiPhone, FiMoreVertical, FiLock, FiPlus, FiMic, FiStar } from 'react-icons/fi'
import { BlurredStagger } from './ui/blurred-stagger-text'

const MARQUEE_STYLES = `
  @keyframes wa-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
  .wa-track { animation: wa-marquee 38s linear infinite; width: max-content; }
  .wa-marquee:hover .wa-track { animation-play-state: paused; }
  @media (prefers-reduced-motion: reduce) { .wa-track { animation: none } }
`

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'Success Network, India',
    messages: [
      { me: false, text: "Hi, I'm interested in your MLM software 🙏", time: '10:30 AM' },
      { me: true, text: 'Hello Rajesh! Thanks for reaching out. How can we help you today?', time: '10:35 AM' },
      { me: false, text: 'Can you tell me about your compensation plans?', time: '10:40 AM' },
      { me: true, text: 'Sure! We support Binary, Matrix, Unilevel & more. Sharing details 📄', time: '10:42 AM' },
      { me: false, text: "This looks perfect for our business. Let's proceed 👍", time: '10:50 AM' },
    ],
  },
  {
    id: 2,
    name: 'Priya Singh',
    company: 'Growth Solutions Ltd',
    messages: [
      { me: false, text: 'We need a mobile app for our MLM business', time: '2:15 PM' },
      { me: true, text: 'Perfect! We build native Android & iOS apps. Want a quick demo?', time: '2:20 PM' },
      { me: false, text: 'The interface looks really intuitive! 😊', time: '2:30 PM' },
      { me: true, text: 'Thank you! UX is our priority. Shall we discuss pricing?', time: '2:35 PM' },
      { me: false, text: 'Yes! Very impressed with your service 🙌', time: '2:45 PM' },
    ],
  },
  {
    id: 3,
    name: 'Amit Patel',
    company: 'Digital Commerce Hub',
    messages: [
      { me: false, text: 'Do you support cryptocurrency payouts?', time: '9:00 AM' },
      { me: true, text: 'Yes! Full crypto integration with blockchain wallets 🔗', time: '9:05 AM' },
      { me: false, text: "Amazing! That's exactly what we need", time: '9:10 AM' },
      { me: true, text: 'Great! We can fully customize it for your model 🚀', time: '9:15 AM' },
      { me: false, text: "Best decision ever. Let's make this happen! ✨", time: '9:20 AM' },
    ],
  },
  {
    id: 4,
    name: 'Neha Sharma',
    company: 'Elite Network Systems',
    messages: [
      { me: false, text: 'How long is the implementation process?', time: '3:30 PM' },
      { me: true, text: 'Usually 2-4 weeks depending on complexity — very quick! ⚡', time: '3:35 PM' },
      { me: false, text: 'Impressive! And what about support?', time: '3:40 PM' },
      { me: true, text: '24/7 support with a dedicated account manager 💼', time: '3:45 PM' },
      { me: false, text: 'Perfect! Excited to work with you 🎉', time: '3:50 PM' },
    ],
  },
]

function ChatCard({ t }) {
  return (
    <div className="w-[340px] sm:w-[360px] flex-shrink-0 rounded-[1.75rem] overflow-hidden shadow-card border border-slate-200 bg-white">
      {/* WhatsApp header */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#008069] text-white">
        <FiArrowLeft className="text-lg opacity-90" />
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/25 font-bold text-sm">
          {t.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0 leading-tight">
          <p className="font-semibold truncate text-[15px]">{t.name}</p>
          <p className="text-[11px] text-white/80">online</p>
        </div>
        <div className="flex items-center gap-4 text-white/90 text-base pr-1">
          <FiVideo /> <FiPhone /> <FiMoreVertical />
        </div>
      </div>

      {/* Chat body */}
      <div className="wa-wallpaper px-3 py-4 space-y-1.5" style={{ minHeight: '330px' }}>
        <div className="flex justify-center">
          <span className="px-3 py-1 rounded-md bg-white/80 text-[10px] font-medium text-black shadow-sm">TODAY</span>
        </div>
        <div className="flex justify-center pb-1">
          <span className="inline-flex items-center gap-1.5 max-w-[85%] text-center px-3 py-1.5 rounded-md bg-[#fdf4c9]/90 text-[9px] leading-snug text-amber-800 shadow-sm">
            <FiLock className="flex-shrink-0" /> Messages are end-to-end encrypted.
          </span>
        </div>

        {t.messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.me ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`relative max-w-[80%] px-2.5 py-1.5 rounded-lg shadow-sm text-[13px] leading-snug ${
                m.me ? 'bg-[#d9fdd3] text-slate-800 rounded-tr-none' : 'bg-white text-slate-800 rounded-tl-none'
              }`}
            >
              <span
                className={`absolute top-0 w-2 h-2 ${m.me ? '-right-1' : '-left-1'}`}
                style={{
                  background: m.me ? '#d9fdd3' : '#ffffff',
                  clipPath: m.me ? 'polygon(0 0, 100% 0, 0 100%)' : 'polygon(0 0, 100% 0, 100% 100%)',
                }}
              ></span>
              <p className="pr-12">{m.text}</p>
              <span className="absolute bottom-1 right-2 flex items-center gap-1 text-[9px] text-black">
                {m.time}
                {m.me && <FaCheckDouble className="text-[#53bdeb] text-[10px]" />}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* faux input bar */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#f0f2f5] border-t border-slate-200">
        <FiPlus className="text-black text-lg" />
        <div className="flex-1 bg-white rounded-full px-4 py-2 text-[12px] text-black border border-slate-200">Message</div>
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#008069] text-white"><FiMic /></span>
      </div>

      {/* rating footer */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white border-t border-slate-100">
        <span className="text-xs text-black">{t.company}</span>
        <span className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-amber-400 text-amber-400 text-xs" />)}
        </span>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-14 overflow-hidden">
      <style>{MARQUEE_STYLES}</style>
      <div className="pointer-events-none absolute top-1/3 -left-24 w-96 h-96 bg-orange-200/30 rounded-full blur-[130px]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-green-100 bg-green-50 text-sm font-semibold text-green-700">
            <FaWhatsapp className="text-green-600" /> Client Conversations
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">
            <BlurredStagger text="What Our" />
            <BlurredStagger text="Clients Say" className="text-orange-500" />
          </h2>
          <p className="text-black text-lg">Real conversations with happy clients across the globe</p>
        </div>
      </div>

      {/* scrolling marquee */}
      <div className="wa-marquee relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-white to-transparent"></div>

        <div className="wa-track flex gap-6 px-3">
          {[...testimonials, ...testimonials].map((t, i) => (
            <ChatCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-black mt-8">Hover to pause · real client chats</p>
    </section>
  )
}
