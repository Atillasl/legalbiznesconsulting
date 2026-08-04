import HeroSection from '../components/home/HeroSection'
import TrustBarSection from '../components/home/TrustBarSection'
import CapabilitiesSection from '../components/home/CapabilitiesSection'
import ImpactSection from '../components/home/ImpactSection'
import CaseStudySection from '../components/home/CaseStudySection'
import WhyLBCSection from '../components/home/WhyLBCSection'
import FooterCtaSection from '../components/home/FooterCtaSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 dark:bg-[#020617] dark:text-[#f1f5f9] transition-colors duration-700">
      <HeroSection />
      <section className="relative z-10 py-8"><TrustBarSection /></section>
      <section className="py-10"><CapabilitiesSection /></section>
      <section className="bg-white/50 py-10 backdrop-blur-sm dark:bg-white/[0.02]"><ImpactSection /></section>
      <section className="py-10"><CaseStudySection /></section>
      <section className="py-10"><WhyLBCSection /></section>
      <section className="py-10"><FooterCtaSection /></section>
    </div>
  )
}
