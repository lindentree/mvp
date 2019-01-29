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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      initial: initialBoardState,
      initSkyStand: null,
      initForestStand: null
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
        <Game status={this.state.initial}/>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));