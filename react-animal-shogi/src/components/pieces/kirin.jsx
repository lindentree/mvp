import React from 'react';
import Piece from './piece.jsx';

export default class Kirin extends Piece {
  constructor(props){
    super(props);
  }

  isMovePossible(src, dest){
    let mod = src % 8;
    let diff = 8 - mod;
    return (Math.abs(src - dest) % 8 === 0 || (dest >= (src - mod) && dest < (src + diff)));
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
    if(Math.abs(src - dest) % 8 === 0){
      incrementBy = 8;
      pathStart += 8;
    }
    else{
      incrementBy = 1;
      pathStart += 1;
    }

    for(let i = pathStart; i < pathEnd; i+=incrementBy){
      path.push(i);
    }
    return path;
  }



  renderSwitch (param) {

    console.log('kirin prop',param)
    switch(param) {
      case 'sky':
        return <div className="fill-sky"> <img src={ require('../../../dist/assets/sky-giraffe.gif') }/></div>
      case 'forest':
        return <div className="fill"> <img src={ require('../../../dist/assets/forest-giraffe.gif') }/></div>
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
