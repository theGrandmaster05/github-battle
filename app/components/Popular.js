'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

function LanguagesNav({selected, onUpdateLanguage}) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python','C','Go','Rust'];
  
  return(
    <ul className="flex-center">
      {languages.map(language => (
        <li key={language}>
          <button className="btn-clear nav-link"
                  style={language === selected ? {color: '#D94A38'} : null}
                  onClick={() => onUpdateLanguage(language)}>
            {language}
          </button>
        </li>
      ))}
    </ul>
  )
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
};

export default class Popular extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedLanguage: 'All'
    };
    
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  
  updateLanguage(selectedLanguage) {
    this.setState({selectedLanguage})
  }
  render() {
    let { selectedLanguage } = this.state;
    return (
      <React.Fragment>
        <LanguagesNav onUpdateLanguage={this.updateLanguage} selected={selectedLanguage}/>
      </React.Fragment>
    )
  }
}
