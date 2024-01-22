import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsArrowUpRight } from 'react-icons/bs';
import Social_Media_Post_3 from "../assets/Social_Media_Post_3.jpg";
import Social_Media_Post_9 from "../assets/Social_Media_Post_9.jpg";
import Social_Media_Post_13 from "../assets/Social_Media_Post_13.jpg";



const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container  mx-auto" >
        <div className='flex flex-col lg:flex-row gap-x-10 lg:mt-40'>
          <motion.div 
          variants={fadeIn('right', 0.5)} initial="hidden"
          whileInView={'show'}
           viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 '>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent '> My Latest<br /> work. </h2>
              <p className='max-w-sm mb-16 '>
                
Explore my latest web development projects for an interactive journey that merges cutting-edge design and technological innovation. Each website reflects a distinctive fusion of creative design and strategic functionality, highlighting my dedication to delivering impactful online solutions.
              </p>
              <a href='https://www.behance.net/asimgraphicspk/projects' target='blank' >
                <button className='btn btn-sm '>View All Projects <BsArrowUpRight  className='ml-2 inline'/></button>
              </a>
            </div>
            {/* Images */}
            <a hrefh='https://github.com/saniyayousuf/Hackathon-Blood-Bank-Application-' target='blank'>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl flex justify-center items-center'>
                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300 '></div>
                <img className='group-hover:scale-125 transition-all duration-500 lg:h-[350px]' src={Social_Media_Post_3} alt='resturant picture' />

                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Blood bank Application</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white '>
                  A bold bank application in which user can find their donors.s 
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.5)} initial="hidden"
          whileInView={'show'}
           viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-10'>
            <a href='https://github.com/saniyayousuf/MovieSearchApp-React' target='blank'>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl flex justify-center items-center'>
                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500 bg-white h-[350px]' src={Social_Media_Post_9} alt='restaurant picture' />

                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Movie search app</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>
                A responsive movie search filter a website 
                  </span>
                </div>
              </div>
            </a>

            <a href='https://github.com/saniyayousuf/Institute_Platform-LMS' target='blank'>
              <div className='group relative overflow-hidden border-2 border-white/50 lg:mt-7 rounded-xl flex justify-center items-center bg-8fc1d8'>
                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300 bg-8fc1d8'></div>
                <img className='group-hover:scale-125 bg-8fc1d8 transition-all duration-500 h-[350px]' src={Social_Media_Post_13} alt='restaurant picture' />

                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'> Learning Managaemnt system</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>
                An institute Learning mamagnent system.
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>)
};

export default Work;
