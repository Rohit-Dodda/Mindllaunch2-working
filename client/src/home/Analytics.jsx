import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Analytics = () => {
  return (
    <motion.div
      className='bg-transparent'
      variants={fadeIn("up", "spring", 0.2)}
      whileInView='show'
      initial='hidden'
    >
      <div className='flex items-center flex-col justify-center'>
        <div className='text-[66px] font-extrabold mt-3 leading-tight'>
          For now, we don't have anything! 🤷
        </div>

        <div className='w-[2500px] analytics-glass bg-gray-500 h-[290px] flex flex-row mt-10 rounded-md '>
          <div className='flex flex-col'>
            <div className='my-5 ml-[400px]'>
              <div className='ml-[180px] font-extrabold text-[100px]'>0</div>
              <div className='ml-[30px] text-[50px] font-thin'>
                People Trusted
              </div>
              <div
                className='ml-[500px] -mt-[245px]'
                style={{
                  border: "solid white 0.5px",
                  width: "0",
                  height: "290px",
                  borderRadius: "120px",
                }}
              />
              <div className='flex flex-col'>
                <div className='flex flex-row ml-[660px] -mt-[270px] font-extrabold text-[100px]'>
                  0
                </div>
                <div className="ml-[590px] text-[50px] font-thin'">Reviews</div>
                <div
                  className='ml-[860px] -mt-[245px]'
                  style={{
                    border: "solid white 0.5px",
                    width: "0",
                    height: "290px",
                    borderRadius: "120px",
                  }}
                />
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row ml-[1000px] -mt-[270px] font-extrabold text-[100px]'>
                  0
                </div>
                <div className="ml-[890px] text-[50px] font-thin'">
                  Companies
                </div>
                <div
                  className='ml-[1220px] -mt-[245px]'
                  style={{
                    border: "solid white 0.5px",
                    width: "0",
                    height: "290px",
                    borderRadius: "120px",
                  }}
                />
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row ml-[1360px] -mt-[270px] font-extrabold text-[100px]'>
                  0
                </div>
                <div className="ml-[1250px] text-[50px] font-thin'">
                  Ideas made
                </div>
                <div
                  className='ml-[1220px] -mt-[245px]'
                  style={{
                    border: "solid white 0.5px",
                    width: "0",
                    height: "290px",
                    borderRadius: "120px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Analytics;
