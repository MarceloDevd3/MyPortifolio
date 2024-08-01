import React from 'react';

import Projeto02 from './projetos base/02.jpeg';
import Projeto03 from './projetos base/03.jpeg';
import Projeto04 from './projetos base/04.jpeg';
import Projeto06 from './projetos base/06.jpeg';
import Projeto08 from './projetos base/08.jpeg';
import Projeto11 from './projetos base/11.jpeg';
import Projeto10 from './projetos base/10.jpeg';
import Projeto13 from './projetos base/13.jpeg';
import Projeto12 from './projetos base/12.jpeg';
import Projeto14 from './projetos base/09.jpeg';


export default function Projetos(props) {
    
    return (
     <>
       <section className='container'>
       <h2 className={props.darkMode ? "title dark " : "title"}>My projects (v 1.0) </h2>
          <div className='grid-container'>
          <div className='projects'>

            <div className='project-item item1'>
            <a href='https://marcelodevd3.github.io/interactive-card-details-form/' target='_self'>
            <img src={Projeto04} alt="projeto" />
            </a>
            </div>
            <div className='project-item item2'>
               <a href='
https://marcelodevd3.github.io/Startbucks/' target='_self'>
               <img src={Projeto10} alt="projeto" />
               </a>
            </div>

            <div className='project-item item3'>
             <a href='
https://cinemark-main.vercel.app/' target="_self">
            <img src={Projeto13} alt="projeto" />
             </a>
            </div>
            <div className='project-item item4'>
            <a href='
https://calculator-tip-react-five.vercel.app/' target="_self">
             <img src={Projeto03} alt="projeto" />
              </a>
            </div>

            <div className='project-item item5'>
            <a href='https://plants2024.vercel.app/' target="_self">
             <img src={Projeto12} alt="projeto" />
              </a>
            </div>
            <div className='project-item item6'>
               <a href='
https://marcelodevd3.github.io/notifications-page/' target='_self'>
            <img src={Projeto02} alt="projeto" />
               </a>
            </div>


            <div className='project-item item7'>
            <a href='
https://marcelodevd3.github.io/Spongbob-loadingpage/' target="_self">
            <img src={Projeto11} alt="projeto" />
              </a>
            </div>
            <div className='project-item item8'>
            <a href='
https://marcelodevd3.github.io/intro-component-with-signup-form-master/
' target="_self"> 
            <img src={Projeto06} alt="projeto" />
              </a>
            </div>



            <div className='project-item item9'>
            <a href='
https://ip-address-tracker-seven-livid.vercel.app/' target="_self">
            <img src={Projeto08} alt="projeto" />
              </a>
            </div>
            <div className='project-item item10'>
            <a href='https://api-advice-generator-lime.vercel.app/' target="_self">
            <img src={Projeto14} alt="projeto" />
              </a>
            </div>
          </div>
          </div>
      </section>
     </>
    )
}