import React from "react";
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
    };
  }


  onSubmit = e => {
    e.preventDefault();
    if (this.state.city === '') {
      console.log(this);
      alert('City can not be empty')
    } else {
      this.props.searchCity(this.state.city)
    }
    this.setState({ city: '' })
  }

  onChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBarChildren">
          <h5 className="text-white">Search Weather on your city</h5>
          <form onSubmit={this.onSubmit} className="formSearchCity">
            <input
              type="text"
              name="city"
              id="inputSearchCity"
              onChange={this.onChange}
              placeholder="SearchCity..."
            />
            <button type="submit" className="btn btn-outline-info text-white">Search</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar;
