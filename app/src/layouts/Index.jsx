import React from 'react'
import Home from '../components/hom/Home';
import Homefondo from '../components/Homefondo'
import Formulario from '../components/form/Formulario';
import Header from './Header';
// import Footer from '../components/footer/Footer';
// import Fondo from '../components/backround/Fondo';


export default function Index() {
  return (
    <div>
       <Header/>
      <Home/>
    <Homefondo/>
      <Formulario/>
      {/* <Fondo/>
      <Footer/> */}
    </div>
  )
}
