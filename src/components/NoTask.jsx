import image from "../img/task.png";
import "../../css/custom.css";
import Button from "./Button";

export default function NoTask({ onStartAddTask }) {
  return (
    <div className="pt-10 mx-auto">
      <img src={image} className="object-contain custom-image" />
      <h1 className="text-center font-bold my-4">No tasks created</h1>
      <Button onClick={onStartAddTask}>Create task</Button>
    </div>
  );
}
