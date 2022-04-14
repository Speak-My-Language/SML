import React from 'react';

//FROM DT on 4/12/21
/*Need to pass down from App Container, the props used by Matches
  should have a match property
  match should have a value that is an object
  object should have each match as a property
  each property should have the matche's information
For each key in the object containing matches
props.match = {
  match1: {
    name: 'match1 name'
    language used most: 'match1 most used language'
  }
}
Matches
TO-DO: How do we want matches to be displayed. Is list really the way?
*/

function MatchesInfo(props) {
  return (
    <ul>
      {/* render each match with some match information*/}
      {Object.keys(props.matches).map((el) => (
        <li key={`${el}: ${props.matches[el]}`}>
          {`${el}: ${JSON.stringify(props.matches[el])}`}
        </li>
      ))}
    </ul>
  );
}

export default MatchesInfo;
