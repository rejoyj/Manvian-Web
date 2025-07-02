import React from "react";
import "./LeftBottom.css";
import "animate.css";

const LeftBottom = () => {
  return (
    <>
      <div className="main">
        <div className="container-lb">
          <p>
            <strong>
              At Manvian, we’re driven by clear objectives: <br />
            </strong>
            <ul>
              <li>
                Create Pathways & Opportunity Unlocking entrepreneurial
                potential for all—regardless of background.
              </li>
              <li>
                Empower Diverse Entrepreneurs Championing women empowerment,
                equity, and inclusive growth.
              </li>
              <li>
                Drive Positive Impact Advancing sustainable practices and
                community upliftment.
              </li>
              <li>
                Deliver Measurable Growth Ensuring ROI, scalability, and lasting
                market leadership
              </li>
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
        <div className="blue-box-lb animate__animated animate__backInLeft">
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
