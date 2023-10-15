import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./allUsers.reducer";
import errorReducer from "./error.reducer";
import gunplaReducer from "./gunpla.reducer";
import allGunplasReducer from "./allGunplas.reducer";

export const reducers = combineReducers({
userReducer,
usersReducer,
gunplaReducer,
allGunplasReducer,
errorReducer,
})

