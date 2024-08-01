import React from 'react';

export default function Rodape(props) {
   return (
    <footer className='rodape'>
        <div className='row-icons'>
          <div className={props.darkMode ? "github dark" : "github"}>
             <a href='https://github.com/'>
             <i class="fa-brands fa-github"></i>
             </a>
          </div>
          <div className={props.darkMode ? "linkedin dark" : "linkedin"}>
             <a href='https://www.linkedin.com/in/italo-marcelo-06b130241/'>
             <i class="fa-brands fa-linkedin"></i>
             </a>
          </div>
        </div>
        <a href="#index.html" className={props.darkMode ? "copyright dark" : "copyright"}> <i class="fa-regular fa-copyright"></i>Marcelo todos os direitos reservados</a>
    </footer>
   )
}