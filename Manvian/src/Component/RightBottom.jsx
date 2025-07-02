import React from "react";
import "./RightBottom.css";

const RightBottom = () => {
  return (
    <>
      <div className="main">
        <div className="container-rb">
          <p>
            Integrity and Trust
 We believe in doing the right thing, always. Our work is grounded in ethics, transparency, and trust.


Vision with Action
 We don’t just strategize — we execute. Bold thinking meets meticulous delivery to bring powerful ideas to life.


Ecosystem Empowerment
 We grow businesses by uplifting the people, communities, and systems they touch.


Innovation for Impact
 We embrace change and lead with creativity, continuously evolving to deliver meaningful results.


People-Centric Growth
 Whether it’s our clients, their customers, or our own team — we prioritize human potential and connection in everything we build
Sustainability-Minded
We build businesses that care — for the environment, for society, and for the generations that follow.
          </p>
          <img src="\src\assets\image.png" alt="" width={669} height={636} style={{ transform: 'rotate(180deg)', transformOrigin: 'center' }} />
        </div>
          <div className="icon-bottom">
          <img src="\src\assets\icon3.png" alt="" width={182} height={182} className="icon-bounce"/>
        </div>
        <div className="blue-box-rb">
          <img
            src="\src\assets\bluebox.png "
            alt=""
            width={300}
            height={300}
            className="two"
            style={{ transform: 'rotate(180deg)', transformOrigin: 'center' }}
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
