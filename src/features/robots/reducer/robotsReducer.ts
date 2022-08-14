import { createReducer } from "@reduxjs/toolkit";
import Robot from "../models/Robots";
import * as action from "./actionCreators";

const initialState: Robot[] = [
  {
    name: "",
    imgUrl: "",
    velocity: 0,
    resistance: 0,
    creationDate: "",
  },
];

export const robotsReducer = createReducer(initialState, (builder) => {
  builder.addCase(action.loadRobotsAction, (_state, action) => action.payload);
});
