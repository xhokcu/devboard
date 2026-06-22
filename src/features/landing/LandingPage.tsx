import Hero from './Hero'
import Features from './Features'
import Footer from './Footer'

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default LandingPage
