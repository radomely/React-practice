import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import sessionReducer from "./session/sessionReducer";

const rootReducer = combineReducers({
  session: sessionReducer
});

const middleware = [];

const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
