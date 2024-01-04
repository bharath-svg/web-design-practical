import React from "react";
import "./employe.css";
import employImage from "../../images/employee.png";

const Employe = () => {
  return (
    <div className="employe">
      {/* Left Side */}
      <div className="employe-first">
        <img className="" src={employImage} alt="/" />
      </div>

      {/* Right Side */}
      <div className="employe-second">
        <div className="employe-second-first">
          <h4>
            <span className="span-text">Workforce</span>
            &nbsp;At Your <br /> Fingertips
          </h4>
        </div>

        <div className="employe-second-sec">
          <ul>
            <li>Easy to use mobile & web platform</li>
            <li>
              <b>45,000+</b> workers
            </li>
            <li>Realtime tracking</li>
            <li>
              <b>95%</b> fulfillment rate
            </li>
            <li>Preferred worker list</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Employe;
