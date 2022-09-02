import React from 'react';

import img2 from './Images/healthcare-workers-prevent-virus-insurance-medicine-concept-supportive-professional-female-nurse-doctor-blue-scrubs-stethoscope-show-thumbs-up-approval-smiling.jpg'

import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className="about">
            <h2 className=" txt-succ mt-5  mb-10">About Us</h2>
            <hr className='w-50 mx-auto mb-2 mt-0' />

       <div className="aboutCard">
       <img src={img2} className="card-img-top imagec" alt="..."></img>
                   
                   <div className='about-content'>
                   <h3 className="card-title">Our Best Surgeons</h3>
                   <p className="card-text ">We have the best surgeon in our medical and if you want these service try to contact with us. <br/> you will get the excellent services from they are the best surgeons from every department.</p>
                   </div>
                  
       </div>
               
                  

              
               
              
           
        </div>
    );
};

export default AboutUs;