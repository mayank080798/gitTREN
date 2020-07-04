import * as actionTypes from '../actions/actionTypes';

const initialState = {
    language        :   '',
    popularRepos    :   [],
    loading         :   false,
    error           :   null,
    page            :   1,
    perPage         :   10
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.POPULAR_START : 
            return {
                ...state,
                loading :   true
            }
        case actionTypes.POPULAR_SUCCESS :
            return {
                ...state,
                popularRepos : action.data,
                loading      : false,
                error        : null
            }
        case actionTypes.POPULAR_FAIL :
            return {
                ...state,
                error   :   action.error
            }
        case actionTypes.POPULAR_LANG_SET :
            return {
                ...state,
                language : action.language,
                page     : 1,
            }
        case actionTypes.POPULAR_PAGE_SET :
            return {
                ...state,
                page    :  state.page + 1,
            }
        default :
            return state;
    }
}

export default reducer;