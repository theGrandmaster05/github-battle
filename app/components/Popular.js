'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/api';

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
      selectedLanguage: 'All',
      repos: null,
      error: null
    };
    
    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }
  
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }
  
  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
      repos: null,
      error: null
    });
    
    fetchPopularRepos(selectedLanguage)
      .then(repos => this.setState({
        repos,
        error: null
      }))
      .catch(error => {
        console.error(`There was an error fetching the repositories ${error}`);
        
        this.setState({error: 'There was an error fetching the repositories'})
      })
  }
  
  isLoading() {
    return this.state.repos === null && this.state.error === null;
  }
  
  render() {
    let { selectedLanguage, repos, error } = this.state;
    return (
      <React.Fragment>
        <LanguagesNav onUpdateLanguage={this.updateLanguage} selected={selectedLanguage}/>
        {this.isLoading() && <p>LOADING</p>}
        
        {error && <p>{error}</p>}
        
        {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
      </React.Fragment>
    )
  }
}
