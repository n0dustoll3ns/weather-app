import React from "react";
import "./Icon.css";
import Cloudy from "../../assets/cloudy.svg";
import Rain from "../../assets/rain.svg";
import Snowing from "../../assets/Snowing.svg";
import Sun from "../../assets/Sun.svg";
import Thermometer from "../../assets/Thermometer.svg";

const Icon = props => {
  switch (props.icon) {
    case 'Cloudy':
      return <img className="Icon" src={Cloudy} />
      break;
    case 'Rain':
      return <img className="Icon" src={Rain} />;
      break;
    case 'Sun':
      return <img className="Icon" src={Sun} />;
      break;
    case 'Snowing':
      return <img className="Icon" src={Snowing} />;
      break;
    default:
      return <img className=" Icon" src={Thermometer} alt={Thermometer} />
  }


}

export default Icon;