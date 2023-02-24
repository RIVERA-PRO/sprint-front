import React from 'react'
import './form.css'

export default function Form() {
  return (
    <div className='container-form'>
        <div>
            <h2>Welcome!</h2>
        </div>

        <form className='formulario'>
            <label htmlFor="">Name</label>
            <input type="text"/>
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <label htmlFor="">Confirm Password</label>
            <input type="password" />
            <input type="submit" className='button'/>

        </form>
      
    </div>
  )
}
