
import React, { useRef } from "react";
import './formulario.css'
import axios from "axios";


export default function Formulario() {


    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    

  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      let data = {
          [nameRef.current.name]: nameRef.current.value,
          [emailRef.current.name]: emailRef.current.value,
          [passwordRef.current.name]: passwordRef.current.value,
          [confirmPasswordRef.current.name]: confirmPasswordRef.current.value
          
      }
      console.log(data)
      let url = 'http://localhost:8080/users'

      if(passwordRef.current.value === confirmPasswordRef.current.value){
        try {
            await axios.post(
                url,    /* URL del endpoint para crear una categoria */
                data    /* objeto necesario para crear una categoria (tal cual lo armo en postman) */
            )
           
            alert("Successful registration")
        } catch(error) {
            console.log(error)
            console.log('ocurrio un error')
        }
    }else{
      alert("Passwords do not match")

    }

    event.target.reset()
    
    }
  



  return (
   <div className='register-fondo'>

<div className='register'>
            
            <h2>Welcome!</h2>
            <p className='register-text'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>

            <form className="form" id="formulario" onSubmit={handleSubmit}>

            <fieldset>
            <legend>Name</legend>
            <input type="text" name="name" id="name" ref={nameRef} required />
            <img src='./img/profile.svg' alt='profile'/> 
          </fieldset>

          <fieldset>
            <legend>Email</legend>
            <input type="email" name="mail" id="mail" ref={emailRef}  required />
            <img src='./img/@.svg' alt='@'/>
          </fieldset>

          <fieldset>
            <legend>Password</legend>
            <input type="password" name="password" id="password" ref={passwordRef}  required />
            <img src='./img/lock.svg' alt='lock'/>
          </fieldset>

          <fieldset>
            <legend>Confirm Password</legend>
            <input type="password"  name="confirm_password" id="confirm_password" ref={confirmPasswordRef} required />
            <img src='./img/lock.svg' alt='lock'/>
          </fieldset>

          <fieldset className="notification-check">
            <input type="checkbox" name="email-notification" id="email-notification"/>
            <label htmlFor="email-notification">Send notification to my email</label>
          </fieldset>

            <div>
            <button type="submit" className="sign-up"> Sign up</button>
            </div>


            <a href="#" className="sign-in-google"> <img src='./img/Google.svg' alt='Google'/> <span>Sign in with Google</span></a>

            <p> Already have an account?<a href="#" className="link">Log in</a></p>
            
            <p>Go back to <a href="#" className="link"> home page</a></p>

            </form>
      
             </div>
            <div className='img-register'>
             <img src="./img/Rectangle.png" alt="Rectangle" />
             </div>
   </div>

   
  )
}
 

