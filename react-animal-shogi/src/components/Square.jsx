import React from 'react';
import Raion from './pieces/raion.jsx';

function Square(props) {
   let param = props.value;

   if (props.value === undefined) {
     <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
   }

let renderSwitch = (param) => {
  switch(param) {
    case 200:
      return <Raion />;
    default:
      return 'foo';
  }
}







  return (
    <button className="square" onClick={props.onClick}>
      {renderSwitch(props)}
    </button>
  );
}

export default Square;