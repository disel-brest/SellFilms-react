import { FETCH_FILMS } from '../actions';

const initialState = {
    initialList: []        //надо чтобы state, был пустой изначально
};

export const filmsReducer = (state = initialState, action)=> {
    switch(action.type) {
        case FETCH_FILMS:
            return {
                ...state,
                initialList: action.payload
            }
        default:
            return state
    }
}