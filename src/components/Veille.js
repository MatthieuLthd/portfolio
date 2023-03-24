/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Veille = () => {
  return(
    <div className='section' id='veille'>
      <div className="container mx-auto">
        <h2 className='h2 text-accent mb-6'>Veille technologique</h2>
        <h4 className='text-[20px tracking-wider font-primary font-semibold mb-6]'>Les progrès des services proposés par OpenAI</h4>
        <p>à compléter</p>
        <div className='flex flex-col lg:flex-row relative overflow-hidden border-4 border-white/50 rounded-xl mt-5'>
          <aside styl="background-color:#FFF"> 
            <iframe allowtransparency="true" src="https://www.pearltrees.com/matthieul1612/veille-technologique/id63959123?embed=2&d=202303071737" width="1200" height="783" title='Veille technologique'>
            </iframe>
          </aside>
        </div>
      </div>
    </div>
    );
  };

export default Veille;
