import React from 'react';
import Square from './Square.jsx';

let test = {value: 7, orientation: 'sky'}
let otherTest = {value: 5, orientation: 'forest'}

export default class ForestPieceStand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [otherTest, null, null],
      SenteIsNext: true,
    };
  }

  renderSquare(i) {
     return (
      <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }

  dropPiece(i) {

  }

  render() {

    return (
      <div>
  
        <div className="piece-stand">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
      </div>
    );
  }
}
