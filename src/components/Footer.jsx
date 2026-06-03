export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-yellow-500">VOLO</span><span className="text-white">CHAIN</span>
            </h3>
            <p className="text-sm">
              A leading MLM software provider with 16+ years of experience serving the network marketing industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-yellow-500 transition">Our Products</a></li>
              <li><a href="#plans" className="hover:text-yellow-500 transition">MLM Plans</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-500 transition">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-yellow-500 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-500 transition">MLM Software</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Mobile App</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Web Design</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Support & Training</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">
              <span className="block">📧 sales@volochainsoftware.com</span>
              <span className="block mt-2">📱 +91-7840001055</span>
              <span className="block">📱 +91-8800477669</span>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h5 className="text-white font-semibold mb-2">Why Choose Us?</h5>
              <p>Proven track record with 16+ years of experience and 8000+ satisfied clients worldwide.</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2">Our Commitment</h5>
              <p>24/7 dedicated support, customized solutions, and continuous innovation for your success.</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2">Get Started</h5>
              <p>Request a free demo or quote today and discover how Volochain can transform your business.</p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Volochain MLM Software. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
