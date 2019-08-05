import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class SearchBar extends Component{
  constructor(){
    super();
      this.state= {
        name: '',
        type: '',
        list: []
    }
    this.handleSearchInput= this.handleSearchInput.bind(this);
    this.submitSearch= this.submitSearch.bind(this);
  }

  
  handleSearchInput = (event) => {
   this.setState ({
    [event.target.name]: event.target.value
   })
  }

  submitSearch(){
    axios.get(`/search/${this.state.name}/${this.state.type}`)
      .then(res=> {
        this.setState({ list: res.data.results });
      });
  }

  render(){
    return(
      <div className='search-bar'>
        <h1 id='heading'>iTunes search</h1>
        <div className='searchbar-container'>
          <input className='searchbar' type='text' placeholder='Search...' 
          name='name'
          onChange={ this.handleSearchInput }/>
          <br/>
          <select className='select' 
          name='type'
          value={this.state.type} 
          onChange={this.handleSearchInput} >
            <option >CATEGORIES</option>
            <option value="musicTrack">MUSIC</option>
            <option value="musicVideo">MUSIC VIDEO</option>
            <option value="software">APPS</option>
            <option value="ebook">EBOOK</option>
            <option value="audiobook">AUDIO BOOK</option>
            <option value="podcast">PODCAST</option>
            <option value="movie">MOVIES</option>
            <option value="tvShow">TV SHOW</option>
            <option value="shortFilm">SHORT FILM</option>
        </select>
        <Link to={ `/search/${this.state.name}/${this.state.type}` }>
            <button className='search-btn' onClick={ () => this.submitSearch() }
            > SEARCH </button>
          </Link>
        </div>
      </div>
    )
  }
}
