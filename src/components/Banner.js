import React from 'react';
//  images
import my_img from "../assets/my_img.jpeg"
import { Link } from 'react-scroll';
import Image_for_website_1 from "../assets/Image_for_website_1.png";
import { FaLinkedinIn, FaInstagram, FaTiktok, FaFacebook, FaBehance } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";


export default function Banner() {
  return <section className='min-h-[90
  vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-16' >
        <div className='flex-1 text-center font-secondary lg:text-left  '>
          <motion.h1
           variants={fadeIn('up', 0.3)} initial="hidden"
            whileInView={'show'}
             viewport={{ once: false, amount: 0.7 }}
            className='text-[55px] font-bold font-serif  leading-[0.8] lg:text-[70px]'>Saniya &nbsp;<span>Yousuf</span></motion.h1>
          <motion.div
            variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1] '>
            <span className='text-white mr-4 '>
              I am a</span>
            <TypeAnimation sequence={[
              'Sofware Developer',
              2000,
              'Web developer',
              2000,
            ]}
              speed={50}
              className='text-cyan-500 '
              wrapper='span'
              repeat={Infinity} />
          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
           
          </motion.p>
          <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
          <Link 
        to='contact'
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        >
      <button id='' className="btn btn-sm">Contact Me</button>
        </Link>
            <a href='#' className='text-gradient btn-link '>My Portfolio
            </a>
          </div>
          <div className='flex text-[28px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://www.linkedin.com/in/saniyayousuf05' target='blank'>
              <FaLinkedinIn />
            </a>
            
            <a href='https://www.facebook.com' target='blank'>
              <FaFacebook />
            </a>
            <a href='https://www.instagram.com' target='blank'>
              <FaInstagram />
            </a>
            
            <a href='https://www.behance.net' target='blank'>
              <FaBehance/>
            </a>
          </div>

        </div>
        <div className='hidden lg:flex flex-1 max-w-[400px] lg:max-w-[600px] ml-10 '>
          <div className='relative h-[350px] w-[350px] overflow-hidden rounded-full border-8 border-cyan-500 border-solid'>
            <div className='absolute top-0 left-0 h-full w-full  border-4 border-purple-500 border-solid rounded-full'>

              <div className='absolute bottom-0 right-0 h-full w-full border-4 border-yellow-200 border-solid rounded-full'></div>

            </div>
            <img
              className='object-cover w-full h-full rounded-full'
              src={my_img}
              alt='My  IMAGE'
            />
          </div>
        </div>


      </div>
    </div>

  </section>;
};


