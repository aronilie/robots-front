import { loadRobotsAction } from "./actionCreators";

describe("Given a loadRobotsAction function", () => {
  describe("When is called", () => {
    test("Then it should return an action with type 'robots@load' and an array of robots as a payload", () => {
      const robots = [
        {
          _id: "",
          name: "",
          imgUrl: "",
          velocity: 0,
          resistance: 0,
          creationDate: "",
        },
      ];

      const expectedResult = {
        type: "robots@load",
        payload: robots,
      };

      const result = loadRobotsAction(robots);

      expect(result).toEqual(expectedResult);
    });
  });
});
