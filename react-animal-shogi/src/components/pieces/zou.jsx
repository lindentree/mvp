import React from 'react';
import Piece from './piece.jsx';

export default class Zou extends Piece {
  constructor(props){
    super(props);
  }

  isMovePossible(src, dest){
    return (Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0);
  }

  /**
   * get path between src and dest (src and dest exclusive)
   * @param  {num} src  
   * @param  {num} dest 
   * @return {[array]}      
   */
  getSrcToDestPath(src, dest){
    let path = [], pathStart, pathEnd, incrementBy;
    if(src > dest){
      pathStart = dest;
      pathEnd = src;
    }
    else{
      pathStart = src;
      pathEnd = dest;
    }
    if(Math.abs(src - dest) % 9 === 0){
      incrementBy = 9;
      pathStart += 9;
    }
    else{
      incrementBy = 7;
      pathStart += 7;
    }

    for(let i = pathStart; i < pathEnd; i+=incrementBy){
      path.push(i);
    }
    return path;
  }

  renderSwitch (param) {

    console.log('zou prop',param)
    switch(param) {
      case 'sky':
        return <div className="fill-sky"> <img src={ require('../../../dist/assets/sky-elephant.gif') }/></div>
      case 'forest':
        return <div className="fill"> <img src={ require('../../../dist/assets/forest-elephant.gif') }/></div>
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
