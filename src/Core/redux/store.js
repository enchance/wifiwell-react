import { createStore } from "redux";
import root_reducer from "./reducers/root";

const store = createStore(root_reducer)

export default store