import React from "react";
import "./LeftTop.css";
import 'animate.css';
import { useInView } from 'react-intersection-observer';


const LeftTop = () => {

   const { ref: containerRef, inView } = useInView({
    triggerOnce: false,  
    threshold: 0.3,      
  });

  return (
    <>
      <div className="main">
        <div className="container" ref={containerRef}>
          <p>
            To be a global force for good - To inspire a world where businesses
            are built not just to succeed, but to serve by redefining the way
            the world does business by building ventures that focus on people ,
            planet and purpose by creating lasting value.
          </p>
          <img src="\src\assets\image.png" alt="" width={669} height={636} />
        </div>
        <div className="icon">
          <img src="\src\assets\Icon.png" alt="" width={182} height={182} className="rocket-icon" />
        </div>
        <div className={`blue-box animate__animated ${inView ? 'animate__backInLeft' : 'hide-blue-box'}`}>
          <img
            src="\src\assets\bluebox.png "
            alt=""
            width={300}
            height={300}
            className="two"
          />
          <strong>
            <h1>Our Vision</h1>
          </strong>
        </div>
      </div>
    </>
  );
};

export default LeftTop;
