import { SyntheticEvent, useMemo, useState } from "react";
import { RestRepository } from "../../../../app/repositories/restRepository";
import Robot from "../../models/Robots";

interface Input {
  name: string;
  imageUrl: string;
  resistance: number;
  velocity: number;

  creationDate: string;
}

const CreateRobot = (): JSX.Element => {
  const inputField = {
    name: "",
    imageUrl: "",
    resistance: 0,
    velocity: 0,
    creationDate: "",
  };

  const APIUrl = process.env.REACT_APP_API_URL! + "/create";

  const [input, setInput] = useState<Input>(inputField);

  const newRobot: Robot = {
    name: input.name,
    imageUrl: input.imageUrl,
    resistance: input.resistance,
    velocity: input.velocity,
    creationDate: input.creationDate,
  };

  const repositoryRobots = useMemo(
    () => new RestRepository<Robot>(APIUrl),
    [APIUrl]
  );

  const createRobotFunction = (event: SyntheticEvent) => {
    event.preventDefault();
    repositoryRobots.createRobot(newRobot);
  };

  return (
    <form
      onSubmit={createRobotFunction}
      autoComplete="off"
      className="create-robots"
    >
      <label htmlFor="name">Name</label>
      <input
        value={input.name}
        type="text"
        id="name"
        onChange={(event) => setInput({ ...input, name: event.target.value })}
      />

      <label htmlFor="imageUrl">Image Url</label>
      <input
        value={input.imageUrl}
        onChange={(event) =>
          setInput({ ...input, imageUrl: event.target.value })
        }
        type="url"
        id="imageUrl"
      />

      <label htmlFor="resistance">Resistance</label>
      <input
        maxLength={2}
        value={input.resistance}
        onChange={(event) =>
          setInput({ ...input, resistance: +event.target.value })
        }
        type="number"
        id="resistance"
      />

      <label htmlFor="velocity">Velocity</label>
      <input
        maxLength={2}
        value={input.velocity}
        onChange={(event) =>
          setInput({ ...input, velocity: +event.target.value })
        }
        type="number"
        id="velocity"
      />

      <label htmlFor="creationDate">Creation Date</label>
      <input
        value={input.creationDate.toString()}
        onChange={(event) =>
          setInput({ ...input, creationDate: event.target.value })
        }
        type="date"
        id="creationDate"
      />
      <button className="button" type="submit">
        Create
      </button>
    </form>
  );
};

export default CreateRobot;
