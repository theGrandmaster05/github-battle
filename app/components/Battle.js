import React, { Component } from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";

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
            <FaUserFriends color='#D94A38' size={18} className='bg-light'/>
          </h3>
        </li>
      </ol>
    </div>
  )
}
