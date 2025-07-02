import React from "react";
import "./RightBottom.css";
import "animate.css";

const RightBottom = () => {
  return (
    <>
      <div className="main">
        <div className="container-rb">
          <p>
            <ul>
              <li>Integrity and Trust <br />We believe in doing the right thing, always. Our work is grounded in ethics, transparency, and trust.</li>
              
              <li>Vision with Action <br />We don’t just strategize — we execute. Bold thinking meets meticulous delivery to bring powerful ideas to life.</li>
              
              <li>Ecosystem Empowerment <br/>We grow businesses by uplifting the people, communities, and systems they touch.</li>
              <li>Innovation for Impact <br /> We embrace change and lead with creativity, continuously evolving to deliver meaningful results.</li>
              <li>People-Centric Growth</li>
              <li>Sustainability-Minded</li>
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
        <div className="blue-box-rb animate__animated animate__backInRight">
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
