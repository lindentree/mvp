import React from 'react';
import Piece from './piece.jsx';

export default class Niwatori extends Piece {
  constructor(props){
    super(props );
  }

  isMovePossible(src, dest){
    return (src - 17 === dest || 
      src - 10 === dest || 
      src + 6 === dest || 
      src + 15 === dest || 
      src - 15 === dest || 
      src - 6 === dest || 
      src + 10 === dest || 
      src + 17 === dest);
  }

  /**
   * always returns empty array because of jumping
   * @return {[]}
   */
  getSrcToDestPath(){
    return [];
  }

  renderSwitch (param) {

    console.log('niwatori prop',param)
    switch(param) {
      case 'sky':
        return <div className="fill-sky"> <img src={ require('../../../dist/assets/sky-niwatori.gif') }/></div>
      case 'forest':
        return <div className="fill"> <img src={ require('../../../dist/assets/forest-niwatori.gif') }/></div>
      default:
        return null;
    }
  }

  render () {
    return (
      <div>
        {this.renderSwitch(this.props.player)}
      </div>
    )
  }
}
