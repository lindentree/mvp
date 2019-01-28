import React from 'react';
import Raion from './pieces/raion.jsx';

function Square(props) {
   let param = props.value;
   console.log('square', param)

   if (param === undefined || param === null ) {
     return <button className="square" onClick={props.onClick}>
    </button>
   }

let renderSwitch = (param) => {
  console.log('render', param)
  switch(param.value) {
    case 200:
      return <Raion player={props.value}/>;
    default:
      return null;
  }
}


  return (
    <button className="square" onClick={props.onClick}>
      {renderSwitch(param)}
    </button>
  );
}

export default Square;