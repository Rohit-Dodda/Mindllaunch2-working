import Navbar from "@/home/Navbar"
import Hero from "@/home/Hero"
import FeaturesOne from "@/home/FeaturesOne"
import FeaturesTwo from "@/home/FeaturesTwo"
import FeaturesThree from "@/home/FeaturesThree"
import Contact from "@/home/Contact"
import Newsletter from "@/home/Newsletter"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-[70px]'>
        <Hero />
      </div>
      <div className='mt-[160px]'>
        <FeaturesOne />
        {/* <FeaturesTwo />
        <FeaturesThree /> */}
        <Newsletter />
      </div>
        <div className='mt-[240px] '>
          <Contact />
        </div>
    </div>
  );
}

export default Home