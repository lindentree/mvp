import React from 'react';
import Board from './Board.jsx';
import SkyPieceStand from './SkyPieceStand.jsx';
import ForestPieceStand from './ForestPieceStand.jsx';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
        <div className="sky">
          <SkyPieceStand />
        </div>
        <div className="game-board">
          <Board status={this.props.status}/>
        </div>
        <div className="forest">
          <ForestPieceStand  />
        </div>
      <div className="game-info">
      </div>
    </div>
    );
  }
}




