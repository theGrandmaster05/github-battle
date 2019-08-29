'use strict';

import React, { Component } from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy, FaTimesCircle } from "react-icons/fa";
import PropTypes from 'prop-types';
import Results from './Results';

function Instructions () {
  return (
    <div className="instructions-container">
      <h1 className="center-text header-lg">
        Instructions
      </h1>
      <ol className="container-sm grid center-text battle-instructions">
        <li>
          <h3 className="header-sm">
            Enter two GitHub users
            <FaUserFriends color='#D94A38' size={120} className='bg-light'/>
          </h3>
        </li>
        <li>
          <h3 className="header-sm">See the winners</h3>
          <FaTrophy size={120} color='#D94A38' className='bg-light'/>
        </li>
      </ol>
    </div>
  )
}

function PlayerPreview({username, onReset, label}) {
  return (
    <div className="column player">
      <h3 className="player-label">
        {label}
      </h3>
      <div className="row bg-light">
        <div className="player-info">
          <img src={`https://github.com/${username}.png?size=200`} alt={`Avatar for ${username}`} className="avatar-small"/>
          <a className='link' href={`https://github.com${username}`} target='_blank'>
            {username}
          </a>
          <button className="btn-clear flex-center">
            <FaTimesCircle color='#D94A38' size={26}/>
          </button>
        </div>
      </div>
    </div>
  )
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

class PlayerInput extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    this.props.onSubmit(this.state.username);
  }
  
  handleChange(event) {
    this.setState({username: event.target.value});
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="column player">
        <label htmlFor="username" className={"player-label"}>
          {this.props.label}
        </label>
        <div className='row player-inputs'>
          <input type="text" id='username' className='input-light' placeholder='GitHub username' autoComplete='off' value={this.state.username} onChange={this.handleChange}/>
          <button className='btn dark-btn' type='submit' disabled={!this.state.username}>
            Submit
          </button>
        </div>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default class Battle extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      playerOne: null,
      playerTwo: null,
      battle: false
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  
  handleSubmit(id, player) {
    this.setState({
      [id]: player
    })
  }
  
  handleReset(id) {
    this.setState({
      [id]: null
    })
  }
  
  render() {
    const {playerOne, playerTwo, battle} = this.state;
    
    if(battle === true) return <Results playerOne={playerOne} playerTwo={playerTwo}/>;
    
    return (
      <React.Fragment>
        <Instructions/>
        
        <div className="players-container">
          <h1 className="center-text header-lg">Players</h1>
          <div className="row space-around">
            {playerOne === null
              ? <PlayerInput label={'Player One'} onSubmit={player => this.handleSubmit('PlayerOne', player)}/>
              : <PlayerPreview username={playerOne} label='Player One' onReset={() => this.handleReset('playerOne')}/>
            }
            {playerTwo === null
              ? <PlayerInput label={'Player Two'} onSubmit={player => this.handleSubmit('PlayerTwo', player)}/>
              : <PlayerPreview username={playerTwo} label='Player Two' onReset={() => this.handleReset('playerTwo')}/>
            }
          </div>
          {playerOne && playerTwo && (
            <button className="btn dark-btn btn-space" onClick={() => this.setState({battle: true})}>
              Battle
            </button>
          )}
        </div>
      </React.Fragment>
    )
  }
}
