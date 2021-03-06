// @flow
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import ShowCard from './ShowCard';

const Search = (props: {
    searchTerm: string,  // eslint-disable-line react/no-unused-prop-types
    shows: Array<Show>
}) => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(
          show =>
            `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0
        )
        .map((show) => <ShowCard {...show} key={show.imdbID} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(Search);
export const Unwrapped = Search
