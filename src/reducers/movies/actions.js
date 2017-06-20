export const ADD_MOVIE = 'ADD_MOVIE'
export const REMOVE_MOVIE = 'REMOVE_MOVIE'
export const EDIT_MOVIE = 'EDIT_MOVIE'

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: {
    movie
  }
})

export const removeMovie = (id) => ({
  type: REMOVE_MOVIE,
  payload: {
    id
  }
})

export const editMovie = (movie) => ({
  type: EDIT_MOVIE,
  payload: {
    movie
  }
})
