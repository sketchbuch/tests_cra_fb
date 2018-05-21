// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {init as firebaseInit} from '../../db/firebase';
import PostCreate from '../PostCreate/PostCreate';
import PostList from '../PostList/PostList';
import UserList from '../UserList/UserList';
import type { PostType } from '../../types/post';
import { loadAllPosts, addNewPost } from '../../actions/postActions';
import {
  ROUTE_HOME,
  ROUTE_POSTS_NEW,
  ROUTE_USERS,
} from '../../constants/routes';
import './App.css';

type Props = {
  addPost: Function,
  dispatch: Function,
  loadPosts: Function,
  posts: Array<PostType>,
};

/**
* App.
*/
export class App extends Component<Props> {
  static defaultProps = {
    addPost: ()=>{},
    loadPosts: ()=>{},
    posts: [],
  };

  props: Props;

  constructor(props: Props) {
    super(props);

    firebaseInit();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path={ ROUTE_POSTS_NEW } exact render={routeProps => <PostCreate {...routeProps} addPost={this.props.addPost} loadPosts={this.props.loadPosts} /> } />
            <Route path={ ROUTE_USERS } exact component={UserList} />
            <Route path={ ROUTE_HOME } exact render={routeProps => <PostList {...routeProps} posts={this.props.posts} loadPosts={this.props.loadPosts} /> } />
            <Route><p>Not found</p></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: Object) => (
  {
    posts: state.posts,
  }
);

const mapDispatchToProps = (dispatch: Function) => {
  return {
    loadPosts: () => {
      dispatch(loadAllPosts());
    },
    addPost: (postTitle: string) => {
      dispatch(addNewPost(postTitle));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
