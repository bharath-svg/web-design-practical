import React from "react";
import "./locate.css";
import mapImg from "../../images/map-image.png";

const Locate = () => {
  return (
    <div className="locate">
      <div className="locate-first">
        <div className="locate-first-child">
          <p>Grizzly Force Cities</p>
          <h4>
            Serving{" "}
            <span className="span-text">
              spanthe Greater <br /> Vancouver, Victoria,
              <br /> Okanagan, Calgary & <br /> Toronto areas
            </span>
          </h4>
        </div>
        <div className="locate-sec-child">
          <img src={mapImg} alt="img" />
        </div>
      </div>
      <div className="locate-sec">
        <button className="btn-one">Looking for additional help?</button>
        <button className="btn-two">Looking for extra cash?</button>
      </div>
    </div>
  );
};

export default Locate;
