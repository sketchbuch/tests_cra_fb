// @flow

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import NoItems from '../NoItems/NoItems';
import PostListItem from './Item/PostListItem';
import type { PostType } from '../../types/post';
import { ROUTE_POSTS_NEW } from '../../constants/routes';
import { sortObjectsAz } from '../../utils/sort';
import setTitle from '../../utils/title';
import './PostList.css';

type Props = {
  history: Object,
  loadPosts: Function,
  location: Object,
  match: Object,
  posts: Array<PostType>,
};

/**
* Post List component for displaying blog posts.
*/
export class PostList extends Component<Props> {
  static defaultProps = {
    loadPosts: ()=>{},
    posts: [],
  };

  props: Props;

  componentDidMount() {
    this.props.loadPosts();
  }

  componentDidUpdate() {
    setTitle('');
  }

  render() {
    const HAS_POSTS = (this.props.posts.length > 0) ? true : false;
    let visiblePosts = (HAS_POSTS) ? sortObjectsAz(this.props.posts, ['title']) : this.props.posts;

    return (
      <section className="PostList">
        <h1 className="PostList__headline">Posts:</h1>

        {HAS_POSTS ? (
          <Fragment>
            <ul className="PostList__posts">
              {visiblePosts.map(post => {
                return <PostListItem key={post.id} post={post} />
              })}
            </ul>
            <NoItems><Link to={ ROUTE_POSTS_NEW }>Add new post</Link></NoItems>
          </Fragment>
        ) : (
          <NoItems>There are no posts, <Link to={ ROUTE_POSTS_NEW }>why not create one?</Link></NoItems>
        )}
      </section>
    );
  }
}


export default PostList;
