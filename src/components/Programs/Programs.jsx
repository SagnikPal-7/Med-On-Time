import React from 'react'
import './Programs.css'
import {programsData, programsdata} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
         <div className="programs-header">
            <span className="stroke-text">Order</span>
            <span>Medicines</span>
            <span className="stroke-text">On Time</span>
         
         </div>
         <div className="program-categories">
          {programsData.map((program)=>(
            <div className="category">
              {program.image}
              <span>{program.heading}</span><span>{program.details}</span>
              <div className="join-now"><span>Order</span><img src={RightArrow} alt="" /></div>
            </div>
          ))}        
         
         </div>
      
    </div>
  );
};

export default Programs;
