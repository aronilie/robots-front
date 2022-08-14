import { createAction } from "@reduxjs/toolkit";
import Robot from "../models/Robots";
import { actionTypes } from "./actionTypes";

export const loadRobotsAction = createAction<Robot[]>(actionTypes.robotsLoad);
