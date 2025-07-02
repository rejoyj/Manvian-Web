import React from "react";
import "./RightBottom.css";
import "animate.css";
import { useInView } from 'react-intersection-observer';

const RightBottom = () => {

   const { ref: containerRef, inView } = useInView({
        triggerOnce: false,  
        threshold: 0.3,      
      });

  return (
    <>
      <div className="main">
        <div className="container-rb" ref={containerRef}>
          <p>
           <ul className="value-list">
  <li>Create Pathways & Opportunities</li>
  <li>Empower Diverse Entrepreneurs</li>
  <li>Champion Equity & Inclusion</li>
  <li>Foster Women Empowerment</li>
  <li>Drive Sustainable Impact</li>
  <li>Deliver Scalable Growth</li>
</ul>
          </p>
          <img
            src="\src\assets\image.png"
            alt=""
            width={669}
            height={636}
            style={{ transform: "rotate(180deg)", transformOrigin: "center" }}
          />
        </div>
        <div className="icon-bottom">
          <img
            src="\src\assets\icon3.png"
            alt=""
            width={182}
            height={182}
            className="icon-bounce"
          />
        </div>
        <div className={`blue-box-rb animate__animated ${inView ? 'animate__backInRight' : 'hide-blue-box-rb'}`}>
          <img
            src="\src\assets\bluebox.png "
            alt=""
            width={300}
            height={300}
            className="two"
            style={{ transform: "rotate(180deg)", transformOrigin: "center" }}
          />
          <strong>
            <h1>Our Value</h1>
          </strong>
        </div>
      </div>
    </>
  );
};

export default RightBottom;
