import HeroSection from '../components/home/HeroSection'
import TrustBarSection from '../components/home/TrustBarSection'
import CapabilitiesSection from '../components/home/CapabilitiesSection'
import ImpactSection from '../components/home/ImpactSection'
import CaseStudySection from '../components/home/CaseStudySection'
import WhyLBCSection from '../components/home/WhyLBCSection'
import FooterCtaSection from '../components/home/FooterCtaSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] text-slate-900 dark:bg-[#020617] dark:text-[#f1f5f9] transition-colors duration-700">
      <HeroSection />
      <div className="relative z-10 -mt-10 mb-20"> <TrustBarSection /></div>
     
      <section className="py-24"><CapabilitiesSection /></section>
      <section className="bg-white/50 py-24 backdrop-blur-sm dark:bg-white/[0.02]"><ImpactSection /></section>
      <section className="py-24"><CaseStudySection /></section>
      <section className="py-24"><WhyLBCSection /></section>
      <section className="py-32"><FooterCtaSection /></section>
    </div>
  )
}
