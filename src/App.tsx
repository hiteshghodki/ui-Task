import './App.css'
import FeatureScroll from './components/FeatureScroll'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroContent from './components/Hero'
import HowItWorks from './components/HowItWorks'
import JoinUs from './components/JoinUs'
import LeadCRMComparison from './components/LeadCRMCamparison'
import LinkedInSalesSolutions from './components/LinkedInSalesSolutions'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
  <Header/>
  <HeroContent/>
  <FeatureScroll/>
  <LeadCRMComparison/>
  <HowItWorks/>
  <Testimonials/>
  <LinkedInSalesSolutions/>
  <JoinUs/>
  <Footer/>
    </>
  )
}

export default App
