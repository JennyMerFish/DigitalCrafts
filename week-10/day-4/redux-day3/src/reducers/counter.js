import {DECREMENT_COUNTER, INCREMENT_COUNTER} from "../action-types/counter-types"
const initialState = 0


const counter = (state = initialState, action) => {
switch(action.type) {
    case INCREMENT_COUNTER:
        return state + 1;
    case DECREMENT_COUNTER:
        return state - 1;
    default:
        return state
}
}
export default counter;