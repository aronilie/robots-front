import { SyntheticEvent, useMemo, useState } from "react";
import { RestRepository } from "../../../../app/repositories/restRepository";
import Robot from "../../models/Robots";
import CreateRobotStyled from "./CreateRobotStyled";

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
    <>
      <CreateRobotStyled className="form-container">
        <h2 className="form-title">Create robot</h2>
        <form
          onSubmit={createRobotFunction}
          autoComplete="off"
          className="form"
        >
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <div className="form__input">
            <input
              value={input.name}
              type="text"
              id="name"
              onChange={(event) =>
                setInput({ ...input, name: event.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="imageUrl">Image Url</label>
          </div>
          <div className="form__input">
            <input
              value={input.imageUrl}
              onChange={(event) =>
                setInput({ ...input, imageUrl: event.target.value })
              }
              type="url"
              id="imageUrl"
            />
          </div>

          <div>
            <label htmlFor="resistance">Resistance</label>
          </div>
          <div className="form__input">
            <input
              value={input.resistance}
              onChange={(event) =>
                setInput({ ...input, resistance: +event.target.value })
              }
              type="number"
              id="resistance"
            />
          </div>
          <div>
            <label htmlFor="velocity">Velocity</label>
          </div>

          <div className="form__input">
            <input
              value={input.velocity}
              onChange={(event) =>
                setInput({ ...input, velocity: +event.target.value })
              }
              type="number"
              id="velocity"
            />
          </div>

          <div>
            <label htmlFor="creationDate">Creation Date</label>
          </div>
          <div className="form__input">
            <input
              value={input.creationDate.toString()}
              onChange={(event) =>
                setInput({ ...input, creationDate: event.target.value })
              }
              type="text"
              id="creationDate"
            />
          </div>

          <button type="submit" className="form__button">
            Create
          </button>
        </form>
      </CreateRobotStyled>
    </>
  );
};

export default CreateRobot;
