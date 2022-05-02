import React from "react";
import "./Icon.css";
import Cloudy from "../../assets/cloudy.svg";
import Rain from "../../assets/rain.svg";
import Snowing from "../../assets/snowing.svg";
import Sun from "../../assets/sun.svg";
import Thermometer from "../../assets/thermometer.svg";

const Icon = props => {
  switch (props.icon) {
    case 801:
      return <img className="Icon" src={Cloudy} />
      break;
    case 802:
      return <img className="Icon" src={Cloudy} />
      break;
    case 803:
      return <img className="Icon" src={Cloudy} />
      break;
    case 200:
      return <img className="Icon" src={Cloudy} />
      break;
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