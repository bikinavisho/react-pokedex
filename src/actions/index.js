import axios from 'axios';

export const FETCH_POKEMON = 'FETCH_POKEMON'

const API="http://pokeapi.co/api/v2/pokemon/";

export function fetchPokemon(pokemon) {
  const API_Search=API+(pokemon.toLowerCase());
  const request = axios.get(API_Search);

  console.log('Request:', request);

  return{
    type: FETCH_POKEMON,
    payload: request

  }
}
