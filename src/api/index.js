import axios from 'axios';

const API =  axios.create({
    baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchMovies = (type, page) => API.get(`${type}?page=${page}`);
export const fetchMoviesByGenre = (type, page, genreID) => API.get(`${type}/genre/${genreID}?page=${page}`);
export const search = (query, page) => API.get(`/search?query=${query}&page=${page}`);
export const fetchMovie = (id, type) => API.get(`/${type}/${id}`);
export const createMovie = (data) => API.post('/post', data);
export const updateMovie = (id, data) => API.put(`/post/${id}`, data);
export const deleteMovie = (id) => API.delete(`/post/${id}`);
export const fetchGenres = () => API.get(`/genres`);
export const setRating = (data) => API.post(`/post/rate`, data);
export const changeRating = (data) => API.put(`/post/rate`, data);
export const commentMovie = (movie_id, comment) => API.post(`/post/${movie_id}/comment`, comment);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const fetchUsers = (page) => API.get(`/user?page=${page}`);
export const updateRoles = (user_id, roles) => API.put(`/user/${user_id}`, roles);
export const fetchRoles = () => API.get('/roles');