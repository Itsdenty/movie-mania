import { UPDATE_MOVIE  } from '../actions/types';

const initialState = {
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Ratings: [
    ],
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    DVD: "",
    BoxOffice: "",
    Production: "",
    Website: "",
    Response: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MOVIE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}