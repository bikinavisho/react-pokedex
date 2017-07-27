import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pokemon from '../components/pokemon';

class PokeEntry extends Component {
  constructor(props){
    super(props);
    this.state={ShinyBool:false};

    this.triggerShiny = this.triggerShiny.bind(this);
    this.renderPoke = this.renderPoke.bind(this);
  }

  renderPoke(pokemonData) {
    const id = pokemonData.id;
    const name = pokemonData.name;
    const sprite = pokemonData.sprites.front_default;
    const shinySprite = pokemonData.sprites.front_shiny;

    return (
      <tr key={id} className="centered entryList">
        <td>{id}</td>
        <td>{name}</td>
        <td><img id="PokeSprite" onClick={this.triggerShiny} src={this.state.ShinyBool ? shinySprite: sprite} /></td>
      </tr>
    );
  }

  triggerShiny(){
    this.state.ShinyBool ? this.setState({ShinyBool:false}) : this.setState({ShinyBool:true});
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr className="entryList">
            <th>ID</th>
            <th>Pokemon</th>
            <th>Sprite</th>

          </tr>
        </thead>
        <tbody>
          {this.props.pokemon.map(this.renderPoke)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ pokemon }) {
  return { pokemon };
}

export default connect(mapStateToProps)(PokeEntry);
