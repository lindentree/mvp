import React from 'react';
import Piece from './piece.jsx';

export default class Raion extends Piece {
  constructor(player){
    super(player);
  }

  isMovePossible(src, dest){
    return (src - 9 === dest || 
      src - 8 === dest || 
      src - 7 === dest || 
      src + 1 === dest || 
      src + 9 === dest || 
      src + 8 === dest || 
      src + 7 === dest || 
      src - 1 === dest);
  }

  /**
   * always returns empty array because of one step
   * @return {[]}
   */
  getSrcToDestPath(src, dest){
    return [];
  }

  isCaptured(){

  }

  renderSwitch (param) {
    console.log('raion prop',param)
    switch(param) {
      case 'sky':
        return <div className="fill"> <img src={ require('../../../dist/assets/sky-lion.gif') }/></div>
      case 'forest':
        return <div className="fill"> <img src={ require('../../../dist/assets/sky-lion.gif') }/></div>
      default:
        console.log(param)
        return null;
    }
}

  render () {
    return (
      <div>
        {this.renderSwitch('sky')}
      </div>
    )
  }
}
