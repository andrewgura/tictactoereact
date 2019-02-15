import React, {Component} from 'react';

class Player extends Component {

  constructor(props){
    super(props)
    this.state = {
      selected: ''
    }
  }

  handleSubmit(e) {
      e.preventDefault();
      this.props.player(this.state.selected); //Send user choise back to Status.js
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <h3>Choose first player</h3>
          <span className={this.state.selected === "X"? "X" : "white"} onClick={()=> this.setState({selected: "X"})}>X</span>
        </div>
        <div>
          <span className={this.state.selected === "O" ? "O" : "white"} onClick={()=> this.setState({selected: "O"})}>O</span>
        </div>
          <input className="btn" type="submit" value="Start"/>
      </form>
    )
  }
}


export default Player;
