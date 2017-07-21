import { FETCH_POKEMON } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POKEMON:
//    return state.concat([ action.payload.data ]); NON ES6 version of what's below
      return [ action.payload.data, ...state ]; // returns [city, city, city] NOT [city [city, city]]
  }
  return state;
}
