import {
    UPDATE_MOVIE
} from './types';

export const updateMovie = (movieDetails) => dispatch => {
    dispatch({
        type: UPDATE_MOVIE,
        payload: movieDetails,
    })
}
