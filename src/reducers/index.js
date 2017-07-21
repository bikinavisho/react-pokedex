import { combineReducers } from 'redux';
import PokeReducer from './reducer_pokemon';

const rootReducer = combineReducers({
  pokemon:PokeReducer
});

export default rootReducer;
