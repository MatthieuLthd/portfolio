import React from 'react';
// images
import Image from '../assets/avatarMoi.svg';
// icons 
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// links
import { Link } from 'react-scroll';

const Banner = () => {
  return(
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount : 0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              MATTHIEU <span>LEAUTHAUD</span>
            </motion.h1>
            <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount : 0.7}}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-2'>Je suis un</span>
              <TypeAnimation
                sequence={[
                  'Etudiant',
                  2000,
                  'Programmeur',
                  2000,
                  'Devloppeur',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount : 0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Bienvenue sur mon portfolio ! Cliquez sur la barre de navigation pour vous déplacer directement dans les différentes rubriques.
            </motion.p>
            <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount : 0.7}}
            className='flex ml-12 gap-x-8 items-center mb-12 mx-auto'>
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
              <a href="#" className='text-gradient btn-link'>Mon Portfolio</a>
              </div>  
            </motion.div>
              {/* Socials */}
              <motion.div
              variants={fadeIn('up', 0.8)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount : 0.7}}
              className='flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://github.com/MatthieuLthd">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/matthieu__leo/">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/matthieu-l%C3%A9authaud-75b08a272/">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
          variants={fadeIn('down', 0.5)}
          initial="hidden"
          whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <embed src={Image} alt=''/>
          </motion.div>
        </div>
      </div>
    </section>
    );
  };
export default Banner;
