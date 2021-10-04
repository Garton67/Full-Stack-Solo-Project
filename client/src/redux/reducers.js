import { SET_USER } from "./actions";

export function userReducer(state = null, action) {
    switch (action.type) {
        case SET_USER:
            return action.data
        default:
            return state
    }
}

const initialState = {
    count: 0, 
    randomImages: [] 
}

const reducer = (state = initialState, action) => {
    if(action.type == 'ADD_RANDOM_IMAGE') {
        return {
            ...state, 
            randomImages: state.randomImages.concat(action.payload)
        }
    }

    return state 
}

export default reducer 