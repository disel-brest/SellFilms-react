//var 1
/*
export const fetchFilms = (films) => {
    return {
        type: 'FETCH_FILMS',
        payload: films
    }
}
*/

//var 2
export const FETCH_FILMS = 'FETCH_FILMS';
export const fetchFilms = (films) => ({
    type: FETCH_FILMS,
    payload: films,
});

export const FETCH_FILM = 'FETCH_FILM';
export const fetchFilm = (film) => ({
  type: FETCH_FILM,
  payload: film,
});

export const ADD_TO_CART = 'ADD_TO_CART';
export const addToCart = (film) => ({
  type: ADD_TO_CART,
  payload: film,
});

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';          //IGOR-id,  SERGEY-film
export const removeFromCart = (film) => ({
  type: REMOVE_FROM_CART,
  payload: film,
});

export const INCREASE_COUNT_CART = 'INCREASE_COUNT_CART';    //IGOR-id,  SERGEY-film
export const increaseCountCart = (film) => ({
  type: INCREASE_COUNT_CART,
  payload: film,
});

export const DECREASE_COUNT_CART = 'DECREASE_COUNT_CART';    //IGOR-id,  SERGEY-film
export const decreaseCountCart = (film) => ({
  type: DECREASE_COUNT_CART,
  payload: film,
});

export const UPDATE_SORTING = 'UPDATE_SORTING';
export const updateSorting = (type) => ({
  type: UPDATE_SORTING,
  payload: type,
});
