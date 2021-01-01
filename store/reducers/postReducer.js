import * as types from '../types'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const initialState = { 
    thoughts: [],
    profile: cookies.get('user'),
    auth: cookies.get('auth'),
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
                error: null
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
                profile: action.payload,
                auth: action.payload,
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
        default:
            return state
    }
}