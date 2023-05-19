import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ecy56dc', 'template_wu7kyma', form.current, '0PTQej5eJvh7KO9MZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <div className="Join" id="join-us">
     <div className="left-j">
     <hr />
       <div>
       <span className="stroke-text">STAY SAFE</span>
       <span>AND HEALTHY</span>
       </div>  
       <div>
       <span className="stroke-text">WITH US?</span>    
       
       
       </div>  
     
     </div>
     <div className="right-j">
      <form ref={form} className="email-container" onSubmit={sendEmail}>
         <input type="email" name="user_email" placeholder="E-Mail Your Address" />
         <button className="btn btn-j">PLACE ORDER</button>
      
      
      </form>
     
     
     
     
     </div>
      
    </div>
  )
}

export default Join
