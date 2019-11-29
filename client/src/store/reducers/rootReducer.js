import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import singleCityReducer from './singleCityReducer';
import itinerariesForACity from './itinerariesReducer';
import usersReducer from './usersReducer';


const rootReducer = combineReducers({citiesReducer, singleCityReducer, itinerariesForACity, usersReducer});


export default rootReducer;