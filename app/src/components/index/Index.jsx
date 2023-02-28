import React from 'react'
import Home from '../hom/Home';
import Homefondo from '../Homefondo'
import Formulario from '../form/Formulario';
import Header from '../../layouts/Header';
// import Footer from '../footer/Footer';
// import Fondo from '../backround/Fondo';


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
