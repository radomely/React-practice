// eslint-disable-next-line no-unused-vars
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  console.groupEnd(action.type);
  next(action);
};
export default logger;
