import React from 'react';


class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="sky"></div>
        <div className="game-board">
          <Board />
        </div>
        <div className="forest"></div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;


