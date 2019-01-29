import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Game from './components/Game.jsx';
import GameStatus from './components/GameStatus.jsx';
import $ from 'jquery';
  

 
// Internal state of board
  var _board = [];
  // Internal state of player bench
  var _skyBench = [];
  // Internal state of enemy bench
  var _forestBench = [];

  var bestMove;

  /**************************
  *    POSITION VARIABLES   *
  **************************/
  
  // The position of the selected piece
  var selectedPosition = { row: 0, col: 0 };

  // The position of the attacked cell
  var attackPosition = { row: 0, col: 0 };

  // Difference between selected and attack cells
  var differencePosition = { row: 0, col: 0 };

  /**************************
  *    PIECE VALIDATION     *
  **************************/

  // Did we select a cell that is occupied?
  var selectedCell = false;

  // Did we select a cell to attack?
  var attackedCell = false;

  // Did we select a bench piece? 
  var selectedEnemyBenchPiece = false;
  var selectedPlayerBenchPiece = false;
  var selectedPlayerBenchPiecePosition = { col: 0 };
  var selectedEnemyBenchPiecePosition = { col: 0 }; 

  /********************************
  *    GAME EVALUATION VARIABLES  *
  *********************************/

  var playerLionCaptured = false;
  var enemyLionCaptured = false;
  var seenPlayerLion = false;
  var seenEnemyLion = false;
  var gameOver = false;

  /**************************
  *      TURN VARIABLES     *
  **************************/

  var playerTurn = true;
  var enemyTurn = false;
  var turnCount = 1;

  // Has either player moved?
  var playerMoved = false;
  var enemyMoved = false;

  var currentTurn = null; 

  /**************************
  *  PROMOTION VARIABLES  *
  **************************/
  
  var playerChickPromotion = false;
  var playerChickPosition = { row: 0, col: 0 };
  var enemyChickPromotion = false;
  var enemyChickPosition = { row: 0, col: 0 };

  // If Player moved a chick (not placed)
  // it is a legitimate candidate for promotion to Hen
  var movedPlayerChick = false;

  // If Enemy moved a chick (not placed)
  // it is legitimate candidate for promotion to Hen
  var movedEnemyChick = false;

  /**************************
  *     LEGITIMATE MOVES    *
  **************************/
  

    // {
    //   'enemyChick' : [{ row: 1, col: 0 }]  // South
    // },
    // {
    //   'enemyLion' : [
    //     { row: 1,  col: 0  }, // South
    //     { row: -1, col: 0  }, // North
    //     { row: 0,  col: -1 }, // East
    //     { row: 0,  col: 1  }, // West
    //     { row: 1,  col: -1 }, // Southwest
    //     { row: -1, col: -1 }, // Northwest
    //     { row: 1,  col: 1  }, // Southeast
    //     { row: -1, col: 1  }, // Northeast
    //     ]
    // },
    // {
    //   'enemyElephant' : [
    //     { row: 1,  col: -1 }, // Southwest
    //     { row: -1, col: -1 }, // Northwest
    //     { row: 1,  col: 1  }, // Southeast
    //     { row: -1, col: 1  }, // Northeast
    //   ]
    // },
    // {
    //   'enemyGiraffe' : [
    //     { row: 1,  col: 0  }, // South
    //     { row: -1, col: 0  }, // North
    //     { row: 0,  col: -1 }, // West
    //     { row: 0,  col: 1  }, // East
    //   ]
    // },
    // {
    // 'enemyHen' : [
    //     { row: 1,  col: 0  }, // South
    //     { row: -1, col: 0  }, // North
    //     { row: 0,  col: -1 }, // West
    //     { row: 0,  col: 1  }, // East
    //     { row: 1,  col: -1 }, // Southwest
    //     { row: 1,  col: 1  }, // Southeast
    //   ]
    // },
    // {
    //   'playerChick' : [{ row: -1, col: 0 }]   // North
      
    // },
    // {
    // 'playerLion' : [
    //   { row: -1, col: 0  }, // North
    //   { row: 1,  col: 0  }, // South
    //   { row: 0,  col: -1 }, // West
    //   { row: 0,  col: 1  }, // East
    //   { row: -1, col: -1 }, // Northwest
    //   { row: 1,  col: -1 }, // Southwest
    //   { row: -1, col: 1  }, // Northeast
    //   { row: 1,  col: 1  }, // Southeast
    //   ]
    // },
    // {
    // 'playerElephant' : [
    //   { row: -1, col: -1 }, // Northwest
    //   { row: 1,  col: -1 }, // Southwest
    //   { row: 1,  col: 1  }, // Southeast
    //   { row: -1, col: 1  }, // Northeast
    // ]
    // },
    // {
    // 'playerGiraffe' : [
    //   { row: -1, col: 0  }, // North
    //   { row: 1,  col: 0  }, // South
    //   { row: 0,  col: -1 }, // West
    //   { row: 0,  col: 1  }, // East
    //   ]
    // },
    // {'playerHen' : [
    //   { row: -1, col: 0 }, // North
    //   { row: 1,  col: 0 }, // South
    //   { row: 0,  col: -1}, // West
    //   { row: 0,  col: 1 }, // East
    //   { row: -1, col: -1}, // Northwest
    //   { row: -1, col: 1 }, // Northeast 
    //   ]
    // }
    
  
