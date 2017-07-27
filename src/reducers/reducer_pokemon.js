import { FETCH_POKEMON } from '../actions/index';

export default function(state = [], action) {
  console.log(state);
  switch (action.type) {
    case FETCH_POKEMON:

//    return state.concat([ action.payload.data ]); NON ES6 version of what's below
      console.log(action.payload.data);

      return [ action.payload.data, ...state ]; // returns [city, city, city] NOT [city [city, city]]
  }

  return state;
}
