import { createAction } from "@reduxjs/toolkit";
import Robot from "../models/Robots";
import { actionTypes } from "../actionTypes/actionTypes";

export const loadRobotsAction = createAction<Robot[]>(actionTypes.loadRobots);

export const createRobotAction = createAction<Robot>(actionTypes.createRobot);
