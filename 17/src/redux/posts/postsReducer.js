import { combineReducers } from 'redux';
import { ActionType } from './postsActions';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_POSTS_SUCCESS:
      return payload.posts;

    case ActionType.DELETE_POST:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case ActionType.FETCH_POSTS_START:
      return true;
    case ActionType.FETCH_POSTS_SUCCESS:
    case ActionType.FETCH_POSTS_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_POSTS_ERROR:
      return payload;

    default:
      return state;
  }
};

const tagReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.CHANGE_TAG:
      return payload;

    default:
      return state;
  }
};
export default combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
  selectedTag: tagReducer,
});
