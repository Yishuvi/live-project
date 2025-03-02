import { legacy_createStore as createStore } from "redux";

import MainReducer from "./allreducer";

const Mystore =createStore(MainReducer);

export default Mystore;