import { combineReducers } from "redux";
import testimonialData from "./TestimonialReducer";
import servicesData from "./ServicesReducer";
import galleryPhotos from "./GalleryReducer";



const rootReducer = combineReducers({
    testimonialData,
    servicesData,
    galleryPhotos
})
export default rootReducer;
