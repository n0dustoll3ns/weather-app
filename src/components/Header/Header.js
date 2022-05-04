import React from "react";
import SearchBar from "../SearchBar/SearchBar";
const Header = () => {
  return (<header>
    <ul>
      <li><a href="">Logo</a></li>
      <li><a href="">on map</a></li>
      <li><a href="">Forecast days</a></li>
      <li><a href="">Forecast month</a></li>
      <li><SearchBar></SearchBar></li>
      <li><a href="">Profile</a></li>
    </ul>
  </header>  );
}
 
export default Header;