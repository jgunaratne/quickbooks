import { createStore } from "redux";
import dialogReducer from "./reducers";
function configureStore(state = { dialog: true }) {
  return createStore(dialogReducer,state);
}
export default configureStore;
