// @flow

import React, { Component } from 'react';
import type { PostType } from '../../../types/post';
import PostDefault from '../../../types/post';
import './PostListItem.css';

type Props = {
  post: PostType,
};

/**
* Post List Item component.
*/
export class PostListItem extends Component<Props> {
  static defaultProps = {
    post: {...PostDefault},
  };

  props: Props;

  render() {
    return (
      <li className="PostList__post">
        <p className="PostList__posttitle">{this.props.post.title}</p>
      </li>
    )
  }
}


export default PostListItem;
