import * as types from '../types'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const initialState = { 
    projects: [],
    profile: cookies.get('user'),
    auth: cookies.get('auth'),
    post: {},
    loading: false,
    error: null
}

export const postReducer = (state = initialState, action) => {

    switch(action.type) {
        case types.GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
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
                eror: null
            }
        case types.LOGOUT:
            return {
                ...state,
                profile: action.payload,
                auth: action.payload,
                loading: false,
                eror: null
            }
        default:
            return state
    }
}