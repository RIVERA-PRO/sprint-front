import React from 'react'
import Home from '../components/hom/Home';
import Homefondo from '../components/Homefondo'
import Formulario from '../components/form/Formulario';
import Header from '../layouts/Header';



export default function Index() {
  return (
    <div>
       <Header/>
      <Home/>
    <Homefondo/>
      <Formulario/>
    </div>
  )
}
