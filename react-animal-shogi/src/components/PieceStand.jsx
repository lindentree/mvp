import React from 'react';
import Square from './Square.jsx';

export default class PieceStand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(3).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={i} />;
  }

  dropPiece(i) {

  }

  render() {
    const position = props;

    return (
      <div>
        <div className="position">{position}</div>
        <div className="piece-stand">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
      </div>
    );
  }
}
