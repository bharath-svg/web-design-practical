import React from "react";
import "./work.css";
import img1 from "../../images/IconDual (1).png";
import img2 from "../../images/IconDual (2).png";
import img3 from "../../images/IconDual.png";


const work = () => {
  return (
    <div className="work-page">
      <div className="work-page-first">
        <h4>
          <span className="span-text">How</span> on-demand staffing works
        </h4>
      </div>
      <div className="work-page-last">
        <div className="work-page-last-child-1">
          <img src={img3} alt="img4" className="img1" />
          <p>step 1</p>
          <h5>Quick SignUp</h5>
        </div>
        <div className="work-page-last-child-2">
          <img src={img2} alt="img2" className="img2" />
          <p>step 2</p>
          <h5>Post Job 24X7</h5>
          <p>
            Use our mobile app or web platform from the office or on the go, any
            time of day
          </p>
        </div>
        <div className="work-page-last-child-3">
          <img src={img3} alt="img3" className="img3" />
          <p>step 3</p>
          <h5>View Matches</h5>
          <p>
            With thousands of ready-to-go workers you can watch your jobs being
            filled in real time
          </p>
        </div>
        <div className="work-page-last-child-4">
          <img src={img1} alt="img1" className="img4" />
          <p>step 4</p>
          <h5>We do the Rest</h5>
          <p>We take care of payroll, deductions and insurance</p>
        </div>
      </div>
    </div>
  );
};

export default work;
