import { loadRobotsAction } from "./actionCreators";
import { robotsReducer } from "./robotsReducer";

describe("Given a robotsReducer reducer", () => {
  describe("When called with a getAll robots action as an argument", () => {
    test("Then it should return an array with the tasks sent as a payload", () => {
      const robots = [
        {
          _id: "0",
          name: "",
          imgUrl: "",
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
});
