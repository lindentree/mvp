import React from 'react';
import Square from './Square.jsx';


let initialBoardState = [
                {piece:"enemyGiraffe"}, {piece: "enemyLion"}, {piece:"enemyElephant"},
                null, {piece: "enemyChick"}, null,
                null, {piece: "playerChick"}, null,
                {piece:"playerElephant"}, {piece: "playerLion"}, {piece:"playerGiraffe"}
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

  handleClick() {

  }

  renderSquare(i) {
    //console.log('outer', this.state.squares[i])
    return (
      <Square 
        id= {i + 1}
        piece= {this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Sente';

    return (
      <div className="board" id="one">
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