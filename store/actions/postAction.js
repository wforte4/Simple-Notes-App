import * as types from '../types'

export const fetchProjects = () => async dispatch=> {
    dispatch({
        type: types.GET_PROJECTS,
        payload: ['Burke Dev', 'Hanson Project Showcase']
    })
}