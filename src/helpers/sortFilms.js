import {
    SORT_BY_HIGHER_PRICE,
    SORT_BY_LESS_PRICE,
    SORT_BY_RATE,
    SORT_BY_YEAR,
  } from '../constants';
  
  function sortFilms(films, sorting) {
    if (sorting === SORT_BY_HIGHER_PRICE) {
      return films.sort((a, b) => b.cost - a.cost);
    }
  
    if (sorting === SORT_BY_LESS_PRICE) {
      return films.sort((a, b) => a.cost - b.cost);
    }
  
    if (sorting === SORT_BY_RATE) {
      return films.sort((a, b) => b.rating - a.rating);
    }
  
    if (sorting === SORT_BY_YEAR) {
      return films.sort((a, b) => a.year - b.year);
    }
  
    return films;
  }
  
  export default sortFilms;