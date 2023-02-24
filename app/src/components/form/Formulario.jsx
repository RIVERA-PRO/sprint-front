import React from 'react'
import './formulario.css'
export default function Formulario() {
  return (
   <div className='register-fondo'>

<div className='register'>
            
            <h2>Welcome!</h2>
            <p className='register-text'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
             <form className='form'>
                 <fieldset>
                     <legend>Name</legend>
                     <input type='text' name='name' id='name' />
                     <img src='./img/profile.svg' alt='profile'/> 
                 </fieldset>
                 <fieldset>
                     <legend>Email</legend>
                     <input type='email' name='email' id='email' />
                     <img src='./img/@.svg' alt='@'/>
                 </fieldset>
                 <fieldset>
                     <legend>Password</legend>
                     <input type='password' name='password' id='password' />
                     <img src='./img/lock.svg' alt='lock'/>
                 </fieldset>
                 <fieldset>
                     <legend>Confirm Password</legend>
                     <input type='password' name='confirm-password' id='confirm-password' />
                     <img src='./img/lock.svg' alt='lock'/>
                 </fieldset>
                 <fieldset className='notification-check'>
                     <input type="checkbox" name='email-notification' id='email-notification' />
                     <label htmlFor='email-notification'>Send notification to my email</label>
                 </fieldset>
                <div> <a href='#' className='sign-up'>Sign up</a></div>
                 <a href='#' className='sign-in-google'><img src='./img/Google.svg' alt='Google'/><span>Sign in with Google</span></a>
                 <p>Already have an account? <a href='#' className='link'>Log in</a></p>
                 <p>Go back to <a href='#' className='link'>home page</a></p>
             </form>
      
     </div>
    <div className='img-register'>
        <img src="./img/Rectangle.png" alt="Rectangle" />

    </div>
   </div>
  )
}
 