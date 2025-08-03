
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/NavBar'
import OurServices from './components/OurServices'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import StrepleShowcase from './components/StreppleShowcase'
import BlogAndCTA from './components/BlogAndCta'
import Displays from './components/Displays'

function App() {


  return (
    <>
    <Navbar/>
    <HeroSection/>
    <WhyChooseUs/>
    <Displays/>
    <OurServices/>
    <StrepleShowcase/>
    <Testimonials/>
    <BlogAndCTA/>
 <Footer/>
    </>
  )
}

export default App
