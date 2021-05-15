import {createStore, applyMiddleware} from 'redux';
import RootReducer from "./reducers/RootReducer";
import {composeWithDevTools} from "redux-devtools-extension/index";
import thunk from 'redux-thunk';

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default Store;