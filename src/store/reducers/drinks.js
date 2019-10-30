import {SEARCH_DRINKS} from '../actions/drinks';

const initialState = {
  byName: [],
};

const drinks = (state = initialState, {type, payload = []}) => {
  switch (type) {
    case SEARCH_DRINKS.STARTED:
      return {
        ...state,
        byName: [],
      };
    case SEARCH_DRINKS.RESOLVED:
      return {
        ...state,
        byName: payload,
      };
    default:
      return state;
  }
};

export default drinks;
