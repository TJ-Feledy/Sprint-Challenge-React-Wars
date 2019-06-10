import React from 'react';
import HomeWorld from './HomeWorld'
import Species from './Species'

function Character(props) {

  return (
    <div className="character">
      <h3>{props.character.name}</h3>
      <p>
        <strong>Gender: </strong> {props.character.gender}
      </p>
      <Species species={props.character.species} />
      <HomeWorld homeworld={props.character.homeworld} />
    </div>
  );
};

export default Character;