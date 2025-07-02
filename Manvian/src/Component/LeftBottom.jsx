import React from "react";
import "./LeftBottom.css";
import "animate.css";
import { useInView } from 'react-intersection-observer';

const LeftBottom = () => {
  
     const { ref: containerRef, inView } = useInView({
      triggerOnce: false,  
      threshold: 0.3,      
    });
  
  return (
    <>
      <div className="main">
        <div className="container-lb" ref={containerRef}>
          <p>
            <ul className="value-list">
  <li>Opportunity Creation</li>
  <li>Entrepreneurial Empowerment</li>
  <li>Inclusive Growth</li>
  <li>Women & Youth Upliftment</li>
  <li>Sustainable Impact</li>
  <li>Scalable Growth & ROI</li>
</ul>
          </p>
          <img
            src="\src\assets\image.png"
            alt=""
            width={669}
            height={636}
            style={{ transform: "rotate(270deg)", transformOrigin: "center" }}
          />
        </div>
        <div className="icon-left-bottom">
          <img
            src="\src\assets\Icon4.png"
            alt=""
            width={182}
            height={182}
            className="wave-animation"
          />
        </div>
        <div className={`blue-box-lb animate__animated ${inView ? 'animate__backInLeft' : 'hide-blue-box-lb'}`}>
          <img
            src="\src\assets\bluebox.png "
            alt=""
            width={300}
            height={300}
            className="two"
            style={{ transform: "rotate(180deg)", transformOrigin: "center" }}
          />
          <strong>
            <h1>Our Goal</h1>
          </strong>
        </div>
      </div>
    </>
  );
};

export default LeftBottom;
