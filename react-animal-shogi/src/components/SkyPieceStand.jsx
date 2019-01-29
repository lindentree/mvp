import React from 'react';
import Square from './Square.jsx';

let test = {piece: "enemyChick"}

export default class SkyPieceStand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [null, null, null, null, null, null],
      SenteIsNext: true,
    };
  }

  renderSquare(i) {
     return (
      <Square 
        piece= {this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }

  dropPiece(i) {

  }

  render() {

    return (
      <div>
  
        <div id="skyStand">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
      </div>
    );
  }
}
