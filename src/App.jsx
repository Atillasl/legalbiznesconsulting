import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

// Context Providers
import { LanguageProvider } from './context/LanguageContext'

// Qlobal UI Komponentləri (Hər səhifədə sabit qalanlar)
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function AppRoutes() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-[#f4efe8] text-[#2d2624] transition-colors duration-200 ease-in-out dark:bg-[#1a1713] dark:text-[#f0ede9]">
      {/* Həmişə yuxarıda sabit qalan Naviqasiya Paneli */}
      <Navbar />

      {/* Dinamik Səhifə Marşrutları */}
      <main className="flex-grow pt-20"> {/* pt-20 navbarın altında qalmamaq üçün padding verir */}
        <div key={location.pathname} className="page-transition">
          <Routes>
            {/* Əsas Səhifə (Hero, Ümumi Baxış və s.) */}
            <Route path="/" element={<Home />} />

            {/* Xidmətlər Kataloqu */}
            <Route path="/services" element={<Services />} />

            {/* Dinamik Xidmət Detalı (ID-yə əsasən kontent dəyişir) */}
            <Route path="/services/:serviceId" element={<ServiceDetail />} />

            {/* Bloq Səhifəsi (Multi-filtering sistemli) */}
            <Route path="/blog" element={<Blog />} />

            {/* Əlaqə Səhifəsi (Form və İnteraktiv Xəritə ilə) */}
            <Route path="/contact" element={<Contact />} />

            {/* 404 - Tapılmayan Səhifə Keçidi (İstəyə bağlı olaraq Home-a yönləndirmə) */}
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
        {/* Səhifə keçidlərində yuxarı skrol funksiyası */}
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </LanguageProvider>
  )
}