import React, { Component } from 'react';
import Popular from './components/Popular';
import Battle from './components/Battle';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        {/*<Popular/>*/}
        <Battle/>
      </div>
    )
  }
}
