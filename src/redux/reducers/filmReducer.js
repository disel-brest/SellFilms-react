import { FETCH_FILM } from '../actions';

const initialState = null

export const filmReducer = (state = initialState, action)=> {
    switch(action.type) {
        case FETCH_FILM:
            return action.payload
        default:
            return state
    }
}