import React from "react";
import Snow from '../../assets/icons/Snow-Nocol.svg'
import Sun from '../../assets/icons/Sun-Nocol.svg'
import RainNight from '../../assets/icons/RainNight-Nocol.svg'
import './Detail.css'

const Detail = () => {
  return (
    <div className="detail">
      <div className="today">
        <section className="title">
          Village Baskerville <button type="submit" className="location_button">My Location</button>
        </section>
        <section className="time-and-yesterday-data">
          Now is 18:48. This time yesterday +10°
        </section>
        <section className="time-and-yesterday-data">
          <div className="temp">+16°</div>
          <img src={Snow} alt="sun" className="icon" />
          <div className="feelings">
            <div className="orient">Partly Cloud</div>
            <div className="feels-like">Feels like +12°</div>
          </div>
        </section>
        <section className="properties">
          <div className="wind">
            Wind is Blowing
          </div>
          <div className="humidity">25%</div>
          <div className="pressure">725mmHg</div>
          <div className="water-temp">0°</div>
        </section>
        <section className="hourly">
          <div className="swiper-btn prev">⏴</div>
          <ul className="swiper-wrapper">
          <li className="hourly">
              <div className="hour-time">
                20:00
              </div>
              <img src={Sun} alt="" className="hour-icon" />
              <div className="hour-temp">
                +9°
              </div>
            </li>
            <li className="hourly">
              <div className="hour-time">
                20:00
              </div>
              <img src={Sun} alt="" className="hour-icon" />
              <div className="hour-temp">
                +9°
              </div>
            </li>
            <li className="hourly">
              <div className="hour-time">
                20:00
              </div>
              <img src={Sun} alt="" className="hour-icon" />
              <div className="hour-temp">
                +9°
              </div>
            </li>
            <li className="hourly">
              <div className="hour-time">
                20:00
              </div>
              <img src={Sun} alt="" className="hour-icon" />
              <div className="hour-temp">
                +9°
              </div>
            </li>
            <li className="hourly">
              <div className="hour-time">
                20:00
              </div>
              <img src={Sun} alt="" className="hour-icon" />
              <div className="hour-temp">
                +9°
              </div>
            </li>
            <li className="hourly">
              <div className="hour-time">
                20:00
              </div>
              <img src={Sun} alt="" className="hour-icon" />
              <div className="hour-temp">
                +9°
              </div>
            </li>
            <li className="hourly">
              <div className="hour-time">
                20:00
              </div>
              <img src={Sun} alt="" className="hour-icon" />
              <div className="hour-temp">
                +9°
              </div>
            </li>
            <li className="hourly">
              <div className="hour-time">
                20:00
              </div>
              <img src={Sun} alt="" className="hour-icon" />
              <div className="hour-temp">
                +9°
              </div>
            </li>
            <li className="hourly">
              <div className="hour-time">
                20:00
              </div>
              <img src={Sun} alt="" className="hour-icon" />
              <div className="hour-temp">
                +9°
              </div>
            </li>
            <li className="hourly">
              <div className="hour-time">
                20:00
              </div>
              <img src={Sun} alt="" className="hour-icon" />
              <div className="hour-temp">
                +9°
              </div>
            </li>
            <li className="hourly">
              <div className="hour-time">
                20:00
              </div>
              <img src={Sun} alt="" className="hour-icon" />
              <div className="hour-temp">
                +9°
              </div>
            </li>
            <li className="hourly">
              <div className="hour-time">
                20:00
              </div>
              <img src={Sun} alt="" className="hour-icon" />
              <div className="hour-temp">
                +9°
              </div>
            </li>
          </ul>
          <div className="swiper-btn next">⏵</div>
        </section>
      </div>
      <div className="map">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia reprehenderit quis, minus enim non ipsa earum, porro quisquam fugit fuga quasi consectetur voluptas. Facere veritatis reiciendis voluptate officiis quis? Fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora, aliquid harum minus dignissimos itaque incidunt, dolores eveniet explicabo sunt facilis, amet temporibus. Facilis enim earum magnam perspiciatis saepe eveniet!
      </div>
    </div>

  );
}

export default Detail;