import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

// Context Providers
import { LanguageProvider } from './context/LanguageContext'

// Qlobal UI Komponentləri
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function AppRoutes() {
  const location = useLocation()

  return (
    /* Home.jsx daxilindəki krem və qəhvəyi fon rənglərini bura (bütün saytı bükən ana div-ə) köçürdük.
      Beləcə, səhifələr arası keçiddə və ya Navbarın arxasında heç bir ağ/qara rəng qırılması qalmayacaq.
    */
    <div className="flex min-h-screen flex-col bg-[#f4efe8] text-[#2d2624] transition-all duration-300 dark:bg-[#1a1713] dark:text-[#f0ede9]">
      
      {/* Həmişə yuxarıda sabit qalan Naviqasiya Paneli */}
      <Navbar />

      {/* MƏSƏLƏ BURADA İDİ: 'pt-20' klassını sildik! 
        Artıq HeroSection və BlogHeader tam şəkildə Navbarın altına (arxasına) keçəcək 
         və aradakı o lazımsız boşluq tamamilə yox olacaq.
      */}
      <main className="flex-grow"> 
        <div key={location.pathname} className="page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </main>

      {/* Həmişə aşağıda sabit qalan Korporativ Footer */}
      <Footer />
    </div>
  )
}

// UX Optimizasiyası: Səhifə dəyişəndə skrolu avtomatik 0-lamaq
function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

export default function App() {
  return (
    <LanguageProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </LanguageProvider>
  )
}