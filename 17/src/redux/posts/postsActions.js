export const ActionType = {
  FETCH_POSTS_START: 'FETCH_POSTS_START',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR: 'FETCH_POSTS_ERROR',
  DELETE_POST_START: 'DELETE_POST_START',
  DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
  DELETE_POST_ERROR: 'DELETE_POST_ERROR',
  ADD_POST_START: 'ADD_POST_START',
  ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
  ADD_POST_ERROR: 'ADD_POST_ERROR',
  CHANGE_TAG: 'CHANGE_TAG',
};

export const fetchPostsStart = () => ({
  type: ActionType.FETCH_POSTS_START,
});

export const fetchPostsSuccess = posts => ({
  type: ActionType.FETCH_POSTS_SUCCESS,
  payload: { posts },
});

export const fetchPostsError = error => ({
  type: ActionType.FETCH_POSTS_ERROR,
  payload: { error },
});

export const deletePostStart = () => ({
  type: ActionType.DELETE_POST_START,
});

export const deletePostSuccess = id => ({
  type: ActionType.DELETE_POST_SUCCESS,
  payload: { id },
});

export const deletePostError = error => ({
  type: ActionType.DELETE_POST_ERROR,
  payload: { error },
});
/*
 * Add Post
 */
export const addPostStart = () => ({
  type: ActionType.ADD_POST_START,
});

export const addPostSuccess = newPost => ({
  type: ActionType.ADD_POST_SUCCESS,
  payload: { newPost },
});

export const addPostError = error => ({
  type: ActionType.ADD_POST_ERROR,
  payload: { error },
});

export const changeTag = tag => ({
  type: ActionType.CHANGE_TAG,
  payload: tag,
});
