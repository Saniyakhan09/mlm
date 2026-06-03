import { FiUsers, FiShare2, FiDollarSign, FiPackage, FiSmartphone, FiGlobe, FiClipboard, FiArrowRight } from 'react-icons/fi'
import { FaBitcoin } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Multi-level Marketing Software",
      description: "A leading service provider of multi-level software solutions that give accelerated growth to businesses with various compensation plans.",
      icon: <FiUsers />
    },
    {
      id: 2,
      title: "Referral Based Marketing Software",
      description: "Minimize the hassles of generating referrals with our referral-based marketing software and experience marvelous growth year after year.",
      icon: <FiShare2 />
    },
    {
      id: 3,
      title: "Sales Commission Software",
      description: "Improve the efficacy of your sales by centralizing and automating commission-based plans with smart incentive structures.",
      icon: <FiDollarSign />
    },
    {
      id: 4,
      title: "Direct Sales Solutions",
      description: "Excellent MLM business compensation plans that promote direct selling with innovative, customized direct-selling software.",
      icon: <FiPackage />
    },
    {
      id: 5,
      title: "MLM Mobile App",
      description: "An innovative MLM mobile application that keeps pace with fast-moving technology and keeps your clients engaged with their customers.",
      icon: <FiSmartphone />
    },
    {
      id: 6,
      title: "Crypto Currency Integration",
      description: "Full cryptocurrency support with a binary-level matrix that streamlines your business using modern blockchain features.",
      icon: <FaBitcoin />
    },
    {
      id: 7,
      title: "MLM Web Design",
      description: "World-class software development services with fully responsive, modern website designs that take your brand to the next level.",
      icon: <FiGlobe />
    },
    {
      id: 8,
      title: "Product Management",
      description: "Customized product management software that brings an innovative approach to managing diverse products end-to-end.",
      icon: <FiClipboard />
    }
  ]

  return (
    <section id="products" className="relative py-20 px-4 bg-dark-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-white/15 bg-white/5 text-sm font-medium text-gray-300">
            What We Offer
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gradient">Our Services</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A wide variety of MLM software services, crafted to help your network marketing business scale with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group glass-effect rounded-2xl p-6 border border-white/10 hover:border-accent-blue/40 hover:-translate-y-1 transition duration-300 flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue text-2xl text-white group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
              <button className="inline-flex items-center justify-center gap-2 w-full border border-white/15 hover:border-transparent hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-blue text-white font-semibold py-2.5 rounded-lg transition duration-300">
                Enquire Now <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
