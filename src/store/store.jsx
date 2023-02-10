import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./module/rootReducer";

const store = configureStore({
  reducer: { counter: counterReducer },
});

export default store;
