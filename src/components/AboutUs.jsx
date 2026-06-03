import { FiAward, FiGlobe, FiUsers, FiCheck } from 'react-icons/fi'

export default function AboutUs() {
  const stats = [
    { icon: <FiAward />, value: '16+', label: 'Years of Experience' },
    { icon: <FiGlobe />, value: '10000+', label: 'Global Installations' },
    { icon: <FiUsers />, value: '8000+', label: 'Organizations Trust Us' },
  ]

  const points = [
    { title: 'Proven Track Record', text: '16+ years serving the MLM industry' },
    { title: 'Comprehensive Solutions', text: 'Multi-level, Referral, Direct Sales, and more' },
    { title: 'Advanced Technology', text: 'Cryptocurrency support and binary matrix' },
    { title: '24/7 Support', text: 'Dedicated customer support team' },
    { title: 'Customizable Plans', text: 'Tailored solutions for your business' },
  ]

  return (
    <section className="relative py-20 px-4 bg-dark-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-white/15 bg-white/5 text-sm font-medium text-gray-300">
          About Us
        </div>
        <h2 className="text-4xl font-bold mb-4 text-gradient max-w-2xl">
          A leading provider of premium MLM software
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-3xl">
          With 16+ years of experience, we have helped thousands of organizations achieve
          their network marketing goals with reliable, scalable technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-effect rounded-2xl p-8 text-center border border-white/10 hover:border-accent-blue/40 hover:-translate-y-1 transition duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue text-2xl text-white">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2 text-gradient">{stat.value}</div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="glass-effect rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 mt-0.5 rounded-full bg-accent-cyan/20 text-accent-cyan">
                  <FiCheck className="text-sm" />
                </span>
                <span className="text-gray-300">
                  <strong className="text-white">{point.title}:</strong> {point.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
