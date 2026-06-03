import { FiMail, FiPhone } from 'react-icons/fi'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/10">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-dark-800 to-dark-700 text-white py-3 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <div className="flex items-center gap-2 hover:text-accent-purple transition">
              <FiMail className="text-accent-cyan" />
              <a href="mailto:sales@example.com">
                sales@example.com
              </a>
            </div>
            <div className="flex items-center gap-2 hover:text-accent-purple transition">
              <FiPhone className="text-accent-cyan" />
              <a href="tel:+917840001055">
                +91-7840001055
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-dark-900/50 py-4 px-4 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan">MLM Software</span>
          </div>
          <div className="flex gap-8 text-gray-300 font-semibold">
            <a href="#products" className="hover:text-accent-purple transition duration-300 relative group">
              OUR PRODUCTS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#plans" className="hover:text-accent-purple transition duration-300 relative group">
              MLM PLANS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#industries" className="hover:text-accent-purple transition duration-300 relative group">
              INDUSTRIES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#testimonials" className="hover:text-accent-purple transition duration-300 relative group">
              TESTIMONIALS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
