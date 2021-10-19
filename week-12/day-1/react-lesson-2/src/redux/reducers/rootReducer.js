import studentData from "../../studentData"

const initialState = {
    counter: 0,
    students: [studentData]
}

function rootReducer(state=initialState, action) {
    switch(action.type) {
        case "GET_STUDENTS":
            return state
        case "THE_COUNTER":
            return {...state, counter: state.counter +  action.payload}
        default:
            return state
    }
}

export default rootReducer;
