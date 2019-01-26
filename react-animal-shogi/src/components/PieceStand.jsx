import React from 'react';
import Square from './Square.jsx';

class PieceStand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(3).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const player = 'Sente';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
      </div>
    );
  }
}