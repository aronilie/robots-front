import { Provider } from "react-redux";
import RobotsList from "./RobotsList";
import { render, screen } from "@testing-library/react";
import { store } from "../../../../app/store";

describe("Given a RobotsList component", () => {
  describe("When it is instantiated", () => {
    test("Then it should show a list of robots", () => {
      render(
        <Provider store={store}>
          <RobotsList />
        </Provider>
      );

      const robots = screen.getAllByRole("list");

      robots.forEach((robot) => expect(robot).toBeInTheDocument());
    });
  });
});
