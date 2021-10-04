
import * as actionTypes from '../actions/actionTypes'

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

// {type: 'ADD_TASK', payload: task}

export const addTask = (task) => {
    return {
        type: actionTypes.ADD_TASK, 
        payload: task
    }
}

export const deleteTask = (task) => {
    return {
        type: actionTypes.DELETE_TASK, 
        payload: task 
    }
}