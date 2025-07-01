import React from "react";
import "./LeftBottom.css";

const LeftBottom = () => {
  return (
    <>
      <div className="main">
        <div className="container-lb">
          <p>
            At Manvian, we’re driven by clear objectives: <br />

Create Pathways & Opportunity <br />
Unlocking entrepreneurial potential for all—regardless of background. <br />

Empower Diverse Entrepreneurs <br />
Championing women empowerment, equity, and inclusive growth. <br />

Drive Positive Impact <br />
Advancing sustainable practices and community upliftment. <br />

Deliver Measurable Growth <br />
Ensuring ROI, scalability, and lasting market leadership <br />
          </p>
            <img src="\src\assets\image.png" alt="" width={669} height={636}  style={{ transform: 'rotate(270deg)', transformOrigin: 'center' }}/>
        </div>
        <div className="icon-left-bottom">
           <img src="\src\assets\Icon4.png" alt="" width={182} height={182} />
        </div>
        <div className="blue-box-lb">
          <img
            src="\src\assets\bluebox.png "
            alt=""
            width={300}
            height={300}
            className="two"
            style={{ transform: 'rotate(180deg)', transformOrigin: 'center' }}
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
