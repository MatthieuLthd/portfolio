/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Veille = () => {
  return(
    <div className='section' id='veille'>
      <div className="container mx-auto">
        <h1>Veille techno</h1>
        <div className='flex flex-col lg:flex-row relative overflow-hidden border-4 border-white/50 rounded-xl'>
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
