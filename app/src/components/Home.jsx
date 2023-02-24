import React from 'react'

import './home.css'


export default function Home() {
  return (
    <div className='contain'>
    <div className='home-contain'>
    <div className='poster-img1'>
      <img src="./img/personaje.png" alt="personaje" className='img'/>
      </div>

      <div className='poster-img'>
      <img src="./img/trigun.png" alt="trigun"/>
      </div>

      <div className='home-text'>
        
          <div><h5>Trigun Stampede</h5></div>
        <div>  <p>Manga</p></div>
          <div><h6>TRIGUN is a popular action manga by Yasuhiro Nightow that follows the story of Vash Stampede, a legendary gunfighter and pacifist with a huge bounty on his head.</h6></div>
      </div>
    
  </div>
  </div>
  )
}
