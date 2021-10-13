import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../action-types/counter-types"
import { useDispatch } from "react-redux"
export const ConsoleLogVariable = (name) => {
    return console.log(name)
}



export const IncrementCounter = (dispatch) => {
    
dispatch({type: INCREMENT_COUNTER})
}

export const DecrementCounter = (dispatch) => {
dispatch({type: DECREMENT_COUNTER})
}