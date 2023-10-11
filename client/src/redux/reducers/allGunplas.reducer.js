import { GET_ALLGUNPLAS } from "../actions/gunpla.action";

const initialState = {}

export default function allGunplasReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALLGUNPLAS:
            return action.payload 
        default:
            return state
    }
}