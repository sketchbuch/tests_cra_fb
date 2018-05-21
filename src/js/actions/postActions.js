// @flow

import { addPost, getAllPosts } from '../db/firebase';
import {
  POSTS_LOAD_ALL_ERROR,
  POSTS_LOAD_ALL_SUCCESS,
  POSTS_LOAD_ALL,
  POSTS_SAVE_NEW,
  POSTS_SAVE_NEW_SUCCESS,
  POSTS_SAVE_NEW_ERROR,
} from '../constants/actionTypes';
import type { ActionCreator } from '../types/action';


/**
* Post Actions
*/

export function loadAllPosts(): ActionCreator {
  return (dispatch, getState) => {
    dispatch({ type: POSTS_LOAD_ALL });

    getAllPosts()
      .then(response => {
        dispatch({
          type: POSTS_LOAD_ALL_SUCCESS,
          payload: response.val()
        });
      })
      .catch(error => {
        dispatch({
          type: POSTS_LOAD_ALL_ERROR,
          error: true,
          payload: error
        });
      });
  };
}

export function addNewPost(postTitle: string): ActionCreator {
  return (dispatch, getState) => {
    dispatch({ type: POSTS_SAVE_NEW });

    addPost(postTitle)
      .then(response => {
        dispatch({ type: POSTS_SAVE_NEW_SUCCESS });
      })
      .catch(error => {
        dispatch({
          type: POSTS_SAVE_NEW_ERROR,
          error: true,
          payload: error
        });
      });
  };
}
