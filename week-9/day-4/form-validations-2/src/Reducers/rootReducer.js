const initialState ={
userName: "",
userEmail: "",
restaurants: [],
userData: {}
}



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return {...state, userName: action.payload};
            
        case "SET_EMAIL":
            return{...state, userEmail: "jennybobenny@yahoo.com"};
        case "SET_STREETNAME":
            return{...state, streetName: "Evergreen Terrace"}
        case "SET_RESTAURANTS":
            return{...state, restaurants: action.payload}    
        case "GET_USERS":
            return{...state, userData: action.payload}    
        default:
            return state;
    }
}






export default rootReducer;