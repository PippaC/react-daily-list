// @flow
import React, { Component } from 'react';
import { render } from 'react-dom';

import ShowCard from './ShowCard';



class Search extends Component {
  state = { searchTerm: '' };
  props: {
    shows: Array<Show>
  };
  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className="search">
        <header>
          <h1>MyVideo</h1>
          <input type='text' placeholder='Search' value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
        </header>

        {this.props.shows
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
