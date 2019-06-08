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
    this.getCharacters({});
          console.log(this.props)

  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ homeworld: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
}

export default HomeWorld;