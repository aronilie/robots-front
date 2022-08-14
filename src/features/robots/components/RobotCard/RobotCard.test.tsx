import { render, screen } from "@testing-library/react";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When it is instantiated", () => {
    test("Then it should show a card of a robot", () => {
      const robot = {
        _id: "",
        name: "",
        imageUrl: "",
        velocity: 0,
        resistance: 0,
        creationDate: "",
      };

      render(<RobotCard key={robot.name} robot={robot} />);

      const name = screen.getByRole("heading", { name: robot.name });
      const image = screen.getByAltText(robot.name);

      const card = [name, image];

      card.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
