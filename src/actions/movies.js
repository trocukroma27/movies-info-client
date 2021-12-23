import * as api from '../api';

export const getMovies = (type, page) => async (dispatch) => {
    try{
        const {data} = await api.fetchMovies(type, page);
        
        dispatch({type: "FETCH_MOVIES", payload: data});
    }catch(error){
        console.log(error);
    }
}

export const getMovie = (id, type) => async (dispatch) => {
    try{
        const {data} = await api.fetchMovie(id, type);

        dispatch({type: "FETCH_MOVIE", payload: data});
    }catch(error){
        console.log(error);
    }
}

export const getMoviesByGenre = (type, page, genreID) => async (dispatch) => {
    try{
        const {data} = await api.fetchMoviesByGenre(type, page, genreID);
        
        dispatch({type: "FETCH_MOVIES_BY_GENRE", payload: data});
    }catch(error){
        console.log(error);
    }
}

export const createMovie = (data) => async (dispatch) => {
    try{
        const {result} = await api.createMovie(data);
        
        dispatch({type: "CREATE", payload: result});
    }catch(error){
        console.log(error);
    }
}

export const updateMovie = (id, data) => async (dispatch) => {
    try{
        const {result} = await api.updateMovie(id, data);

        dispatch({type: "UPDATE", payload: result});
    }catch(error){
        console.log(error);
    }
}

export const deleteMovie = (id) => async (dispatch) => {
    try{
        await api.deleteMovie(id);

        dispatch({type: 'DELETE', payload: id});
    } catch(error){
        console.log(error);
    }
}

export const getGenres = () => async (dispatch) => {
    try{
        const {data} = await api.fetchGenres();
        
        dispatch({type: "FETCH_GENRES", payload: data});
    }catch(error){
        console.log(error);
    }
}

export const setRating = (rating) => async (dispatch) => {
    try{
        await api.setRating(rating);
    }catch(error){
        console.log(error);
    }
}

export const changeRating = (rating) => async (dispatch) => {
    try{
        await api.changeRating(rating);
    }catch(error){
        console.log(error);
    }
}

export const commentMovie = (movie_id, comment) => async (dispatch) => {
    try{
        const {data} = await api.commentMovie(movie_id, comment);

        dispatch({type: "FETCH_MOVIE", payload: data});
    }catch(error){
        console.log(error);
    }
}

export const search = (query, page) => async (dispatch) => {
    try{
        const {data} = await api.search(query, page);
        
        dispatch({type: "SEARCH", payload: data});
    }catch(error){
        console.log(error);
    }
}
