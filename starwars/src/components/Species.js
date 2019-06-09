import React from "react";
import { Component } from "react";

class Species extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: []
    };
  }

  componentDidMount() {
    // NEEDS HOMEWORLD URL BELOW
    this.getCharacters(`${this.props.species}`);
    // console.log(this.props.homeworld)
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        // console.log(res.json());
        return res.json();
      })
      .then(data => {
        this.setState({ species: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  // NEED TO RENDER THE HOMEWORLD ELEMENT
  render() {
    return (
      <p className="homeworld">
        <strong>Species: </strong>
        {this.state.species.name}, {this.state.species.classification}
      </p>
    );
  }
}

export default Species;
