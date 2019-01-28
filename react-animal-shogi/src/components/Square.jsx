import React from 'react';
import Raion from './pieces/raion.jsx';
import Hiyoko from './pieces/hiyoko.jsx';
import Zou from './pieces/zou.jsx';
import Kirin from './pieces/kirin.jsx';
import Niwatori from './pieces/niwatori.jsx';

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
      return <Raion player={props.value.orientation}/>;
    case 1:
      return <Hiyoko player={props.value.orientation}/>;
    case 5:
      return <Zou player={props.value.orientation}/>;
    case 7:
      return <Kirin player={props.value.orientation}/>;
    case 4:
      return <Niwatori player={props.value.orientation}/>;
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