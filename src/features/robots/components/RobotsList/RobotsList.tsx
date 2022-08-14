import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestRepository } from "../../../../app/repositories/restRepository";
import { RootState } from "../../../../app/store";
import Robot from "../../models/Robots";
import * as action from "../../actionCreators/actionCreators";

const RobotsList = (): JSX.Element => {
  const robots = useSelector((state: RootState) => state.robots);

  const dispatch = useDispatch();

  const APIUrl = process.env.REACT_APP_API_URL as string;

  const repositoryRobots = useMemo(
    () => new RestRepository<Robot>(APIUrl),
    [APIUrl]
  );

  useEffect(() => {
    repositoryRobots
      .loadRobots()
      .then((robots) => dispatch(action.loadRobotsAction(robots)));
  }, [dispatch, repositoryRobots]);
  return (
    <>
      <ul>
        {robots.map((item) => (
          <li key={item.name}>
            <h2>{item.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