let testLion = {
    name: 'playerLion',
    player: 1,
    moveDirections: [
        { row: -1, col: 0  }, // North
        { row: 1,  col: 0  }, // South
        { row: 0,  col: -1 }, // West
        { row: 0,  col: 1  }, // East
        { row: -1, col: -1 }, // Northwest
        { row: 1,  col: -1 }, // Southwest
        { row: -1, col: 1  }, // Northeast
        { row: 1,  col: 1  } // Southeast
      ],
    };
  

  let testBoard = [
                   [null, null, null],
                   [null, null, null],
                   [null, null, null],
                   [null, testLion, null]
                  ];
  /**************************
  *      HELPER METHODS     *
  **************************/

  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * @returns {number}
  */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  function getCellContents(row, col) {
    return _board[row][col];
  }



  function isValidMove(row, col, player) {
    let board = this.state.initial;
    let target = board[row][col];
    if (target === undefined || target === null) {
      return false;

    }

    if (target.player == player) {
      return false;
    }

    return true;  
  }
  /**
   * Appends text to the debug panel.
   * @param {string} message The message to add to debug panel.
   * @return {undefined}
  */
 function updatePlayerInfo(props) {
   return <GameStatus text={props} />
 }

  //
 function handleMove(row, col) {
   let board = this.state.initial;
   let target = board[row][col];

    if (moveInProgress) {
      if (!isValidMove(row, col, this.state.player)) {
        cancelMove;
      }
      else {
        return this.completeMove(target.index);
      }
    }
 }

 function cancelMove() {
    let board = this.state.initial;

    this.setState({moveInProgress: false});
  

    
  }

 function completeMove(row, col, movingPiece) {
   let board = this.state.initial;
   let target = board[row][col];
 }


  /**
   * Determines location of a piece.
   * @param {string} piece The name of the piece to locate. 
   * @return {object} position The Row/Col position of piece.
  */
  function getPosition(piece) {
    var position = {'row': 0, 'col': 0};
    for(var row = 0; row < 4; row++) {
      for(var col = 0; col < 3; col++) {
        if(_board[row][col] === piece) {
          position.row = row;
          position.col = col;
        }
      }
    }

    return position; 
  }

  /**
   * Determines if a piece is on the board.
   * @param {object} board The configuration to test.
   * @param {string} piece The piece to search for.
   * @returns {boolean} found Whether the piece was found.
  */
  function isPieceOnBoard(board, piece) {
    var found = false;
    for(var row = 0; row < 4; row++) {
      for(var col = 0; col < 3; col++) {
        if(board[row][col] === piece) {
          found = true;
        }
      }
    }

    return found;
  }

  
  
let initialBoardState = [
                {piece:"enemyGiraffe"}, {piece: "enemyLion"}, {piece:"enemyElephant"},
                null, {piece: "enemyChick"}, null,
                null, {piece: "playerChick"}, null,
                {piece:"playerElephant"}, {piece: "playerLion"}, {piece:"playerGiraffe"}
                ];


let initialSkyStandState = [
                 null, null, null, null, null, null
                ];

let initialForestStandState = [
                 null, null, null, null, null, null
                ];


let overallGameState = {
     board: [],
     skyStand: [],
     forestStand: []

}                

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      initial: testBoard,
      initSkyStand: initialSkyStandState,
      initForestStand: initialForestStandState,
      player: 1, 
      moveInProgress: true,
    }
  }

  componentDidMount() {
    axios.get('/users')
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
  }

  updatePlayerInfo(text) {
   return <GameStatus text={text} />
  }

  handleClick(i){
   

  }

  render () {
    return (
      <div>
        <Game status={this.state.initial} onClick={(i) => this.handleClick(i)} skystand={this.state.initSkyStand} foreststand={this.state.initForestStand}/>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));