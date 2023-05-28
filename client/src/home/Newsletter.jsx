import { ScrollReveal } from "reveal-on-scroll-react";
import NewsletterImage from '@/assets/newsletter.png';

const Newsletter = () => {
  return (
    <ScrollReveal.div
      animation='fade-in'
      threshold={0.5}
      duration={0.4}
      easing='easeIn'
      delay={0.2}
      className='mt-[100px] bg-[#111111] py-10 newsletter-bg min-h-full'
    >
      <div className='ml-[500px] text-[30px] mt-5'>
        Signup to our <span className='newsletter-grad'>Newsletter</span>
      </div>
      <input
        className='ml-[500px] text-[#7e7d7d] bg-black px-10 outline-none placeholder:text-[18px] placeholder:text-[#3f3d3d] mt-5 rounded-3xl h-[60px] w-[500px]'
        type='email'
        placeholder='ben@gmail.com'
        required
      />
      <button type='submit'  className="ml-10 transition-colors duration-700 hover:bg-[#292727] active:scale-110 h-[60px] text-[20px] rounded-[20px] bg-red-900 px-5 py-1">Add Me</button>
      <div className="flex items-center justify-center ml-[540px] blob-1" />
      <div className="container">

          <img src={NewsletterImage} alt="image" className="ml-[1800px] newsletter h-[300px] -mt-[250px]" />
      </div>
    </ScrollReveal.div>
  );
};

export default Newsletter;
