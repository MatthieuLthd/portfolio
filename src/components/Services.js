import React from 'react';
// icon
import {BsArrowUpRight} from 'react-icons/bs';
// motion
import {motion} from 'framer-motion'
// variants
import { fadeIn } from '../variants';

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
              Retrouvez ici les mes formations passées ainsi que celles en cours et les stages que j'ai effectué 
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
              <div>
                {/** BAC */}
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex'>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px tracking-wider font-primary font-semibold mb-6]'>Formation acquise</h4>
                    <p className='font-secondary leading-tight mt-4'>
                    <b>Bac Général</b> options <b>NSI</b> & <b>Maths</b> obtenu avec mention <b>Bien</b> Etablissement : Lycée Violet Le Duc - Villiers St-Fréderic
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
                      <a href="#" className='text-gradient text-sm'>En apprendre plus</a>
                    </motion.div>
                </div>
                {/** BTS */}
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex'>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px tracking-wider font-primary font-semibold mb-6]'>Formation en cours</h4>
                    <p className='font-secondary leading-tight mt-4'>
                    <b>BTS SIO</b> option <b>SLAM</b> (Solution logiciels et applications métier) Etablissement : Lycée Jean Vilar - Plaisir
                    </p>
                  </div>
                  <motion.div
                    variants={fadeIn('left', 0.8)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.3}}
                    className='flex flex-col flex-1 items-end'>
                      <a href="https://www.onisep.fr/Ressources/univers-formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href="https://www.onisep.fr/Ressources/univers-formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers" className='text-gradient text-sm'>En apprendre plus</a>
                    </motion.div>
                </div>
                {/** Stage */}
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex'>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px tracking-wider font-primary font-semibold mb-6]'>Stages</h4>
                    <p className='font-secondary leading-tight mt-4'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque natus ratione, facilis laudantium veritatis aut eius aperiam vel similique.
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
                      <a href="#" className='text-gradient text-sm'>En apprendre plus</a>
                    </motion.div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    );
  };


export default Services;
