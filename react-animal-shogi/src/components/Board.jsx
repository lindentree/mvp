import React from 'react';
import Square from './Square.jsx';
import $ from 'jquery';


export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {

  }

  renderSquare(i) {
    //console.log('outer', this.state.squares[i])
    return (
      <Square 
        id= {i + 1}
        piece= {this.props.status[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    
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