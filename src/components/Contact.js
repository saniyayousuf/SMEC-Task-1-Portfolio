import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { fadeIn } from "../variants";

const Contact = () => {


  // EmailJS
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      to_name: 'Saniya',
      from_name: nameRef.current.value,
      from_email: emailRef.current.value,
      message: messageRef.current.value,
    };

    emailjs
      .send('service_o194b2q', 'template_69jgfej', templateParams, '3yO4M7kHRJneVN-IG')
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          e.target.reset();
        },
        (error) => {
          console.error('Email failed to send:', error);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };


  return (
    <section className='py-16 lg:section lg:mt-64' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text here */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-start'>
            <div>
              <h4 className='uppercase text-yellow-200 
              text-[40px] font-medium mb-2 tracking-wide'>Get In Touch</h4>

              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12' >Let's work <br />together!
              </h2>
            </div>
          </motion.div>
          {/* contact form  */}
          <motion.form
            onSubmit={handleFormSubmit}
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start '>

            <input
              ref={nameRef}
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-yellow-200 transition-all'
              type='text'
              name="user_name"
              placeholder='Your Name'
            />
            <input
              ref={emailRef}
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-yellow-200 transition-all'
              type='email'
              name="user_email"
              placeholder='Your Email'
            />
            <textarea
              ref={messageRef}
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-yellow-200 transition-all resize-none mb-12'
              name="message"
              placeholder='Your Message'
            >

            </textarea>
            <button
              className='btn btn-lg'
              type='submit'
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send'}

            </button>
          </motion.form>
        </div>
      </div>
    </section>

  );
};

export default Contact;
