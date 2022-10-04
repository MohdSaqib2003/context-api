import React, { createContext, useReducer } from "react";
import { initialUserState } from "./reducers";
import { userReducer } from "./reducers";
import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from "./action-types";
import axios from "axios";

export const UserContext = createContext(initialUserState);

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialUserState);

    const userRequest = () => {
        dispatch({
            type: USER_REQUEST,
        })
    }

    const userSuccess = (data) => {
        dispatch({
            type: USER_SUCCESS,
            payload: data
        })
    }

    const userError = (err) => {
        dispatch({
            type: USER_ERROR,
            payload: err
        })
    }

    const fetchUserData = (id) => {
        userRequest();

        const config = {
            url: `https://jsonplaceholder.typicode.com/users/${+id}`
        }
        axios(config).then((res) => {
            userSuccess(res.data);
        }).catch((err) => {
            userError(err);
        })
    }

    return (<UserContext.Provider value={{ state, fetchUserData }}>
        {children}
    </UserContext.Provider>)
}