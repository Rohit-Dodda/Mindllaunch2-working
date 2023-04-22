import Navbar from "@/home/Navbar"
import Hero from "@/home/Hero"
import Features from "@/home/Features"
import BottomStarted from "@/home/BottomStarted"
import Footer from "@/home/Footer"
import Analytics from "@/home/Analytics"
import Contact from "@/home/Contact"

const Home = () => {
  return (
   <>
    <Navbar />
    <div className="mt-64">
    <Hero className='bg-transparent' />
    <div className="mt-32">
      <div id="features-section">
    <Features />
    </div>
    <div id="analytics">
      <Analytics />
    </div>
       <BottomStarted />
    <div id="contact-section">
       <Contact />
    </div>
    <Footer />
    </div>
    </div>
   </>
  )
}

export default Home