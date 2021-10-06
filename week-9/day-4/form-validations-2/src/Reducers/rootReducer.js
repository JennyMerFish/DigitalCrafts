const initialState ={
userName: ""
}



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return {...state, userName: "Bob"};
            
    
        default:
            return state;
    }
}






export default rootReducer;