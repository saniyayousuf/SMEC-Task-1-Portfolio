import React from 'react';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {  fadeIn } from "../variants"



const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  return (
    <section id='about' className='section' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false,amount:0.3
        }}

          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false,amount:0.3
        }}
          className='flex-1'>
           <h2 className='h2 text-accent'>
            About Me.
           </h2>
           <h3 className='h3 mb-4'> I'm a Certified Software developer.</h3>
           <p className='mb-6'>
           I'm Saniya,specialize in both the MERN (MongoDB, Express.js, React.js, Node.js) stack and the Laravel-Vue stack, offering a powerful dual expertise. With MERN, I leverage MongoDB for flexible data storage and build dynamic user interfaces using React.js, while also excelling in Laravel-Vue to create efficient and responsive web applications.
           </p>
           <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient only:mb-2 '>
              1+
              </div>
              <div className='font-primary text-sm tracking-[2px] '>
                Years of <br/>Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient only:mb-2 '>
              10+
              </div>
              <div className='font-primary text-sm tracking-[2px] '>
                Projects <br/>Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient only:mb-2 '>
              Many
              </div>
              <div className='font-primary text-sm tracking-[2px] '>
                Satisfied<br/>Clients
              </div>
            </div>

           </div>
          </motion.div>
        </div>

      </div>


    </section>)
};

export default About;
