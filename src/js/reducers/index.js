// @flow

/**
* Reducers
*/
import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
import posts from './posts';


export default combineReducers({
  posts,
  toastr: toastrReducer,
});
