import { FiArrowRight, FiPhoneCall } from 'react-icons/fi'

export default function CTA() {
  return (
    <section className="relative py-20 px-4 bg-dark-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none"></div>
      <div className="absolute -top-20 left-1/3 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute -bottom-20 right-1/3 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gradient leading-tight">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join 8000+ organizations already using our MLM software to streamline their
          network marketing operations and accelerate growth.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold py-3 px-8 rounded-lg text-lg hover:shadow-lg hover:shadow-accent-blue/50 hover:scale-105 transition duration-300">
            Get Free Demo <FiArrowRight />
          </button>
          <button className="inline-flex items-center gap-2 border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            <FiPhoneCall /> Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}
