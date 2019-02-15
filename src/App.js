import React, { Component } from 'react';
import Status from "./Components/Status";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null,
      turnNumber: 0
    }
  }

  setPlayer(player){ //recieve input from Player component, set who goes first
    this.setState({player: player})
  }

  renderBoard(){ //creating the board
    return this.state.board.map((box, i) =>
     <div key={i} className="box" onClick={this.handleClick.bind(this, i)}>
       <span className={box}>{box}</span>
     </div>
   )

  }

  handleClick(i){
    //If player is selected and no winner yet
    if(this.state.player && !this.state.winner ) {
      var newBoard = this.state.board;

      //Check if user clicks on occupied space and if there is a winner or not
      if(this.state.board[i] === null) {
        newBoard[i] = this.state.player; //place player's move

        var turnNumber = this.state.turnNumber + 1; //keep track of turns to check for a tie

        var nextPlayer = this.state.player === "X" ? "O" : "X"; //Switch between players

        this.setState({board: newBoard, player: nextPlayer, turnNumber: turnNumber})

        this.checkWinner();
      }
    }
  }

  checkWinner(){
      var winLines = [
        ["0", "1", "2"], //Top row
        ["3", "4", "5"], //Middle row
        ["6", "7", "8"], //Bottom Row
        ["0", "3", "6"], //Left Column
        ["2", "5", "8"], //Right column
        ["0", "4", "8"], //Top left Diagonal
        ["2", "4", "6"], //Top Right Diagonal
        ["1", "4", "7"], //Middle column
      ]
    for(var i = 0; i < winLines.length; i++) {

      var [a, b, c] = winLines[i];

      if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
        this.setState({winner: <h2>WINNER <span className={this.state.player}> {this.state.player}</span>!</h2>})
        return;
      }
    }

    this.checkTie();
  }

  checkTie() {
    if(this.state.turnNumber === 8 && !this.state.winner) {
      this.setState({winner: <h2>Tie!</h2>})
    }
  }

  resetBoard(){
    this.setState({board: Array(9).fill(null), winner: null, turnNumber: 0})
  }


  render() {
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <Status player={this.state.player} setPlayer={this.setPlayer.bind(this)} message={this.state.winner}/>
        {!this.state.player ? null
          :<div className="board">
            {this.renderBoard()}
          <button onClick={this.resetBoard.bind(this)} className="btn btn-lg">Reset</button>
        </div>}
      </div>
    );
  }
}


export default App;
