import { FETCH_FILM, ADD_COMMENT } from '../actions';

export const filmReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_FILM:
            return action.payload
        case ADD_COMMENT: {
            return {
                ...state,
                    comments: [...state.comments, {
                        content: action.payload.content,
                        status: action.payload.status
                    }
                ]
            }
        }
        default:
            return state
    }
}