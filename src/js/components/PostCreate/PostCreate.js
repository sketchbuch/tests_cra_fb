// @flow

import React, { Component } from 'react';
import { Formik } from 'formik';
import PostCreateForm from './Form/PostCreateForm';
import postSchema from '../../validation/schemas/postSchema';
import type { PostType } from '../../types/post';
import postDefault from '../../types/post';
import setTitle from '../../utils/title';
import { ROUTE_POSTS } from '../../constants/routes';
import './PostCreate.css';

type Props = {
  addPost: Function,
  history: Object,
  loadPosts: Function,
  location: Object,
  match: Object,
};

type State = {
  error: boolean,
  post: PostType,
  saving: boolean,
};

/**
* Post List component for displaying blog posts.
*/
export class PostCreate extends Component<Props, State> {
  static defaultProps = {
    addPost: ()=>{},
    loadPosts: ()=>{},
  };

  props: Props;
  handleSubmit: Function;

  constructor(props: Props) {
    super(props);

    this.state = {
      error: false,
      post: {...postDefault},
      saving: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    setTitle('Create new post');
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.error) {
      this.props.history.push(ROUTE_POSTS);
    } else if (this.state.saving) {
      this.props.addPost(this.state.post.title);
      this.props.loadPosts();
      this.props.history.push(ROUTE_POSTS);
    }
  }

  handleSubmit(values: Object) {
    this.setState({
      post: values,
      saving: true
    });
  }

  render() {
    return (
      <section className="PostCreate">
        <h1 className="PostCreate__headline">Create new post:</h1>

        <Formik
          initialValues={{...postDefault}}
          enableReinitialize={true}
          validationSchema={postSchema}
          onSubmit={this.handleSubmit}
          render={(formikProps) => (
            <PostCreateForm {...formikProps} saving={this.state.saving} />
          )}
        />
      </section>
    );
  }
}


export default PostCreate;
