import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import alertify from "alertifyjs";

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (error) {
        
       alertify.error("Hata");
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (error) {
        
        alertify.error("Hata");
    }
}

