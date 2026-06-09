import HeroSection from '../components/home/HeroSection'
import DepartmentsSection from '../components/home/DepartmentsSection'
import HighlightsSection from '../components/home/HighlightsSection'
import HomePlaceholders from '../components/home/HomePlaceholders'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4efe8] text-[#2d2624] transition-all dark:bg-[#1a1713] dark:text-[#f0ede9]">
      <HeroSection />
      <DepartmentsSection />
      <HighlightsSection />
      <HomePlaceholders />
    </div>
  )
}
