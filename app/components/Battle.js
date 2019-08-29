'use strict';

import React, { Component } from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";
import PropTypes from 'prop-types';

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
        </div>
      </form>
    )
  }
}

export default class Battle extends Component {
  render() {
    return (
      <React.Fragment>
        <Instructions/>
      </React.Fragment>
    )
  }
}
