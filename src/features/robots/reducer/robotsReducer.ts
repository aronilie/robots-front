import { createReducer } from "@reduxjs/toolkit";
import Robot from "../models/Robots";
import * as action from "../actionCreators/actionCreators";

const initialState: Robot[] = [
  {
    _id: "",
    name: "",
    imageUrl: "",
    velocity: 0,
    resistance: 0,
    creationDate: "",
  },
];

export const robotsReducer = createReducer(initialState, (builder) => {
  builder.addCase(action.loadRobotsAction, (_state, action) => action.payload);

  builder.addCase(action.createRobotAction, (state, action) => [
    ...state,
    action.payload,
  ]);
});
