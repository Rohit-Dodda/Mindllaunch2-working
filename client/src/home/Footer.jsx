import logo from '@/assets/whitelogo.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full flex h-[300px] bg-[#1d1c1c]'>
      <div className='flex flex-row ml-20 mt-14 py-3.5'>
        <Link to='/' className='flex flex-row'>
          <img src={logo} alt='logo' className='w-20 h-20 object-contain' />
          <div className='mt-5 font-bold text-[30px]'>Mind Launch</div>
        </Link>
      </div>
    </div>
  );
}

export default Footer