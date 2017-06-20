import {
  ADD_MOVIE,
  REMOVE_MOVIE,
  EDIT_MOVIE,
  addMovie,
  removeMovie,
  editMovie
} from './actions.js';

import { dispatch } from 'redux';

const movies = (state = [], action) => {
  let { type, payload } = action;

  switch(type) {
    case ADD_MOVIE:
    break;
    case REMOVE_MOVIE:
    break;
    case EDIT_MOVIE:
    break;
    default:
      return state;
  }
}

export default movies;
