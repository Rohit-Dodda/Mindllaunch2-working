import { ScrollReveal } from "reveal-on-scroll-react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import idea from "@/assets/idea.jpeg";
import idea2 from "@/assets/secondidea.jpeg";
import idea3 from "@/assets/lightbulbhelp.jpeg";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import TabOutlinedIcon from "@mui/icons-material/TabOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";

const Features = () => {
  return (
    <motion.div
      className='bg-transparent'
      variants={fadeIn("up", "spring", 0.2)}
      whileInView='show'
      initial='hidden'
    >
      <ScrollReveal.div
        animation='slide-in-bottom'
        easing='backInOut'
        duration={0.9}
        delay={0.2}
        className='bg-transparent'
      >
        <div className='flex items-center bg-transparent justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <div
              style={{ letterSpacing: "6px" }}
              className='text-red-500 font-extrabold flex items-center justify-center text-[20px]'
            >
              How does it work?
            </div>
            <div
              className='mt-10 px-5 py-2.5 bg-gradient-to-r from-orange-600 to-orange-400'
              style={{ borderRadius: "50%" }}
            >
              <div className='bg-transparent font-extrabold'>1</div>
            </div>
            <div className='features-text-heading-l text-[46px] mt-3 leading-tight'>
              Expose
            </div>
            <div className={`text-white font-black text-[69px] mt-4`}>
              Start spreading your plan.
            </div>
            <div className='text-gray-500 text-[23px] mt-4 text-center'>
              Free your time from difficult, trivial, expensive marketing,{" "}
              <br /> so that you can spread your business and ideas quicker.
            </div>
            <div className='grid grid-cols-2 grid-rows-2'>
              <Tilt options={{ speed: 145 }}>
                <div className='col-span-1 row-span-1'>
                  <img
                    src={idea}
                    alt='ideaimg'
                    className='features-img hover:scale-110 transition-all transform hover:rounded-3xl hover:-rotate-12 duration-300 h-[420px] mt-20 rounded-md'
                  />
                </div>
              </Tilt>
              <div className='col-span-1 mt-20 -ml-[100px]'>
                <div className='text-[30px]'>
                  The complete path to exposure.{" "}
                  <GroupsOutlinedIcon className='text-gray-500' />
                </div>
                <p className='mt-5 text-gray-500'>
                  Post your idea on Mind Launch and experience the excitement of
                  watching it come to life. <br /> Worrying about exposure is
                  our job.
                </p>
                <div className='col-span-1 mt-10'>
                  <div className='text-[30px]'>
                    Collaboration.{" "}
                    <CoPresentOutlinedIcon className='text-gray-500' />
                  </div>
                  <p className='mt-5 text-gray-500'>
                    Collaborating with people will be easier than ever with our
                    new technologies. <br /> Support will be as easy as ever!
                  </p>
                </div>
                <div className='col-span-1 mt-10'>
                  <div className='text-[30px]'>
                    Jobs. <WorkOutlineOutlinedIcon className='text-gray-500' />{" "}
                  </div>
                  <p className='mt-5 text-gray-500'>
                    Finding new positions and jobs will be easier than ever{" "}
                    <br /> as our reccomendation system will give you what you
                    need.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div
              className='px-5 -mt-[360px] py-2.5 bg-gradient-to-r from-red-600 to-red-500'
              style={{ borderRadius: "50%" }}
            >
              <div className='bg-transparent font-extrabold'>2</div>
            </div>
            <div className='selling-features-text text-[46px] mt-3 leading-tight'>
              Selling
            </div>
            <div className={`text-white font-black text-[69px] mt-4`}>
              Start selling what your business needs.
            </div>
            <div className='text-gray-500 text-[23px] mt-4 text-center'>
              On Mindlaunch, selling products, services, licenses, and more is
              now easier than ever before.
            </div>
            <div className='grid grid-cols-2 grid-rows-2'>
              <div className='col-span-2 ml-[300px]'>
                <Tilt>
                  <img
                    src={idea2}
                    alt='idea2'
                    className='h-[400px] features-img-l mt-10 rounded-md hover:rounded-3xl hover:rotate-12 transition-all duration-300'
                  />
                  <div className='mt-2 text-zinc-500 transition-all duration-300'>
                    The lightbulb is your business.
                  </div>
                </Tilt>
              </div>
              <div className='col-span-2 -ml-[210px] -mt-[425px]'>
                <div className='text-[30px]'>
                  Making Products.{" "}
                  <DesignServicesOutlinedIcon className='text-gray-500' />
                </div>
                <p className='mt-5 text-gray-500'>
                  You can easily create your own products <br /> without the
                  complexity of making a website.
                </p>
              </div>
              <div className='col-span-2 -ml-[210px] -mt-[755px]'>
                <div className='text-[30px]'>
                  Finding Customers.{" "}
                  <PersonSearchOutlinedIcon className='text-gray-500' />
                </div>
                <p className='mt-5 text-gray-500'>
                  You can send out alerts to everyone for your products. <br />{" "}
                  Worrying about people finding your items is gone.
                </p>
              </div>
              <div className='col-span-2 -ml-[210px] -mt-[605px]'>
                <div className='text-[30px]'>
                  Data driven insights.{" "}
                  <StorageOutlinedIcon className='text-gray-500' />
                </div>
                <p className='mt-5 text-gray-500'>
                  You will have a plethora amount of data that can <br />
                  influence your next choices. Easily able to make smart <br />{" "}
                  choices.
                </p>
              </div>
            </div>
            <div
              className='px-5 -mt-[360px] py-2.5 bg-gradient-to-r from-yellow-600 to-yellow-300'
              style={{ borderRadius: "50%" }}
            >
              <div className='bg-transparent font-extrabold'>3</div>
            </div>
            <div className='selling-tools-text text-[46px] mt-3 leading-tight'>
              Tools
            </div>
            <div className={`text-white font-black text-[69px] mt-4`}>
              Start speeding your income up.
            </div>
            <div className='text-gray-500 text-[23px] mt-4 text-center'>
              Accelerate your cash flow with our intergrated tools made to speed
              up <br />
              messy work.
            </div>
            <Tilt>
              <img
                src={idea3}
                alt='idea2'
                className='h-[450px] object-contain features-img-2 mt-10 rounded-md hover:rounded-3xl hover:rotate-12 transition-all duration-300'
              />
            </Tilt>
            <div>
              <div className='mt-20 ml-14'>
                <div className='text-[30px]'>
                  Customizable Chatbot.{" "}
                  <PrecisionManufacturingOutlinedIcon className='text-gray-500' />
                </div>
                <p className='text-gray-500 mt-6'>
                  A integrated chatbot that allows you to choose different
                  people <br /> to help you with different problems.
                </p>
              </div>
              <div className='mt-10 ml-14'>
                <div className='text-[30px]'>
                  Other AI Websites.{" "}
                  <TabOutlinedIcon className='text-gray-500' />
                </div>
                <p className='text-gray-500 mt-6'>
                  A plethora amount of Ai websites that allow you to find
                  exactly <br /> what you need.
                </p>
              </div>
              <div className='mt-10 ml-14'>
                <div className='text-[30px]'>
                  Image Generation.{" "}
                  <BrokenImageOutlinedIcon className='text-gray-500' />
                </div>
                <p className='text-gray-500 mt-6 mb-[200px]'>
                  Image generation to make appealing thumbnails or covers <br />{" "}
                  to attract customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal.div>
    </motion.div>
  );
};

export default Features;
