import { combineReducers } from "redux";
import counter from "./counter";
import currentLiveMatch from "./currentLiveMatch";
import matchups from "./matchups";
import newsArticles from "./newsArticles";
import signUpFormData from "./signUpForm";


// const initialState ={
// firstName: "",
// lastName: "",
// email: "",
// password: "",
// matchups: [],
//   currentLiveMatch: {},
//   newsArticles: [],
//   previousMatchVideos: [],
//   userData: [],
// }
const rootReducer = combineReducers(

  {
      signUpFormData,
      counter,
      matchups,
      currentLiveMatch,
      newsArticles
    // switch (action.type) {
    //     case "SIGNUPFORM_FIRSTNAME":
    //         return{...state, firstName: action.payload}
    //     case "SIGNUPFORM_LASTNAME":
    //         return{...state, lastName: action.payload}
    //     case "SIGNUPFORM_EMAIL":
    //         return{...state, email: action.payload}
    //     case "SIGNUPFORM_PASSWORD":
    //         return{...state, password: action.payload}
   
    
    //     default:
    //         return state;
    }

    )
export default rootReducer;