import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "@/styles";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import logo from "@/assets/highreslogo.svg";
import { navbarItems } from "@/constants/data";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  function scrollToSection(event, target) {
    event.preventDefault();
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
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
      whileInView="show"
      initial="hidden"
      className={`${styles.paddingX} ml-[220px] rounded-md w-[1900px] flex mt-5 items-center top-0 z-20 ${
        scrolled ? "navbar-glass transition-all duration-300" : "bg-transparent"
      }`}
      style={{ position: "fixed", top: 0, left: 0, right: 0 }}
    >
        <Link
          to="/"
          className="flex bg-transparent items-center gap-2 mr-20 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} className="w-20 bg-transparent h-20 object-contain leading-tight hover:rotate-360 duration-500" alt="mindlaunch" />
          <span className={`${scrolled ? 'text-orange-500 transition-all duration-300' : 'navbar-mindlaunch-grad'} mx-2 bg-transparent flex whitespace-nowrap  flex-row items-center justify-center leading-tight cursor-pointer font-bold text-[50px]`}>
            Mind Launch
          </span>
        </Link>

        <ul className={`list-none bg-transparent ml-5 whitespace-nowrap text-[2px] hidden sm:flex flex-row gap-14`}>
        {navbarItems?.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-orange-500" : "text-rose-600"
              } ${scrolled ? 'text-slate-100' : 'text-rose-600'} hover:text-orange-500 hover:scale-110 bg-transparent duration-500 transition-all text-[22px] cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.target}`} onClick={(event) => scrollToSection(event, nav.target)} className='bg-transparent font-extrabold'>{nav.title}</a>
            </li>
          ))}
        </ul>
         <Link to="/login" className="bg-transparent">
      <button type='button' className="border-none ml-32 hover:scale-110 cursor-pointer duration-500 transition-all login-btn outline-none h-[40px] w-[96px] rounded-md px-5 py-1 bg-red-900 whitespace-nowrap">
        Login
       </button>
        </Link>  
        <Link to="/signup" className="bg-transparent">
        <button type='button' className="border-none hover:bg-transparent ml-10 hover:scale-110 cursor-pointer duration-500 transition-all login-btn outline-none h-[40px] w-[96px] rounded-md px-5 py-1 bg-orange-600 whitespace-nowrap">
        Sign Up
       </button>
        </Link>           
    </motion.div>
  );
};

export default Navbar;
