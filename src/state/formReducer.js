import { actionTypes } from "./actionTypes";

export const INITIAL_STATE = {
    email: '',
    password: '',
    isChecked: false,
    quantity: 0
};

export const formReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case actionTypes.CHANGE_CHECK:
            return {
                ...state,
                isChecked: !state.isChecked
            }
        case actionTypes.INCREMENT:
            return {
                ...state,
                quantity: state.quantity + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                quantity: state.quantity - 1
            }
        default:
            return state
    }
};