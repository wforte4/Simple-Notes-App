import * as types from '../types'
import { getProjects } from '../../services/projectservice'
import { loginRequest } from '../../services/apiservice'
import jwt_decode from 'jwt-decode';
import Router from 'next/router';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const fetchProjects = () => async dispatch => {
    const res = await getProjects(50)
    dispatch({
        type: types.GET_PROJECTS,
        payload: res
    })
}

export const signIn = (email, password) => async dispatch => {
    const res = await loginRequest(email, password)
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
}