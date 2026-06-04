import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  { q: 'What is MLM software?', a: 'MLM (multi-level marketing) software automates your network marketing business — managing distributors, genealogy trees, commissions, payouts, and compensation plans from a single platform.' },
  { q: 'Which compensation plans do you support?', a: 'All of them — Binary, Matrix, Unilevel, Generation, Board, Monoline, Party, Stair Step, Gift, Hybrid, Investment, Crypto and more. We can also build a fully custom plan.' },
  { q: 'How long does implementation take?', a: 'A standard setup takes 2–4 weeks depending on complexity and customization. We keep you updated at every milestone until go-live.' },
  { q: 'Do you provide a mobile app?', a: 'Yes. We build native Android & iOS apps so your distributors can track their network, earnings, and payouts on the go.' },
  { q: 'Is cryptocurrency & payment gateway supported?', a: 'Absolutely. We offer full crypto/blockchain wallet integration along with leading payment gateways for secure global transactions.' },
  { q: 'Can the software be customized?', a: 'Every solution is tailored to your business model, branding, and workflow. Nothing is one-size-fits-all.' },
  { q: 'Do you offer support after delivery?', a: 'Yes — 24/7 support with a dedicated account manager, plus training, maintenance, and future enhancements.' },
  { q: 'Is a free demo available?', a: 'Of course. Submit the enquiry form or call us, and we will schedule a free, no-obligation demo for your team.' },
]

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition hover:border-orange-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
      >
        <span className="font-semibold text-slate-900">{item.q}</span>
        <FiChevronDown className={`flex-shrink-0 text-black transition-transform duration-300 ${open ? 'rotate-180 text-orange-500' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm text-black leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const toggle = (i) => setOpen((cur) => (cur === i ? -1 : i))

  const left = faqs.filter((_, i) => i % 2 === 0)
  const right = faqs.filter((_, i) => i % 2 === 1)

  return (
    <section id="faq" className="pt-8 pb-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-orange-200 bg-orange-50 text-sm font-semibold text-orange-700">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            {left.map((item, i) => {
              const idx = i * 2
              return <FaqItem key={idx} item={item} open={open === idx} onToggle={() => toggle(idx)} />
            })}
          </div>
          <div className="space-y-4">
            {right.map((item, i) => {
              const idx = i * 2 + 1
              return <FaqItem key={idx} item={item} open={open === idx} onToggle={() => toggle(idx)} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
