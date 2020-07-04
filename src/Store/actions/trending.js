import * as actionTypes from './actionTypes';
import axios from 'axios';



export const startTrending = () => {
    return{
        type : actionTypes.TRENDING_START
    }
}

export const successTrending = (trending) => {
    return {
        type    : actionTypes.TRENDING_SUCCESS,
        trending
    }
}
export const failTrending = error => {
    return {
        type    : actionTypes.TRENDING_FAIL,
        error
    }
}

export const initTrending = endPoint => {
    return async (dispatch) => {
        dispatch(startTrending());
        try{
            let trending = await axios.get(endPoint);
            console.log(endPoint,trending.data)
            if(trending)
                dispatch(successTrending(trending.data));
        }catch(e){
            dispatch(failTrending(e.message));
        }
    }
}

export const setLanguage = language => {
    return {
        type    : actionTypes.TRENDING_LANG_SET,
        language
    }
}

export const setSince  = since => {
    return {
        type    : actionTypes.TRENDING_SINCE_SET,
        since
    }
}

export const setType = option => {
    return {
        type   : actionTypes.TRENDING_TYPE_SET,
        option : option
    }
}
