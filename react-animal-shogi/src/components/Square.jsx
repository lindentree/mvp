import React from 'react';


function Square(props) {
   let param = props.piece;
   console.log('square', param)

   if (param === undefined || param === null ) {
     return <button className={"square img" + props.id} onClick={props.onClick}>
       <div className="cell"></div>
    </button>
   }


  return (
    <button className={"square img" + props.id} onClick={props.onClick}>
      <div className={"cell " + props.piece.name}></div>
    </button>
  );
}

export default Square;