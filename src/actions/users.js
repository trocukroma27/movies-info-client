import * as api from '../api/index.js';

export const getUsers = (page) => async (dispatch) => {
    try{
        const { data } = await api.fetchUsers(page);

        dispatch({type: 'USERS', payload: data});
    } catch(error){
        console.log(error);
    }
}

export const setRoles = (user_id, roles) => async (dispatch) => {
    try{
        const { data } = await api.updateRoles(user_id, roles);

        dispatch({type: 'SET_ROLES', payload: data});
    } catch(error){
        console.log(error);
    }
}

export const getRoles = () => async (dispatch) => {
    try{
        const { data } = await api.fetchRoles();
        
        dispatch({type: "FETCH_ROLES", payload: data});
    }catch(error){
        console.log(error);
    }
}