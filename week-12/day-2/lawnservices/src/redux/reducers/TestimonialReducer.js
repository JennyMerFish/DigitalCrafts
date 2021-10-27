import { ADD_REVIEW } from "../action-types/TestimonialActionTypes"

const initialState = [
    {name:"Emily H.", review: "Erika and Esteban are wonderful! They helped us figure out solutions to our yard problems. Esteban and his crew do great work."},
    {name: "J. Clevenger", review: "Lawn Service 4 Less has been absolutely wonderful to work with, prompt and reliably routine. I have even had them do some construction for me and am very happy with the results. I look forward to working with them on some landscaping projects this summer as well. I know any project I hire them for will be taken care of with great care and attention to detail, as well as on time and budget."}
]

const testimonialData = (state=initialState, action) => {
    switch(action.type){
        case ADD_REVIEW:
            return [...state, action.payload]
        default:
            return state
    }
}
export default testimonialData