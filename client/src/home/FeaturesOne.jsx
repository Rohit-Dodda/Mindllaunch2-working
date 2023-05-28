import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";

const FeaturesOne = () => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.3)}
      viewport={{ once: true }}
      whileInView='show'
      initial='hidden'
      className='feature-bg'
    >
      <div className='text-[50px] font-bold tracking-wide flex items-center justify-center'>
        Try <span className='resources-text ml-2'>Resources</span>, not find
        them.
      </div>
      <div className='flex flex-row mt-5 items-center justify-center mb-5'>
        <motion.div
          variants={fadeIn("up", "spring", 0.5)}
          viewport={{ once: true }}
          whileInView='show'
          initial='hidden'
          className='flex items-center justify-center hover:bg-opacity-20 flex-col h-[220px] hover:bg-red-950 transition-all rounded-3xl duration-300'
        >
          <div className='mt-10 text-[28px] font-bold'>
            <span className='artificial-text'>Artificial Intelligence</span>{" "}
            Chatbot{" "}
            <SmartToyOutlinedIcon className='text-[#4a0d0d] scale-125' />
          </div>
          <p className='mt-5 text-[17px] text-center text-slate-400'>
            Experience the power of personalized assistance with our integrated
            chatbot. <br /> Choose from a variety of experts to tackle any
            problem and revolutionize the <br /> way you solve challenges.
            <div
              className='ml-[600px] -mt-32'
              style={{
                border: "solid 0.4px #260909",
                width: "0px",
                height: "110px",
                borderImage: "linear-gradient(to top, #080404, #1119ab) 1",
              }}
            />
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("down", "spring", 0.7)}
          viewport={{ once: true }}
          whileInView='show'
          initial='hidden'
          className='flex items-center justify-center hover:bg-opacity-20 flex-col h-[220px] hover:bg-red-950 transition-all rounded-3xl duration-300'
        >
          <div className='mt-10 text-[28px] font-bold'>
            <span className='thumbnail-text'>Thumbnail</span> Generation{" "}
            <ImagesearchRollerOutlinedIcon className='text-[#4a0d0d] scale-125' />
          </div>
          <p className='mt-5 text-[17px] text-center text-slate-400'>
            Use AI to generate stunning images for your products. Use different{" "}
            <br /> models to make different images. Find more people <br />{" "}
            and gain more attraction.
            <div
              className='ml-[600px] -mt-32'
              style={{
                border: "solid 0.4px #260909",
                width: "0px",
                height: "110px",
                borderImage: "linear-gradient(to bottom, #080404, #c61e00) 1",
              }}
            />
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 0.9)}
          viewport={{ once: true }}
          whileInView='show'
          initial='hidden'
          className='flex items-center justify-center flex-col h-[220px] hover:bg-red-950 hover:bg-opacity-20 transition-all rounded-3xl duration-300'
        >
          <div className='mt-10 text-[28px] font-bold'>
            <span className='words-text'>Words</span> Minimizer{" "}
            <AbcOutlinedIcon className='text-[#4a0d0d] scale-125' />
          </div>
          <p className='mt-5 text-[17px] text-center text-slate-400'>
            Instead of making your descriptions long, lengthy and tough to read,{" "}
            <br /> the words minimizer makes everything minimal and{" "}
            <figcaption>simple.</figcaption>
            <div
              className='ml-[600px] -mt-32'
              style={{
                border: "solid 0.4px #260909",
                width: "0px",
                height: "110px",
                borderImage: "linear-gradient(to top, #080404, #ab9e11) 1",
              }}
            />
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturesOne;
