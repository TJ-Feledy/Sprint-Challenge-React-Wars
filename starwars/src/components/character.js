import React from 'react';

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
        <strong>Home World: </strong> {props.character.homeworld}
      </p>
    </div>
  );
};

export default Character;