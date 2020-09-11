
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