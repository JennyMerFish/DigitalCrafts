import { GET_DATA } from "../action-types/WeatherActionTypes";
 const initialState = {

 }


 const weatherData = (state=initialState, action) => {
    switch(action.type){
        case GET_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}
export default weatherData