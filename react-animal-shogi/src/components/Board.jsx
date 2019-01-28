import React from 'react';
import Square from './Square.jsx';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [null, {value: 200}, null,
                null, null, null,
                null, null, null,
                null, {value: 200}, null
                ],
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