import React from 'react';
// countup
import CountUp from 'react-countup';
// Interoectton ob,server hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';
// links
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    treshold: 0.5,
  });
  return(
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-15 lg:flex-row lg:items-center lg:gap-x-5 lg:gap-y-0 h-screen flex flex-col lg:flex-row'>
        {/* image */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top border-radius-50' id="imgAbout"></motion.div>
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
            Ces statistiques vont évoluer avec le temps au fur et à mesure de mes études
          </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={1} duration={2} /> : 
                null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Années <br />
                d'Expérience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={0} duration={2} /> : 
                null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projets <br />
                accomplis
              </div>
            </div>
          </div>
          <div className='ml-12 flex gap-x-8 items-center'>
          <div className='mr-12'>
                <Link to='contact' 
                activeClass='active'
                smooth = {true}
                spy = {true}
                className='cursor-pointer w-[80px] h-[60px] flex items-center justify-center'>
                  <button className='btn btn-lg mr-12'>Me contacter</button>
                </Link>
              </div>
              <div>
                <a href="https://docs.google.com/document/d/e/2PACX-1vSKlOb70NFdjQ3ZMs_Xwz46ApVSjCn2NwTc17gAgbJ6eDh-Cn4NZuBQDt1lezWY13X2pgtPy8ln7OXH/pub" className='text-gradient btn-link'>
                  Consulter mon CV
                </a>
              </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
