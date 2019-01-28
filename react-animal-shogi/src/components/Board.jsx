import React from 'react';
import Square from './Square.jsx';


let initialBoardState = [
                {value: 7, orientation: 'sky'}, {value: 200, orientation: 'sky'}, {value: 5, orientation: 'sky'},
                null, {value: 1, orientation: 'sky'}, null,
                null, {value: 1, orientation: 'forest'}, null,
                {value: 5, orientation: 'forest'}, {value: 200, orientation: 'forest'}, {value: 7, orientation: 'forest'}
                ];


let pieces = [{}];

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: initialBoardState,
      SenteIsNext: true,
    };
  }

  renderSquare(i) {
    //console.log('outer', this.state.squares[i])
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Sente';

    return (
      <div className="board">
        <div className="playerTurn">{status}</div>
        <div className="sky-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="forest-row">
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
      </div>
    );
  }
}