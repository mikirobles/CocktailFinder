import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
