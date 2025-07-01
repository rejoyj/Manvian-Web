import React from "react";
import "./RightTop.css";

const RightTop = () => {
  return (
    <>
      <div className="main">
        <div className="container-rt">
          <p>
            To be a global force for good - To inspire a world where businesses
            are built not just to succeed, but to serve by redefining the way
            the world does business by building ventures that focus on people ,
            planet and purpose by creating lasting value. (We envision a world
            where growth is not just measured by numbers, but by the value we
            create for communities, the opportunities we unlock for individuals,
            and the positive impact we leave on the planet.)
          </p>
          <img src="\src\assets\image.png" alt="" width={669} height={636} style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }} />
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
            <h1>Our Vision</h1>
          </strong>
        </div>
      </div>
    </>
  );
};

export default RightTop;
