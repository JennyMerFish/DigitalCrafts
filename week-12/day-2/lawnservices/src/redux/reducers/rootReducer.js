import { combineReducers } from "redux";
import testimonialData from "./TestimonialReducer";
import servicesData from "./ServicesReducer";
import galleryPhotos from "./GalleryReducer";
import weatherData from "./WeatherReducer";



const rootReducer = combineReducers({
    testimonialData,
    servicesData,
    galleryPhotos,
    weatherData
})
export default rootReducer;
