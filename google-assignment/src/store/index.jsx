import { createStore, combineReducers } from "redux";
import randomUserReducer from "./slices/RandomUser";


const reducers = combineReducers({
  randomUser: randomUserReducer,

});

const store = createStore(reducers);

export default store;