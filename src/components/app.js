import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import PokeEntry from '../containers/poke_entry';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PokeEntry />
      </div>
    );
  }
}
