import { ADD, REMOVE, UPDATE_STATE } from "../types";

const initialState = [

];

export default function contactReducers(state = initialState, action) {
  let copyState = [...state];
  switch (action.type) {
    case ADD:
      copyState.push(action.contact); 
      return copyState;
    case REMOVE:
      let indexRemove = copyState.indexOf(action.id)
      copyState.splice(indexRemove, 1);
      return copyState;
    case UPDATE_STATE:
      let indexUpdate = copyState.indexOf(action.id)
      copyState[indexUpdate].isOnline = !copyState[indexUpdate].isOnline;
      return copyState;
    default:
      return state;
  }
}
