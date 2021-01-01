import * as types from '../types'
import { getProjects } from '../../services/projectservice'
import { loginRequest } from '../../services/apiservice'
import jwt_decode from 'jwt-decode';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
import { getThoughts } from '../../services/thoughtservice';

const cookies = new Cookies();

export const fetchThoughts = (email, auth) => async dispatch => {
    const res = await getThoughts(email, auth)
    console.log(res)
    dispatch({
        type: types.GET_THOUGHTS,
        payload: res.length > 0 ? res: null
    })
}

export const signIn = (email, password) => async dispatch => {
    const res = await loginRequest(email, password)
    console.log(res)
    if(res === 400) {
        dispatch({
            type: types.FAILEDLOGIN,
            payload: 400,
            errorMessage: 'Invalid Email or Password'
        })
        return
    }
    const decoded = jwt_decode(res.accessToken)
    cookies.set('user', decoded)
    cookies.set('auth', res)
    dispatch({
        type: types.AUTH,
        payload: res
    })
    dispatch({
        type: types.LOGIN,
        payload: decoded
    })
    await Router.push('/')
}

export const signOut = () => async dispatch => {
    cookies.remove('user')
    cookies.remove('auth')
    dispatch({
        type: types.LOGOUT,
        payload: null
    })
    await Router.push("/login");
}