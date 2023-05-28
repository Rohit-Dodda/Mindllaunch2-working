import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import logo from "@/assets/logo.svg";
import { navbarItems } from "@/constants/data";
import wings from '@/assets/ruby-wings.png'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  function scrollToTarget(event, target) {
    event.preventDefault();
    document.getElementById(target).scrollIntoView({ behavior: "smooth" })
  }

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    });

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.3)}
      viewport={{ once: true }}
      whileInView='show'
      initial='hidden'
      className={`ml-[110px rounded-md flex items-center top-0 z-20 ${
        scrolled ? "navbar-glass transition-all duration-300" : "bg-transparent"
      }`}
    >
      <div className='flex flex-row items-center justify-center'>
        <Link
          to='/'
          className='flex items-center navbar-font'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt='logo'
            className='navbar-image transition-all duration-500 hover:rotate-360 mt-5 ml-20 w-20 h-20 object-contain'
          />
          <div className='text-[40px] mt-5 ml-5'>Mind Launch</div>
        </Link>

        <div className='navbar-mesh mr-[900px] mt-20' />
        <ul
          className={`list-none ml-[500px] items-center justify-center whitespace-nowrap hidden sm:flex gap-14`}
        >
          <a className='features-font nav-items-font mt-5 flex items-center hover:scale-110 bg-transparent duration-500 transition-all text-[22px] cursor-pointer'>
            Features
          </a>
          <a className='contact-font nav-items-font mt-5 flex items-center hover:scale-110  bg-transparent duration-500 transition-all text-[22px] cursor-pointer'>
            Contact
          </a>
          <a className='perks-font nav-items-font mt-5 flex items-center hover:scale-110  bg-transparent duration-500 transition-all text-[22px] cursor-pointer'>
            Perks
          </a>
          {navbarItems?.map((nav) => (
            <li
              key={nav.id}
              className={`
              mt-5 flex nav-items-font items-center hover:scale-110 bg-transparent duration-500 transition-all text-[22px] cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a
                href={`#${nav.target}`}
                onClick={(event) => scrollToSection(event, nav.target)}
                className='bg-transparent font-extrabold'
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div>
          <Link to='/signup'>
            <button
              className='hover:rounded-md whitespace-nowrap hover:bg-[#4f0303] hover:py-2.5 transition-all duration-300 hover:scale-110 mt-5 ml-[300px] text-[20px] rounded-xl bg-red-950 px-5 py-1.5'
              type='button'
            >
              Sign Up
            </button>
          </Link>
          <Link to='/login'>
            <button
              className='transition-all font-extrabold text-[25px] duration-300 hover:scale-110 mt-5 ml-[60px]'
              type='button'
            >
              Login
            </button>
          </Link>
        </div>

        <img src={wings} className="mt-5 ml-10 w-8 h-6 object-contain" />
      </div>
    </motion.div>
  );
};

export default Navbar;
