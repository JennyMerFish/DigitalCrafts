import { combineReducers } from "redux";
import testimonialData from "./TestimonialReducer";
import servicesData from "./ServicesReducer";



const rootReducer = combineReducers({
    testimonialData,
    servicesData
})
export default rootReducer;
