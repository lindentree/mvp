import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Game from './components/Game.jsx';


let initialBoardState = [
                {piece:"enemyGiraffe"}, {piece: "enemyLion"}, {piece:"enemyElephant"},
                null, {piece: "enemyChick"}, null,
                null, {piece: "playerChick"}, null,
                {piece:"playerElephant"}, {piece: "playerLion"}, {piece:"playerGiraffe"}
                ];


let emptyBoardState = [
                null, null, null,
                null, null, null,
                null, null, null,
                null, null, null
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
      initial: initialBoardState,
      initSkyStand: initialSkyStandState,
      initForestStand: initialForestStandState
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

  render () {
    return (
      <div>
        <Game status={this.state.initial} skystand={initialSkyStandState} foreststand={initialForestStandState}/>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));