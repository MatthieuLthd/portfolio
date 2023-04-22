import React from 'react';
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'
//img 
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return(
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
                <h2 className='h2 leading-tight text-accent'>
                  Mes <br />
                  porjets.
                </h2>
                <p className='max-w-sm mb-16'>
                  Vous retrouverez dans cette section les projets réalisés pendant mes études et autre qui seront ajoutés au fil du temps.
                </p>
                <button className='btn btn-sm'>Consulter les autres projets</button>
              </div>
            {/* image */}
            <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div>
                {/* overlay */}
                <a href="https://srvweb.btssio.dedyn.io/LEAUTHAUD/TP4-PDO/">
                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 right-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Réalisation d'un site de gestion d'une bibliothèque lié à une base de donnée. <br />
                   Ce projet avait pour but de nous initier à l'utilisation du PHP tout en utilisant la méthode de travail MVC. <br /></span>
                   <span className='text-2xl text-accent'>Cliquez pour découvrir</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Projet Bibliothèque</span>
                </div>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-10'>
            <motion.div 
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
              {/* image */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                <div>
                  {/* overlay */}
                  <div className='group-hover:bg-black/40 w-full h-full absolute z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient'>dolor sit amet</span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-3xl text-white'>Nom projet</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-10'>
              <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                {/* image */}
                <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                  <div>
                    {/* overlay */}
                    <div className='group-hover:bg-black/40 w-full h-full absolute z-40 transition-all duration-300'></div>
                    {/* img */}
                    <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
                    {/* pretitle */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                      <span className='text-gradient'>dolor sit amet</span>
                    </div>
                    {/* title */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3xl text-white'>Nom projet</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    );
  };

export default Work;
