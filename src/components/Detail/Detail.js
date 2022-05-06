import React from "react";
import Snow from '../../assets/icons/Snow-Col.svg'
import './Detail.css'

const Detail = () => {
  return (
    <div className="detail">
      <div className="today">
        <section className="title">
          Village Baskerville <button type="submit" className="location_button">My Location</button>
        </section>
        <section className="time-and-yesterday-data">
          Now is 18:98. This time yesterday +10°
        </section>
        <section className="time-and-yesterday-data">
          <div className="temp">+16°</div>
          <img src={Snow} alt="sun" className="icon" />
          <div className="feelings">
            <div className="orient">Partly Cloud</div>
            <div className="feels-like">Feels like +12°</div>
          </div>
        </section>

      </div>
      <div className="map">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia reprehenderit quis, minus enim non ipsa earum, porro quisquam fugit fuga quasi consectetur voluptas. Facere veritatis reiciendis voluptate officiis quis? Fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora, aliquid harum minus dignissimos itaque incidunt, dolores eveniet explicabo sunt facilis, amet temporibus. Facilis enim earum magnam perspiciatis saepe eveniet!
      </div>
    </div>

  );
}

export default Detail;