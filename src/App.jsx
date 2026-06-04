import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import ServiceDetail from './pages/ServiceDetail'
import PlansPage from './pages/PlansPage'
import PlanDetail from './pages/PlanDetail'

function App() {
  return (
    <div className="bg-white min-h-screen">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/plans/:slug" element={<PlanDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
