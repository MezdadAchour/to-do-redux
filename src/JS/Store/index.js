import { createStore } from "redux";
import toDoReducer from "../Reducers/toDoReducer";

const store = createStore(
  toDoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
