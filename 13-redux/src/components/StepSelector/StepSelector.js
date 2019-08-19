import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import * as timerActions from '../../redux/timerActions';

const options = [
  { value: 5, label: 5 },
  { value: 10, label: 10 },
  { value: 15, label: 15 },
];

const StepSelector = ({ value, onChange }) => (
  <div style={{ width: 400 }}>
    <Select options={options} value={value} onChange={onChange} />
  </div>
);

StepSelector.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.timer.step,
});

const mapDispatchToProps = dispatch => ({
  onChange: step => dispatch(timerActions.changeStep(step)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepSelector);
