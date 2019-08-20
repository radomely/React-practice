import React from 'react';
import PropTypes from 'prop-types';

const PostList = ({ items = [], deletePost }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <p>{item.text}</p>
        <button type="button" onClick={() => deletePost(item.id)}>
          Delete
        </button>
        <p>Tag: {item.tag}</p>
      </li>
    ))}
  </ul>
);
PostList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  deletePost: PropTypes.func.isRequired,
};
export default PostList;
