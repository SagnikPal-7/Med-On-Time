import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png";


const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
      <span>Some Reasons</span>
      <div>
      <span className="stroke-text">why</span>
      <span> choose us?</span>
      </div>

      <div className='details-r' id="plans2">
      <div><img src={tick} alt=""></img><span>OVER 140+ APPROVED DOCTORS</span> </div>
      <div><img src={tick} alt=""></img><span>DELIVERY ON TIME</span> </div>
      <div><img src={tick} alt=""></img><span>CONVENIENT AND RELIABLE TO CUTOMERS</span> </div>
      <div><img src={tick} alt=""></img><span>RELIABLE PHARMACEUTICAL PARTNERS</span> </div>
      </div>
      
      <span 
      style={{color:'var(--gray)',fontWeight:'normal'}}>
      <h1>OUR PARTNERS</h1>
      </span>
      <span 
      style={{color:'var(--gray)',fontWeight:'normal'}}>
      <h2>CIPLA</h2>
      <h2>APOLLO</h2>
      </span>


      {/* <div className="partners">
      <img src={adidas} alt="" />
      <img src={nike} alt="" />
      </div> */}
      
      </div>
    
    
    </div>
    
  )
}

export default Reasons
