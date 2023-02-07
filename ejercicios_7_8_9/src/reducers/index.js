import { combineReducers } from "redux";
import contactReducers from './contactReducers'

const reducer=combineReducers({
    contact: contactReducers
});

export default reducer;