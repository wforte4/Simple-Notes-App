import * as types from '../types'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const initialState = { 
    thoughts: [],
    profile: cookies.get('user')||null,
    auth: cookies.get('auth')||null,
    allusers: null,
    post: {},
    loading: false,
    error: null,
    errorMessage: null
}

export const postReducer = (state = initialState, action) => {

    switch(action.type) {
        case types.GET_THOUGHTS:
            return {
                ...state,
                thoughts: action.payload,
                loading: false,
                error: null
            }
        case types.LOGIN:
            return {
                ...state,
                profile: action.payload,
                loading: false,
                error: null,
                errorMessage: null
            }
        case types.AUTH:
            return {
                ...state,
                auth: action.payload,
                loading: false,
                error: null
            }
        case types.LOGOUT:
            return {
                ...state,
                profile: null,
                auth: null,
                loading: false,
                error: null
            }
        case types.FAILEDLOGIN:
            return {
                ...state,
                loading: false,
                error: action.payload,
                errorMessage: action.errorMessage
            }
        case types.GET_ALLUSERS:
            return {
                ...state,
                loading: false,
                allusers: action.payload,
                error: action.error,
                errorMessage: action.errorMessage
            }
        default:
            return state
    }
}