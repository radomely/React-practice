import { createStore, combineReducers } from 'redux';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  timer: timerReducer,
});
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
export default store;
