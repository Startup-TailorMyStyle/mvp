import handleCart from './handleCart'
import { combineReducers } from "redux";
import handleMeasurements from './handleMeasurements';
const rootReducers = combineReducers({
    handleCart,
    handleMeasurements
})
export default rootReducers