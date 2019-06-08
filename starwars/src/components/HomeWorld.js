import React from 'react'
import { Component } from 'react'


class HomeWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeworld: ""
    };
  }

  componentDidMount() {
    // NEEDS HOMEWORLD URL BELOW
    this.getCharacters(`${this.props.homeworld}`);
          console.log(this.props.homeworld)

  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        // console.log(res.json());
        return res.json();
      })
      .then(data => {
        this.setState({ homeworld: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  // NEED TO RENDER THE HOMEWORLD ELEMENT
  render() {
    return (
      <div className='homeworld'>
        <p>{this.state.homeworld.name}</p>
      </div>
    )
  }
}

export default HomeWorld;