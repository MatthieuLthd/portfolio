import React from 'react';
// icon
import {BsArrowUpRight} from 'react-icons/bs';
// motion
import {motion} from 'framer-motion'
// variants
import { fadeIn } from '../variants';

//services data
const services = [
  {
    name:'Formation acquise',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor odit suscipit reprehenderit nemo quo et ducimus maxime ut?',
    link: 'En apprendre plus',
  },
  {
    name:'Formation en cours',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor odit suscipit reprehenderit nemo quo et ducimus maxime ut?',
    link: 'En apprendre plus',
  },
  {
    name:'Stages',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor odit suscipit reprehenderit nemo quo et ducimus maxime ut?',
    link: 'En apprendre plus',
  }
]

const Services = () => {
  return(
    <div className='section' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text & images*/}
          <motion.div 
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>Ce que je fais</h2>
            <h3 className='h3 max-w-[600px] mb-16'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam.
            </h3>
            <button className='btn btn-sm'>Lorem, ipsum.</button>
          </motion.div>
          {/* services */}
          <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            {/* services list*/}
            <div>
              {services.map((service, index)=> {
                const {name, description, link} = service;
                return(
                  <div 
                  className='border-b border-white/20 h-[146px] mb-[38px] flex'
                  key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px tracking-wider font-primary font-semibold mb-6]'>{name}</h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <motion.div
                    variants={fadeIn('left', 0.8)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.3}}
                    className='flex flex-col flex-1 items-end'>
                      <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className='text-gradient text-sm'>{link}</a>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    );
  };


export default Services;
