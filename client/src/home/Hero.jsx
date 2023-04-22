import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", 0.3)}
        whileInView='show'
        viewport={{ once: true }}
        initial='hidden'
        className='flex flex-col bg-transparent mx-auto'
      >
        <div className='hero-mesh mr-[1900px]' />
        <div className='ml-[280px] text-[90px]'>
          <div className='bg-none h-[95px]'>Boost your</div>
          <div className='mr-[1500px] bg-transparent -mb-5'>
            <span className='rocketloader' />
          </div>
          <br />
        </div>
        <span
          style={{ textShadow: " 0px 10px 24px rgba(251,9,9,0.89)" }}
          className='ideas-gradient-hero font-extrabold h-[130px]  bg-none text-red-500  text-[110px] ml-[280px] -mt-56'
        >
          Ideas
        </span>
        <br />
        <div className='text-[90px] bg-transparent  ml-[280px]'>
          with {""}
          <span className='mind-launch-gradient-hero font-extrabold'>
            Mind Launch
          </span>
          <p className='text-[15px] text-gray-500'>
            <p className='font-extrabold'>
              <span className='mind-launch-hero-text'>Mind Launch</span> is the
              best place to share your{" "}
              <span className='ideas-hero-text'>ideas</span> and start{" "}
              <span className='collaborating-hero-text'>collaborating</span>{" "}
              with other people.
            </p>
            <br />
            <p className='-mt-4'>
              Experience the <span className='power-hero-text'>power</span> of
              collaborative <span className='ideation-hero-text'>ideation</span>{" "}
              like never before with Mind Launch,
            </p>{" "}
            <br />{" "}
            <p className='-mt-4'>
              the <span className='ultimate-hero-text'>ultimate</span> platform
              for sharing your ideas and{" "}
              <span className='connecting-hero-text'>connecting</span> with{" "}
              <span className='like-minded-hero-text'>
                like-minded individuals.
              </span>
            </p>
          </p>
        </div>
        <div className='hero-mesh-container'>
          <button
            type='button'
            className='get-started-btn active:scale-110 flex hover:scale-125 hover:bg-orange-500 transition-all duration-300 items-center text-[40px] justify-center ml-[1500px] mb-20 -mt-[185px] px-5 bg-gradient-to-r from-red-500 to-red-800  py-2.5 rounded-3xl'
          >
            Get Started
          </button>
          {/* <div className='hero-mesh-l' /> */}
          <div
            style={{ textAlign: "center" }}
            className='text-center text-[30px] font-bold hero-side-text bg-transparent  text-red-500 ml-[700px] -mt-[395px]'
          >
            <p className='-mb-8 bg-transparent'>
              To <span className='connect-grad'>connect</span> with others and
              start building future{" "}
              <span className='businesses-grad'>businesses</span>,
            </p>
            <br />
            <p className='-mb-8 bg-transparent '>
              find people who share your{" "}
              <span className='interests-grad'>interests</span> and start
              discussing potential{" "}
              <span className='collaborations-grad'>collaborations</span>.
            </p>
            <br /> By working together, you can turn your ideas into{" "}
            <span className='reality-grad'>reality</span>!
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
