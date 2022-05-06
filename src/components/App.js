import React from "react";
import WeatherBody from "./WeatherBody/WeatherBody";
import './App.css';
import weather from '../apis/api';
import Loader from "./Loader/Loader";
import SearchBar from './SearchBar/SearchBar';
import Header from "./Header/Header";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: [],
      city: null,
      isLoaded: false
    }
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  searchCity = async city => {
    await weather
      .get(`daily?city=${city}&key=2e9ad84276ce48268c51707622214532`)
      .then(res => {
        const temp = res.data.data;
        const city = res.data.city_name;

        this.setState({
          temp, city, isLoaded: true
        });
      });
  };
  render() {

    const minTemp = this.state.temp.map(el => {
      return parseInt(el.low_temp)
    })

    const maxTemp = this.state.temp.map(el => {
      return parseInt(el.max_temp)
    })

    const icon = this.state.temp.map(el => {
      return el.weather.code
    })

    const description = this.state.temp.map(el => {
      return el.weather.description;
    })

    if (!this.state.isLoaded) {
      return <Loader msg={'Loading...'} />
    }



    return (
      <div className="App" >
        <Header></Header>
        <main>
          <div className="summary">
            <div className="tomorrow">
              tomorrow is gonna be Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
            <div className="week">
              about 2-3 days layet it gonna be Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="detail">
            <div className="today">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente temporibus, aut quod deleniti ipsum dicta excepturi officia, molestias corporis voluptatibus ipsam doloremque ut, mollitia obcaecati odio ipsa et velit fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio commodi quae adipisci? Quisquam quasi non vitae et exercitationem sequi eum ea. Explicabo dolore necessitatibus nemo dolorem et non repudiandae!</div>
            <div className="map">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia reprehenderit quis, minus enim non ipsa earum, porro quisquam fugit fuga quasi consectetur voluptas. Facere veritatis reiciendis voluptate officiis quis? Fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora, aliquid harum minus dignissimos itaque incidunt, dolores eveniet explicabo sunt facilis, amet temporibus. Facilis enim earum magnam perspiciatis saepe eveniet!
            </div>
          </div>
          <div className="ten-days">
            Very very long Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatum quos placeat accusantium assumenda soluta, mollitia quaerat hic eum quia! Est sint dicta similique suscipit nobis quidem, ducimus fugit tempore?
          </div>
          <div className="miscellaneous">
            <div className="daylight">Daylight</div>
            <div className="other-towns">Other Towns</div>
            <div className="months">Months</div>
          </div>
        </main>
        <section>
          <div className="coming">
          </div>
        </section>
      </div>
    )
  }
}





export default App;