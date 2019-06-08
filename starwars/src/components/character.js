import React from 'react';
import HomeWorld from './HomeWorld'

function Character(props) {

  return (
    <div className="character">
      <h3>{props.character.name}</h3>
      <p>
        <strong>Gender: </strong> {props.character.gender}
      </p>
      <p>
        <strong>Species: </strong>
      </p>
      <p>
        <strong>Home World: </strong>
      </p>
      <HomeWorld homeworld={props.character.homeworld} />
    </div>
  );
};

export default Character;