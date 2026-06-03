import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark-900 min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
