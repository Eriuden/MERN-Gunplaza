import { UPDATE_GUNPLA, DELETE_GUNPLA, GET_GUNPLA } from "../actions/gunpla.action";

const initialState = {}

export default function gunplaReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GUNPLA:
            return action.payload

        case UPDATE_GUNPLA:
            return state.map((gunpla) => {
                if (gunpla._id === action.payload.gunplaId) {
                    return {
                        ...gunpla,
                        name: action.payload.name,
                        grade: action.payload.grade,
                        price: action.payload.price
                    }
                } else return gunpla
            })

        case DELETE_GUNPLA:
            return state.filter((gunpla) => gunpla._id !== action.payload.gunplaId)
    
        default:
            return state;
    }
}