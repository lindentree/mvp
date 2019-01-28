import React from 'react';

export default class Piece extends React.Component {
  constructor(player, iconUrl){
    super(player, iconUrl);
    this.player = player;
    this.style = {backgroundImage: "url('"+iconUrl+"')"};
  }
}