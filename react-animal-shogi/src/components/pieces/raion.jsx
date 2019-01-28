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
    switch(param) {
      case 200:
        return <Raion />;
      default:
      return 'foo';
    }
}

  render () {
    return (
      <img src={ require('../../../dist/assets/sky-lion.gif') } />
   
    )
  }
}
