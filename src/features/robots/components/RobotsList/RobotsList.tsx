import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestRepository } from "../../../../app/repositories/restRepository";
import { RootState } from "../../../../app/store";
import Robot from "../../models/Robots";
import * as action from "../../actionCreators/actionCreators";
import RobotsListStyled from "./RobotsListStyled";
import RobotCard from "../RobotCard/RobotCard";

const RobotsList = (): JSX.Element => {
  const robots = useSelector((state: RootState) => state.robots);

  const dispatch = useDispatch();

  console.log(process.env.REACT_APP_API_URL);
  const APIUrl = process.env.REACT_APP_API_URL as string;
  console.log(process.env.REACT_APP_API_URL);

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
    <RobotsListStyled>
      {robots.map((item) => (
        <RobotCard key={item.name} robot={item} />
      ))}
    </RobotsListStyled>
  );
};

export default RobotsList;
