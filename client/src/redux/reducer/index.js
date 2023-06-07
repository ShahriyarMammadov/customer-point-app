import { combineReducers } from "redux";
import { getAllUserDataReducer } from "./userReducer";

export const rootReducer = combineReducers({
  getAllUserDataReducer,
});
