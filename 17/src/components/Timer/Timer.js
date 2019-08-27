import React from 'react';
import PropTypes from 'prop-types';
import css from './Timer.module.css';

const Timer = ({ value, step, onIncrement, onDecrement }) => (
  <div className={css.container}>
    <button
      type="button"
      className={css.button}
      onClick={() => onDecrement(step)}
    >
      &#8722;
    </button>
    <div className="css.value">{value} minutes</div>
    <button
      type="button"
      className={css.button}
      onClick={() => onIncrement(step)}
    >
      &#43;
    </button>
  </div>
);
Timer.propTypes = {
  value: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Timer;
