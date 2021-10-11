import { combineReducers } from "redux";
import userData from "./userData";
import graphData from "./graphData"
import loginInfo from "./loginInfo";

// const initialState ={
// userName: "",
// userEmail: "",
// restaurants: [],
// userData: {}
// }



const rootReducer = combineReducers({
    userData,
    graphData,
    loginInfo
        // case "SET_USERNAME":
        //     return {...state, userName: action.payload};
            
        // case "SET_EMAIL":
        //     return{...state, userEmail: "jennybobenny@yahoo.com"};
        // case "SET_STREETNAME":
        //     return{...state, streetName: "Evergreen Terrace"}
        // case "SET_RESTAURANTS":
        //     return{...state, restaurants: action.payload}    
       
    }
)






export default rootReducer;