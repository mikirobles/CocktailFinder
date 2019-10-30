import drinksReducer from './drinks';
import {reducer as asyncReducer, REDUCER_NAME} from 'async-action-creator';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  drinks: drinksReducer,
  [REDUCER_NAME]: asyncReducer,
});

export default rootReducer;
