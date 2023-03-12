import { actionTypes } from "./actionTypes";

export const INITIAL_STATE = {
    loading: false,
    post: '',
    error: false
};

export const postReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCH_START:
            return {
                loading: true,
                error: false,
                post: {},
            };
        case actionTypes.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.payload
            }
        case actionTypes.FETCH_ERROR:
            return {
                loading: false,
                error: true,
                post: ''
            }
        default:
            return state;
    }
};

