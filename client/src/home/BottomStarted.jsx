import { motion } from "framer-motion"
import { styles } from "@/styles"
import { fadeIn } from "@/utils/motion"

const BottomStarted = () => {
  return (
    <motion.div
      className='bg-transparent'
      variants={fadeIn("up", "spring", 0.2)}
      whileInView='show'
      initial='hidden'
    >
      {/* <div className='flex mt-[150px] items-center justify-center'>
        <div className='text-[30px] font-bold'>
          Make your business grow,{" "}
          <span className='mind-launch-hero-text'>Today</span>.
        </div>
      </div> */}
      BottomStarted
    </motion.div>
  );
}

export default BottomStarted