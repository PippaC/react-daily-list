import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  state = { searchTerm: 'Enter search term.'};
  
  handleSearchTermChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input type='text' placeholder='Search' value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
        </header>

        {preload.shows
          .filter(
            show => 
              `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
          )
          .map((show, index) => <ShowCard {...show} key={show.imdbID} />)}
      </div>
    )
  }
}

export default Search;
