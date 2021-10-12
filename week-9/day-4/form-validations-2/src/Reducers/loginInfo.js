const initialState = {
    
}

const loginInfo =(state=initialState, action) => {
    switch(action.type) {

        case "SET_USER":
            return{...state, userData:action.payload}
        default:
            return state;
    }
}
export default loginInfo;