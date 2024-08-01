import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import MyTecs from "./components/MyTec";
import Projetos from './components/mainProjetos';
import Rodape from './components/rodape';
import "./App.css";
function App() {

  const [dark, setDark] = React.useState(false);
  const [iconMenu, setIconMenu] = React.useState(false);
  const icon = dark ?  <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>;
  const menuIcon = iconMenu ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i> ;
  
  function Dark() {
       setDark(prevState => !prevState)
  }

  function Menu() {
      setIconMenu(prevState => !prevState)
 }

 React.useEffect(() => {
    const body = document.body;
    if(dark) {
      body.classList.add('dark')
    }else {
      body.classList.remove('dark')
    }
 })

 /*
   <MyTecs/> 
      <Projetos/> 
 */
  
  return (
     <>
    <Header iconMenu={iconMenu} icon={icon} menuIcon={menuIcon}
     hundleMenu={Menu}
     darkMode={Dark}
     dark={dark}/>
      <Hero darkMode={dark}/>
     <MyTecs/> 
     <Projetos darkMode={dark}/> 
     <Rodape darkMode={dark}/>
     </>
  )
}

export default App
