import React from 'react';
// countup
import CountUp from 'react-countup';
// Interoectton ob,server hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    treshold: 0.5,
  });
  return(
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* image */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
        {/* text */}
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>
            A propos de moi
          </h2>
          <h3 className='h3 mb-4'>
            Je suis étudiant en BTS SIO option SLAM.
          </h3>
          <p className='mb-6'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero officiis officia fuga necessitatibus tempore excepturi alias dicta labore molestiae similique?
          </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={3} duration={2} /> : 
                null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Années <br />
                d'Expérience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={4} duration={2} /> : 
                null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projets <br />
                accomplis
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Me contacter</button>
            <a href="#" className='text-gradient btn-link'>
              Mon Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;