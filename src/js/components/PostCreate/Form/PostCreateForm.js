// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../ui/TextInput/TextInput';
import Button from '../../ui/Button/Button';
import validate from '../../../validation/validation';
import { ROUTE_POSTS } from '../../../constants/routes';

type Props = {
  dirty: boolean,
  errors: Object,
  handleBlur: Function,
  handleChange: Function,
  handleSubmit: Function,
  isSubmitting: boolean,
  saving: boolean,
  touched: Object,
  values: Object,
};


/**
* Post create/edit form.
*/
export class PostCreateForm extends Component<Props> {
  static defaultProps = {
    dirty: false,
  };

  props: Props;

  render() {
    const {
      dirty,
      errors,
      handleBlur,
      handleChange,
      handleSubmit,
      saving,
      touched,
      values,
    } = this.props;

    const tValid = validate('title', errors, touched);
    const btnIsDisabled = (
      !tValid ||
      saving ||
      !dirty
    ) ? true : false;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="fieldwrap">
          <TextInput
            autoFocus
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            name="title"
            placeholder="Enter a title..."
            isValid={tValid}
          />
          {!tValid && <p className="invalid-feedback">{errors.title}</p>}
        </div>
        <div className="fieldwrap">
          <Button type="submit" disabled={btnIsDisabled} busy={saving}>Submit</Button>
        </div>

        {!saving &&
          <p className="form__submsg">
            <Link to={ ROUTE_POSTS }>Back to post list</Link>
          </p>
        }
      </form>
    );
  }
}


export default PostCreateForm;
