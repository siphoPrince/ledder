import Header  from "../components/header"
import  Hero from "../components/hero"
import Features from "../components/features"
import HowItWorks from "../components/how-it-works"
import CTA from "../components/cta"
import  Footer from "../components/footer"

const LandingPage = ()=> {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage;
