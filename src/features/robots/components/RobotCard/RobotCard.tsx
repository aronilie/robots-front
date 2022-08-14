import Robot from "../../models/Robots";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: Robot;
  key: string;
}

const RobotCard = ({ robot }: RobotCardProps): JSX.Element => {
  return (
    <RobotCardStyled>
      <h1 className="glitch" data-text="GLITCH">
        {robot.name}
      </h1>

      <div className="robot-main-container">
        <img className="robot-image" src={robot.imageUrl} alt={robot.name} />
        <div className="robot-text-container">
          <span className="robot-text">Resistance: {robot.resistance}</span>
          <span className="robot-text">Speed: {robot.velocity}</span>
          <span className="robot-text">Birth date: {robot.creationDate}</span>
        </div>
      </div>
    </RobotCardStyled>
  );
};

export default RobotCard;
