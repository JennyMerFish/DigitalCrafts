const initialState = {}

const getUsers =(state=initialState, action) => {
    switch(action.type) {
case "GET_USERS":
    return{userData: action.payload}    
default:
    return state;
}
}
export default getUsers;