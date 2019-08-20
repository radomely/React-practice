import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import timerReducer from './timer/timerReducer';
import postsReducer from './posts/postsReducer';
import throttle from './middleware/throttle';
import stateValidator from './middleware/state-validation';
// import logger from './middleware/logger';

const rootReducer = combineReducers({
  timer: timerReducer,
  posts: postsReducer,
});

const middleware = [throttle, logger, stateValidator];
const enhancer = applyMiddleware(...middleware);

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  composeWithDevTools(enhancer),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// (reducer, persState, enhancer)
// (reducer, enhancer)

/* eslint-enable */
export default store;

// action -> [logger] -> reducers
