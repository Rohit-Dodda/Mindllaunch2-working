import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { useRef, useState } from "react";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5)}
      viewport={{ once: true }}
      whileInView='show'
      initial='hidden'
      className=''
    >
      <div className=' flex items-center justify-center'>
        <div className='contact-bg bg-transparent h-[500px] w-[950px] px-5 py-2.5'>
          <div className=' bg-transparent text-[55px] mt-10 flex items-center justify-center font-bold leading-tight'>
            Lets Connect
          </div>
          <form
            ref={formRef}
            className='bg-transparent'
            onSubmit={handleSubmit}
          >
            <div className='grid grid-cols-2 gap-6'>
              <div className='col-span-2'>
                <div className='mt-5'>
                  <label
                    htmlFor='name'
                    className='ml-[85px] text-red-500 font-extrabold text-[25px] bg-transparent'
                  >
                    Name
                  </label>
                </div>
                <input
                  type='text'
                  name='name'
                  onChange={handleChange}
                  value={form.name}
                  placeholder='Ben Simmons'
                  required
                  className='px-5 w-[300px] h-[60px] rounded-2xl text-red-600 mt-10 ml-20 bg-[#750b0b] outline-none placeholder:text-red-500'
                />
              </div>
              <div className='col-span-2'>
                <label
                  htmlFor='email1'
                  className=' ml-[85px] mt-10 text-red-500 font-extrabold text-[25px] bg-transparent'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email1'
                  onChange={handleChange}
                  value={form.email1}
                  placeholder='rohit@mindlaunch.com'
                  required
                  className='px-5 w-[300px] h-[60px] rounded-2xl text-red-600 mt-10 ml-20 bg-[#750b0b] outline-none placeholder:text-red-500'
                />
              </div>
              <div>
                <label
                  htmlFor='email2'
                  className=' ml-[85px] mt-10 text-red-500 font-extrabold text-[25px] bg-transparent'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email2'
                  onChange={handleChange}
                  value={form.email2}
                  placeholder='rohit@mindlaunch.com'
                  required
                  className='px-5 w-[300px] h-[60px] rounded-2xl text-red-600 mt-10 ml-20 bg-[#750b0b] outline-none placeholder:text-red-500'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
