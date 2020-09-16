import { combineReducers } from "redux";
import { filmsReducer } from "./filmsReducer";
import { filmReducer } from "./filmReducer";

const reducers = combineReducers({
      films: filmsReducer,
      activeFilm: filmReducer,
})

export default reducers;