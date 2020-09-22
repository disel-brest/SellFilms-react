import { FETCH_FILMS, UPDATE_SORTING } from '../actions';

import sortFilms from '../../helpers/sortFilms';    //////функция вынесена отдельно

const initialState = {      //надо чтобы state, был пустой изначально
    initialList: [],        //Все фильмы изначально  
    sorting: ''             //Если есть значение то сортирует
};

export const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILMS:
            return {
                ...state,
                initialList: action.payload
            }

        case UPDATE_SORTING: {
            const list = sortFilms([...state.initialList], action.payload);
            return {
                ...state,
                sorting: action.payload,
                initialList: list,
                // list,
            };
        }
        default:
            return state
    }
}