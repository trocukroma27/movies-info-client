export default (state = {movies: [], moviesByGenre: [], type: ''}, action) => {
    switch(action.type){
        case "FETCH_MOVIES":
            return {...state, movies: action.payload};
        case "FETCH_MOVIES_BY_GENRE":
            return {...state, moviesByGenre: action.payload};
        case "FETCH_MOVIE":
            return {...state, movie: action.payload};
        case "SEARCH":
            return {...state, search: action.payload};
        case "CREATE":
            return {...state, movie: action.payload}
        case "UPDATE":
            return {...state, movie: action.payload};
        case 'DELETE':
            return { ...state, movies: state.movies.filter((movie) => movie.movie_id !== action.payload) };
        case "FETCH_GENRES":
            return {...state, genres: action.payload};
        case "SET_TYPE":
            return {...state, type: action.payload.type};
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
            return { ...state, authData: action?.payload };
        case 'LOGOUT':
            localStorage.clear();
            return { ...state, authData: null };
        case 'USERS':
            return { ...state, users: action.payload}
        case 'SET_ROLES':
            return { ...state, users: state.users.map(user => user.user_id !== action.payload.user_id ? user : action.payload)}
        case "FETCH_ROLES":
            return {...state, roles: action.payload};
        case 'ERROR':
            return { ...state, error: action.payload };
        case 'SAVE_ERROR':
            return { ...state, errorMessage: action.payload};
        default:
            return state;
    }
}