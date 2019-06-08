import React, { Component } from 'react';
import Character from './components/Character'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      name: '',
      gender: '',
      species: [],
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
  
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results});
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className='charList'>
          {this.state.starwarsChars.map((char, index) => {
            return <Character character={char} key={index} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
