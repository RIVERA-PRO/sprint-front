import React from 'react'
import Index from '../components/index/Index'

export default function Indexlayout(props) {

  const {children} = props 
  return (
    <div>

      <Index/>
      {children}
    </div>
  )
}
