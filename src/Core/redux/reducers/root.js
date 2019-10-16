import { combineReducers } from "redux";
import auth_reducer from "./auth";

const root_reducer = combineReducers({
    auth: auth_reducer,
})

export default root_reducer