import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'ReactJs Developer',
    description: "As a React.js developer, I bring a passion for crafting engaging and seamless user experiences. Proficient in building dynamic and responsive web applications, I leverage the power of React to create interactive interfaces that enhance user interaction. ",
    link: 'Learn More',
  },
  {
    name: 'MERN Stack ',
    description: " With a strong foundation in coding and problem-solving, I specialize in crafting robust software applications that meet both user needs and industry standards. ",
    link: 'Learn More',
  },
  {
    name: 'Laravel-Vue',
    description: "I'm a Laravel-Vue developer, adept at harnessing the power of Laravel's robust PHP framework and Vue.js for creating dynamic and responsive web applications. ",
    link: 'Learn More',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6 '>What I Do.</h2>
            <h3 className='h3 max-w-[455px mb-16'>I am web developer  with 1.5+ years of experience.</h3>
            <a href='https://www.linkedin.com/in/saniyayousuf05/' target='blank'>
              <button className="btn btn-sm">See My Work  <BsArrowUpRight  className='ml-2 inline'/></button></a>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {services.map((service, index) => (
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{service.name}</h4>
                  <p className='font-secondary leading-tight '>{service.description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a className='w-9 h-9 mb-[42px] flex justify-center items-center' href='https://github.com/saniyayousuf' target='_blank'>
                    <BsArrowUpRight />
                  </a>
                  <a className='text-gradient text-sm sm: ml-2 inline' href='https://www.linkedin.com/in/saniyayousuf05/' target='_blank'>
                    {service.link}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
