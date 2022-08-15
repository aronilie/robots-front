import {
  createRobotAction,
  loadRobotsAction,
} from "../actionCreators/actionCreators";
import { robotsReducer } from "./robotsReducer";

describe("Given a robotsReducer reducer", () => {
  describe("When called with loadRobotsAction as an argument", () => {
    test("Then it should return an array with the robots sent as a payload", () => {
      const robots = [
        {
          _id: "",
          name: "",
          imageUrl: "",
          velocity: 0,
          resistance: 0,
          creationDate: "",
        },
      ];
      const action = loadRobotsAction(robots);

      const result = robotsReducer(robots, action);

      expect(result).toStrictEqual(robots);
    });
  });
  describe("When called with createRobotAction as an argument", () => {
    test("Then it should return an array with a robot more", () => {
      const robots = [
        {
          _id: "",
          name: "",
          imageUrl: "",
          velocity: 0,
          resistance: 0,
          creationDate: "",
        },
        {
          _id: "",
          name: "",
          imageUrl: "",
          velocity: 0,
          resistance: 0,
          creationDate: "",
        },
      ];
      const newRobot = {
        _id: "a9df7a9",
        name: "Terminator",
        imageUrl: "terminatorimage.jpg",
        velocity: 8,
        resistance: 7,
        creationDate: "25/03/2010",
      };

      const action = createRobotAction(newRobot);

      const result = robotsReducer(robots, action);

      expect(result).toHaveLength(3);
      expect(result.includes(newRobot)).toBe(true);
    });
  });
});
