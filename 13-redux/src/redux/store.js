import { createStore, combineReducers } from 'redux'; // applyMiddleware
import timerReducer from './timer/timerReducer';
import postsReducer from './posts/postsReducer';

// import logger from './middleware/logger';

const rootReducer = combineReducers({
  timer: timerReducer,
  posts: postsReducer,
});

// const enhancer = applyMiddleware(logger);

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  // enhancer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// (reducer, persState, enhancer)
// (reducer, enhancer)

/* eslint-enable */
export default store;

// action -> [logger] -> reducers
