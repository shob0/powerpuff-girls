import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// disable due to other browser issues
// , composeWithDevTools()
const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
