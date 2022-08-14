import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const RobotCard = (): JSX.Element => {
  const robots = useSelector((state: RootState) => state.robots);

  const dispatch = useDispatch();

  const APIUrl = process.env.REACT_APP_API_URL;

  return <div></div>;
};

export default RobotCard;
