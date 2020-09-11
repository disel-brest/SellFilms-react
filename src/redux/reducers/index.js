import { combineReducers } from "redux";
import { filmsReducer } from "./filmsReducer";

const reducers = combineReducers({
      films: filmsReducer
})

export default reducers;