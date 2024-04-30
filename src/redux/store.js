import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import React from "react";

const store = createStore(cakeReducer);

export default store;
