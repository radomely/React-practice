import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as postsSelectors from '../../redux/posts/postsSelectors';
import * as postsActions from '../../redux/posts/postsActions';

const options = [
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'React.js', value: 'react' },
];

const findOption = value => options.find(opt => opt.value === value);

const TagFilter = ({ currentTag, onChangeTag = () => null }) => (
  <div style={{ width: 200 }}>
    <Select
      options={options}
      value={findOption(currentTag)}
      onChange={onChangeTag}
    />
  </div>
);

const mapStateToProps = state => ({
  currentTag: postsSelectors.getSelectedTag(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeTag: tag => dispatch(postsActions.changeTag(tag.value)),
});
TagFilter.defaultProps = {
  currentTag: null,
};
TagFilter.propTypes = {
  currentTag: PropTypes.string,
  onChangeTag: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagFilter);
