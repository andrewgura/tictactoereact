import React, {Component} from 'react';
import Player from "./Player";

class Status extends Component {

  setPlayer(e) {
    this.props.setPlayer(e) //Send choice recieved from Player component to send back to App.js
  }

  //Current Status of Game
  render(){
    return (
      this.props.player ? //If player exists
      <div>
      {!this.props.message ? <h3>Next player: <span className={this.props.player}>{this.props.player}</span></h3> : this.props.message}
      </div>  //Show who's turn it is unless there is a result of the game over
      : //If player doesn't exist, show select player, load in display
      <Player player={this.setPlayer.bind(this)}/>
    )
  }
}


export default Status;
