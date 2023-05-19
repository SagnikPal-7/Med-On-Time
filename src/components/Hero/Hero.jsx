import React from 'react'
import  './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import{motion} from 'framer-motion'
import NumberCounter from 'number-counter'


const Hero = () => {
  const transition={type:'spring', duration:3}
  const mobile=window.innerWidth<=768 ? true:false;
  return (
    <div className="hero" id='home'>
    <div className='blur hero-blur' ></div>
       <div className="left-h">
       <Header/>
       <div className="the-best-ad">
        <motion.div 
        initial={{left:mobile ? "140px":'238px'}} 
        whileInView={{left:'8px'}} 
        transition={{...transition,type:'tween'}}>
        </motion.div>
        <span>Bringing Health Care to your Doorstep : Fast, Convenient, Reliable</span>
       </div> 
       
       

        <div className='hero-text'>
        <div><span className="stroke-text">Good</span>
           <span>Health</span>
           
        </div>
        <div>
        <span></span>
        </div>
        
    
       
        </div> 




        <div className="figures">
       
        <div>
        <span><NumberCounter end={140} start={100} delay='4' preFix="+" /> </span>
        <span>Approved Doctors</span>
        </div>
       
        <div>
        <span><NumberCounter end={1000} start={700} delay='4' preFix="+" /> </span>
        <span>Satisfied Customers</span>
        </div>
        
        <div>
        <span><NumberCounter end={50} start={20} delay='4' preFix="+" /></span>
        <span>Medical Shops</span>
        </div>        
    </div> 
    
    <div className='hero-buttons'>
    <buttons className="btn">Get Started</buttons>
    <buttons className="btn">Learn More</buttons>

    </div>
 </div>
 <div className="right-h">
<buttons className="btn">Order Now</buttons>


  <motion.div
  initial={{right:"-1rem"}}
  whileInView={{right:'4rem'}}
  transition={transition}
  className="heart-rate">
    <img src={Heart} alt="" />
    <span>Safe Delivery</span><span>On Time</span>
  
  </motion.div>
  <img src={hero_image} alt="" className="hero-image"/>
  
  <motion.img 
  
  initial={{right:"11rem"}}
  whileInView={{right:'20rem'}}
  transition={transition}
  
  src={hero_image_back} alt="" className="hero-image-back"/>

  <motion.div 
  initial={{right:"37rem"}}
  whileInView={{right:'28rem'}}
  transition={transition} 
  className="calories">
  <img src={Calories} alt="" />
  <span>Successful Deliveries</span><span><b>within 15 minutes</b></span> 
  
  </motion.div>
 
 </div>   

           
    
    
    </div>


  )
}

export default Hero
