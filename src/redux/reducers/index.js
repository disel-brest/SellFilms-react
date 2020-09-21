import { combineReducers } from "redux";
import { filmsReducer } from "./filmsReducer";
import { filmReducer } from "./filmReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
      films: filmsReducer,
      activeFilm: filmReducer,
      cart: cartReducer
})

export default reducers;