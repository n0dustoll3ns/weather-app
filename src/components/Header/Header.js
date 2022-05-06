import React from "react";
import './Header.css'


const Header = () => {
  return (<header>
    <nav>
      <ul>
        <li><a href="">Logo</a></li>
        <li><a href="">Forecast 10 days</a></li>
        <li><a href="">Forecast month</a></li>
        <li><a href="">on Map</a></li>
        <li>
          <form>
            <input type="search" placeholder="Your city" />
          </form>
        </li>
        <li><a href="">Profile</a></li>
      </ul>
    </nav>
    <div className="breadcrumbs">
      UK .. London ..
    </div>
  </header>);
}

export default Header;