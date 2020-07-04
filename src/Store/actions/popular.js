import * as actionTypes from './actionTypes';
import axios from 'axios';

export const startPopular = () => {
    return {
        type : actionTypes.POPULAR_START
    }
}

export const successPopular = data => {
    return {
        type : actionTypes.POPULAR_SUCCESS,
        data
    }
}

export const failPopular = error => {
    return {
        type : actionTypes.POPULAR_FAIL,
        error
    }
}

export const setPopLanguage = language => {
    return {
        type : actionTypes.POPULAR_LANG_SET,
        language
    }
}

export const setPage    = () => {
    return {
        type : actionTypes.POPULAR_PAGE_SET
    }
}

export const initPopular = endPoint => {

    return async (dispatch) => {
        dispatch(startPopular());
        try{
            let popular = await axios.get(endPoint);
            dispatch(successPopular(popular.data.items));
        }catch(e){
            dispatch(failPopular(e.message));
        }
    }
}