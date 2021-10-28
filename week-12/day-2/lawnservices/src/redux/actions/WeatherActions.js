import { GET_DATA } from "../action-types/WeatherActionTypes";

export const dispatchData = (dispatch, data) => {
    dispatch({type: GET_DATA, payload: {data}})
}