// @flow

import { POSTS_LOAD_ALL_SUCCESS } from '../constants/actionTypes';
import type { ActionObj } from '../types/action';
import type { PostType } from '../types/post';


/**
* Posts Reducer.
*/

export default function reducer(state: Array<PostType> = [], action: ActionObj) {
  switch(action.type) {
    case POSTS_LOAD_ALL_SUCCESS:
      const newState = [...state];

      if (action.payload !== undefined) {
        for (let rec in action.payload) {
          const recObj = action.payload[rec];
          
          if (recObj) {
            let eleIndex = state.findIndex(ele => ele.id === recObj.id);
            if (eleIndex < 0) newState.push(recObj);
          }
        };

        return newState;
      }

      break;

    default:
      return state;
  }

  return state;
}
