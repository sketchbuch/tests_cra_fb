// @flow

import Yup from 'yup';


/**
* Validation scheme for a post.

* @return object
*/
export default function postSchema(): Object {
  return Yup.object().shape({
    title: Yup.string().trim().required('A title is required'),
  });
}
