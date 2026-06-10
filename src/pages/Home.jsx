import HeroSection from '../components/home/HeroSection'
import TrustBarSection from '../components/home/TrustBarSection'
import CapabilitiesSection from '../components/home/CapabilitiesSection'
import ImpactSection from '../components/home/ImpactSection'
import CaseStudySection from '../components/home/CaseStudySection'
import WhyLBCSection from '../components/home/WhyLBCSection'
import FooterCtaSection from '../components/home/FooterCtaSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4efe8] text-[#2d2624] transition-all dark:bg-[#1a1713] dark:text-[#f0ede9]">
      <HeroSection />
      <TrustBarSection />
      <CapabilitiesSection />
      <ImpactSection />
      <CaseStudySection />
      <WhyLBCSection />
      <FooterCtaSection />
    </div>
  )
}
