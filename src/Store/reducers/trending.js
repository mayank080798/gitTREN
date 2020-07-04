import * as actionTypes from '../actions/actionTypes';
const initialState = {
    trending    :   [],
    loading     :   false,
    error       :   null,
    language    :   null,
    since       :   null,
    option      :   'repositories',
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.TRENDING_START :
            return {
                ...state,
                loading : true
            }
        case actionTypes.TRENDING_SUCCESS :
            return {
                ...state,
                trending :  action.trending,
                loading  :  false,
                error    :  null
            }
        case actionTypes.TRENDING_FAIL :
            return {
                ...state,
                error    : action.error                   
            }
        case actionTypes.TRENDING_LANG_SET :
            return {
                ...state,
                language : action.language,
                loading  : true
            }
        case actionTypes.TRENDING_SINCE_SET :
            return {
                ...state,
                since   : action.since,
            }
        case actionTypes.TRENDING_TYPE_SET :
            return {
                ...state,
                option   : action.option,
                trending : null
            }
        default:
            return state;
    }
}
export default reducer;