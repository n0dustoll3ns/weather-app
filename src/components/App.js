import React from "react";
import './App.css';
import weather from '../apis/api';
import Loader from "./Loader/Loader";
import Header from "./Header/Header";
import Summary from "./Summary/Summary";
import Detail from "./Detail/Detail";

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
    // const minTemp = this.state.temp.map(el => {
    //   return parseInt(el.low_temp)
    // })

    // const maxTemp = this.state.temp.map(el => {
    //   return parseInt(el.max_temp)
    // })

    // const icon = this.state.temp.map(el => {
    //   return el.weather.code
    // })

    // const description = this.state.temp.map(el => {
    //   return el.weather.description;
    // })

    if (!this.state.isLoaded) {
      return <Loader msg={'Loading...'} />
    }

    return (
      <div className="App" >
        <Header></Header>
        <main>
          <Summary></Summary>
          <Detail></Detail>
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