const initialState = {
    mustang: "1967 Boss 302",
    fordGt: "2021 Ford Gt",
    bugatti: "2021 Bugatti Chiron",
    kawasaki: "ZRX 1200"
}

const rootReducer = (state=initialState, action) => {
switch (action.type) {
    case "GET_BUGATTI":
        return state.bugatti        
        
    case "GET_FORDGT":
        return state.fordGt;
        
    case "CHANGE_KAWASAKI":
        return {...state, kawasaki: "Ninja 250"}
        
    case "GET_MUSTANG":
        return state.mustang;


    default:
        return state
        
}
}
export default rootReducer;