import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { HiCubeTransparent } from 'react-icons/hi2'

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-14 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-extrabold mb-4 text-white">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-brand-600 to-accent-cyan text-xl">
                <HiCubeTransparent />
              </span>
              MLM Software
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              A leading MLM software provider with 16+ years of experience serving the
              network marketing industry with reliable, scalable technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="hover:text-orange-400 transition">Our Services</a></li>
              <li><a href="/plans" className="hover:text-orange-400 transition">MLM Plans</a></li>
              <li><a href="/#about" className="hover:text-orange-400 transition">About Us</a></li>
              <li><a href="/#testimonials" className="hover:text-orange-400 transition">Reviews</a></li>
              <li><a href="/#enquiry" className="hover:text-orange-400 transition">Get a Quote</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Top Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#products" className="hover:text-orange-400 transition">MLM Software</a></li>
              <li><a href="/#products" className="hover:text-orange-400 transition">MLM Mobile App</a></li>
              <li><a href="/#products" className="hover:text-orange-400 transition">Crypto Integration</a></li>
              <li><a href="/#products" className="hover:text-orange-400 transition">Web Design</a></li>
              <li><a href="/#products" className="hover:text-orange-400 transition">Support &amp; Training</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2"><FiMail className="mt-0.5 text-orange-400" /> sales@yourcompany.com</li>
              <li className="flex items-start gap-2"><FiPhone className="mt-0.5 text-orange-400" /> +91-00000-00000</li>
              <li className="flex items-start gap-2"><FiPhone className="mt-0.5 text-orange-400" /> +91-00000-00001</li>
              <li className="flex items-start gap-2"><FiMapPin className="mt-0.5 text-orange-400" /> Your Office Address, City, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <p>&copy; 2026 MLM Software. All rights reserved.</p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
