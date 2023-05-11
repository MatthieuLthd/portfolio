import React from 'react';
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'
// icon
import {BsArrowDown} from 'react-icons/bs';
//img 
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'




const Contact = () => {
  return(
  <div className='section' id='contact'>
    <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent flex flex-col items-center '>
                Consulter mes informations de contact
                <motion.div
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}}>
                  <BsArrowDown/>
                </motion.div> 
              </h2>
            </div>
            {/* image */}
            <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='mt-10 ml-10 mb-10 '>
                <div className='items-center'>
                
                  

                  <div className=' mb-12 text-[23px] h1 text-gradient btn-link'>
                    Nom :  <span id='p1'>LEAUTHAUD</span>
                  </div>
                  <div className=' mb-12 text-[23px] h1 text-gradient btn-link'>
                    Prénom :  <span>Matthieu</span>
                  </div>
                  <div className=' mb-12 text-[23px] h1 text-gradient btn-link'>
                    Email : <span>matthieuleauthaud@gmail.com</span>
                  </div>
                  <div className=' mb-12 text-[23px] h1 text-gradient btn-link'>
                    Téléphone : <span>07 . 81 . 70 . 55 . 77</span>
                  </div>
                </div>
            
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
  </div>
  );
};


export default Contact;
