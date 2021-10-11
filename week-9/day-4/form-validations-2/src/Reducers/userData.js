const initialState = {}

const userData =(state=initialState, action) => {
    switch(action.type) {
case "GET_USERS":
    return{...action.payload}    
default:
    return state;
}
}
export default userData;