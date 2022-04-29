import { connect } from 'react-redux';
import {getMovies, addMovieFavorite, removeMovieFavorite, getMovieDetail} from '../actions/index'

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  const rootReducer = (state = initialState, [type, payload])=>{
      switch(type){
          case 'GET_MOVIES' : return {
            ...state,
            moviesLoaded: type.payload.Search
          }
          
          case 'ADD_MOVIE_FAVORITE' :  return {
            ...state,
            moviesFavourites: state.moviesFavourites.concat(type.payload)
          }
          case 'GET_MOVIES': return {}
          case 'REMOVE_MOVIE_FAVORITE': return{};
          default: return state;
      }   
  }

  export default connect(rootReducer,{getMovies, addMovieFavorite, removeMovieFavorite, getMovieDetail});