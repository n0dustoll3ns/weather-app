import React from "react";
import './Summary.css'
import DrizzleNight from '../../assets/icons/DrizzleNight-Col.svg'
import Thermometer from '../../assets/icons/thermometer.svg'

const Summary = () => {
  return (
    <div className="summary">
      <div className="tomorrow">
        <img src={DrizzleNight} alt="sun" className="icon" />
        tomorrow is gonna be Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
      <div className="week">
        <img src={Thermometer} alt="sun" className="icon" />
        about 2-3 days layet it gonna be Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
    </div>

  );
}

export default Summary;