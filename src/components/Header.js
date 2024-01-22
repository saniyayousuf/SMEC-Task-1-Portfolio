import React from 'react';
// images
import Logo from '../assets/Logo.jpg'
import { Link } from 'react-scroll';
const Header = () => {
  return <header className=' py-8 '>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center '>
        <a href='https://github.com/saniyayousuf' 
        target="_blank"s
        className="flex items-center gap-2">
        {/* logo */}
          <img src={Logo} alt="logo" className="w-12 h-12 rounded-full object-contain" />
          <p className="text-white text-[20px] font-bold cursor-pointer flex">
            Saniya &nbsp;
            <span className="sm:block hidden">| Developer</span>
          </p>
        </a>
        <Link 
        to='contact'
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        >
      <button id='' className="btn btn-sm">Work With Me</button>
        </Link>
      </div>
      {/* Button */}
    </div>

  </header >;
};

export default Header;
