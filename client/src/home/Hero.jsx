import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Hero = () => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5)}
      viewport={{ once: true }}
      whileInView='show'
      initial='hidden'
    >
      <div className='hero-bg h-[600px]'>
        <div className='flex items-center justify-center'>
          <div className='hero-aura-bg flex flex-col'>
            <div
              style={{
                letterSpacing: "3px",
              }}
              className='mt-20 text-center z-20 text-[80px] text-slate-300 font-extrabold opacity-100'
            >
              Welcome to{" "}
              <span className='mind-launch-text-hero text-center'>Mind Launch</span>
            </div>
            <p className='text-center mt-5 text-gray-700 font-extrabold text-[20px]'>
              Mind Launch is the all in one website for spreading your business
              and products, <br /> with many assisted ai tools such as a
              chatbot, thumbnail generation and more.{" "}
            </p>
            <div className='flex items-center justify-center'>
              <button
                type='button'
                className='text-slate-100 hero-text-started active:scale-110 hover:scale-110 duration-300 transition-all bg-red-900 h-12 mt-10 rounded-3xl w-[250px]'
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
