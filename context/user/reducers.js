import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from "./action-types";

export const initialUserState = {
    loading: false,
    data: [],
    error: null
}

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
