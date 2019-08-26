import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Timer from './components/Timer/TimerContainer';
import StepSelector from './components/StepSelector/StepSelector';
import TagFilter from './components/TagFilter/TagFilter';
import PostList from './components/PostList/PostListContainer';
import * as postsActions from './redux/posts/postsActions';
import TotalLikes from './components/TotalLikes';
import posts from './posts.json';
import './App.module.css';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  paddingTop: 48,
};

class App extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts(posts);
  }

  render() {
    return (
      <div style={containerStyle}>
        <Timer />
        <StepSelector />
        <hr style={{ width: '100%' }} />
        <TotalLikes />
        <TagFilter />
        <PostList />
      </div>
    );
  }
}

const mDTP = dispatch => ({
  fetchPosts: psts => dispatch(postsActions.fetchPosts(psts)),
});

export default connect(
  null,
  mDTP,
)(App);
