const key = `apikey=20dac387`;
import {SEARCH_MOVIES} from './actionTypes';


export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?=${key}` + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }
export const getMovieDetail = ()=>{
    return {
        type: "GET_MOVIE_DETAIL"
    }
}
export const addMovieFavorite = (payload)=>{
    return {
        type: "ADD_MOVIE_FAVOURITE",
        payload
    }
}
export const removeMovieFavorite = ()=>{
    return {
        type : "REMOVE_MOVIE_FAVORITE"
    }
}