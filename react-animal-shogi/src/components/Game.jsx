import React from 'react';
import Board from './Board.jsx';
import PieceStand from './PieceStand.jsx';

export default class Game extends React.Component {
  render() {
    return (
    <div>
      <div className="user-info">
      </div>
      
        <div className="sky">
        </div>
        <div className="game-board">
          <Board />
        </div>
        <div className="forest">
        </div>
      <div className="game-info">
      </div>
    </div>
    );
  }
}




