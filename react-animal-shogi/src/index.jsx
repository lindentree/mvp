import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Game from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    axios.get('/items')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render () {
    return (<div>
      <Game />
    </div>)
  }
}

ReactDOM.render(<Game />, document.getElementById('app'));