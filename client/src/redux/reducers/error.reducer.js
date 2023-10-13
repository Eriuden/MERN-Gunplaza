import { GET_GUNPLA_ERROR } from "../actions/gunpla.action";

const initialState = { gunplaError: []}

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GUNPLA_ERROR:
            return {
                gunplaError: action.payload
            }
    
        default:
            return state
    }
}