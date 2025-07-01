import React from "react";
import "./RightTop.css";

const RightTop = () => {
  return (
    <>
      <div className="main">
        <div className="container-rt">
          <p>
            At the heart of Manvian is the belief that success is best shared.
            Our mission is to empower businesses to unlock their true potential.
            We partner with visionary leaders to craft innovative, personalized
            strategies that not only drive revenue but also build authentic
            brand identities, elevate client experiences, and create lasting
            value with ROI.
          </p>
          <img
            src="\src\assets\image.png"
            alt=""
            width={669}
            height={636}
            style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
          />
        </div>
        <div className="icon-left">
          <img src="\src\assets\icon2.png" alt="" width={182} height={182} />
        </div>
        <div className="blue-box-rt">
          <img
            src="\src\assets\bluebox.png "
            alt=""
            width={300}
            height={300}
            className="two"
          />
          <strong>
            <h1>Our Mission</h1>
          </strong>
        </div>
      </div>
    </>
  );
};

export default RightTop;
