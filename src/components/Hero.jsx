import { useState } from 'react'
import { FiArrowRight, FiShield, FiUser, FiPhone, FiMail, FiLayers, FiMessageSquare } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi2'

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plan: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', phone: '', email: '', plan: '', message: '' })
  }

  return (
    <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-20 px-4 relative overflow-hidden">
      {/* Premium grid + glow background */}
      <div className="absolute inset-0 bg-grid pointer-events-none"></div>
      <div className="absolute -top-20 left-1/4 w-[28rem] h-[28rem] bg-accent-purple/20 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-accent-blue/20 rounded-full blur-[120px] animate-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-accent-cyan/10 rounded-full blur-[100px] animate-float" style={{animationDelay: '8s'}}></div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Content */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-200">
            <HiSparkles className="text-accent-cyan" />
            Trusted by 8,000+ organizations worldwide
          </div>
          <div className="border-l-4 border-accent-purple pl-6 mb-6">
            <h1 className="text-5xl font-bold mb-4 text-gradient leading-tight">
              Premium MLM Software Solutions
            </h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We bring cutting-edge technology with <span className="text-accent-purple font-semibold">16+ years</span> of expertise across 10000+ installations globally. Over 8,000 organizations trust our platform with 200+ active projects revolutionizing their multi-level marketing operations.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our innovative MLM software streamlines your network marketing challenges with powerful features, real-time analytics, and seamless integration. Take your business to unprecedented heights today.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/50 transition duration-300 transform hover:scale-105">
              Get Started <FiArrowRight />
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-accent-cyan text-accent-cyan rounded-lg font-semibold hover:bg-accent-cyan/10 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Enquiry Form with Glass Effect */}
        <div className="glass-effect rounded-2xl shadow-2xl p-8 backdrop-blur-xl border border-white/10 animate-slide-up hover:shadow-lg hover:shadow-accent-purple/30 transition duration-500">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-cyan text-transparent bg-clip-text mb-2">GET FREE QUOTE</h2>
          <div className="flex items-center gap-2 mb-6 text-accent-cyan">
            <FiShield className="text-lg" />
            <span className="font-semibold">100% Safe & Confidential</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <label className="flex items-center gap-2 text-gray-300 font-semibold mb-2"><FiUser className="text-accent-blue" /> Full Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/30 transition duration-300 hover:border-white/40"
                required
              />
            </div>

            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <label className="flex items-center gap-2 text-gray-300 font-semibold mb-2"><FiPhone className="text-accent-blue" /> Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/30 transition duration-300 hover:border-white/40"
                required
              />
            </div>

            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <label className="flex items-center gap-2 text-gray-300 font-semibold mb-2"><FiMail className="text-accent-blue" /> Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-Mail"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/30 transition duration-300 hover:border-white/40"
                required
              />
            </div>

            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <label className="flex items-center gap-2 text-gray-300 font-semibold mb-2"><FiLayers className="text-accent-blue" /> Select Plans:</label>
              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/30 transition duration-300 hover:border-white/40"
                required
              >
                <option value="" className="bg-dark-900">Choose Your MLM Plans</option>
                <option value="basic" className="bg-dark-900">Basic Plan</option>
                <option value="standard" className="bg-dark-900">Standard Plan</option>
                <option value="premium" className="bg-dark-900">Premium Plan</option>
                <option value="enterprise" className="bg-dark-900">Enterprise Plan</option>
              </select>
            </div>

            <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <label className="flex items-center gap-2 text-gray-300 font-semibold mb-2"><FiMessageSquare className="text-accent-blue" /> Your Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="3"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/30 transition duration-300 hover:border-white/40 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-accent-blue/50 transition-all duration-300 transform hover:scale-105 mt-6 animate-fade-in-up"
              style={{animationDelay: '0.6s'}}
            >
              Submit Now <FiArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
