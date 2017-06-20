import { combineReducers } from 'redux';
import movies from './movies';
import rooms from './rooms';
import settings from './settings';
import shows from './shows';

const appReducer = combineReducers({
  movies, rooms, settings, shows
})

export default appReducer;
