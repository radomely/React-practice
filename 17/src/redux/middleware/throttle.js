const throttled = {};

// eslint-disable-next-line no-unused-vars
const throttle = store => next => action => {
  const time = action.meta && action.meta.throttle;

  if (!time) return next(action);

  if (throttled[action.type]) return null;

  throttled[action.type] = true;

  setTimeout(() => {
    throttled[action.type] = false;
  }, time);

  return next(action);
};
export default throttle;
