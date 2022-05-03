import React from "react";
import './SearchBar.css'

class SearchBar extends React.Component {
  state = {
    city: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.city) {
      this.setState({ city: this.state.city })
    }
  }

  onSubmit = e => {
    e.prventDefault();
    if (this.state.city === '') {
      alert('City can not be empty')
    } else {
      this.props.searchCity(this.state.sity)
    }
    this.setState({ city: '' })
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBarChildren">
          <h5 className="text-white">Search Weather on your city</h5>
          <form onSubmit={this.onSubmit} className="formSearchCity">
            <input type="text" name="city" id="inputSearhCity" onChange={this.Onchange} placeholder="SearchCity..." />
            <button type="submit" className="btn btn-outline-info text-white">Search</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar;
