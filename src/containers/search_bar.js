import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemon } from '../actions/index.js'

class SearchBar extends Component{
  constructor(props){
    super(props);
      this.state = { term: '' };

      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
}

onInputChange(event){
  this.setState({term:event.target.value})
}

onFormSubmit(event){
  event.preventDefault();
  this.props.fetchPokemon(this.state.term);
  this.setState({term:''});
  console.log(this.props.fetchPokemon(this.state.term));
}

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Search for ur fav pokemans"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPokemon }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);