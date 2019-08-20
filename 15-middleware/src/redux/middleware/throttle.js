const throttled = {};

const throttle = next => action => {
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
