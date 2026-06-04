import {
  FiMessageCircle, FiHeadphones, FiSmartphone, FiMessageSquare,
  FiCreditCard, FiTag, FiSliders,
} from 'react-icons/fi'
import { FaRobot } from 'react-icons/fa'
import { Reveal } from './ui/reveal'
import { BlurredStagger } from './ui/blurred-stagger-text'

const features = [
  { icon: <FiMessageCircle />, title: 'Live Chat System', desc: 'Turn conversations into conversions with a built-in live chat that adds a human touch to your sales.', color: 'from-orange-500 to-rose-500' },
  { icon: <FiHeadphones />, title: '24 × 7 Support', desc: 'Round-the-clock customer support, always ready to help you with any question — anytime.', color: 'from-rose-500 to-pink-500' },
  { icon: <FiSmartphone />, title: 'Mobilized Back Office', desc: 'A fully mobile-ready back office so you and your team can manage the network on the go.', color: 'from-amber-500 to-orange-500' },
  { icon: <FaRobot />, title: 'Bot Development', desc: 'Smart bots that automate repetitive tasks and make managing your work effortless.', color: 'from-orange-500 to-amber-500' },
  { icon: <FiMessageSquare />, title: 'SMS Integration', desc: 'Plug in any SMS API and let your MLM software do all the heavy lifting for you.', color: 'from-pink-500 to-rose-500' },
  { icon: <FiCreditCard />, title: 'Payment Gateway Integration', desc: 'A full suite of secure payment processing options for seamless direct selling.', color: 'from-rose-500 to-orange-500' },
  { icon: <FiTag />, title: 'Ticket Center System', desc: 'Manage e-pins, raise tickets and keep every transaction fully secure and tracked.', color: 'from-amber-500 to-rose-500' },
  { icon: <FiSliders />, title: 'Customize Software', desc: 'We tailor every feature of the software exactly to your unique business requirements.', color: 'from-orange-500 to-rose-500' },
]

export default function Features() {
  return (
    <section className="relative py-14 px-4 bg-white overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-orange-200/25 rounded-full blur-[130px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-orange-200 bg-orange-50 text-sm font-semibold text-orange-700">
            Why Choose Our Software
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 leading-tight">
            <BlurredStagger text="How Our Network Marketing Software Helps You" />
            <BlurredStagger text="Drive Your MLM Business" className="text-orange-500" />
          </h2>
          <p className="text-black text-lg">
            Our software helps customers achieve their network marketing goals with diverse,
            ready-to-use solutions — a true roadmap to lasting success.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.08} className="group text-center sm:text-left">
              <div className={`inline-flex items-center justify-center w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br ${f.color} text-2xl text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 group-hover:-rotate-6 transition duration-300`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-black text-sm leading-relaxed">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
