import Button from "./Button";
import Importance from "./Importance";
import "../../css/custom.css";
import image from "../img/bin.svg";

export default function Task({ tasks, onAddTask, onDelete }) {
  function handleBackgroundColor(value) {
    let variable;
    if (value <= 3) {
      variable = "bg-green-500";
    } else if (value <= 7) {
      variable = "bg-yellow-500";
    } else {
      variable = "bg-red-500";
    }
    return variable;
  }

  const sortedTasks = [...tasks].sort((a, b) => b.importance - a.importance);

  return (
    <div>
      <h1 className="text-center mt-5 font-bold ">Task List</h1>
      <div className="mt-2 flex justify-center gap-5 ">
        <div className="bg-red-500 px-1 py-1 rounded-md font-bold text-sm">
          High
        </div>
        <div className="bg-yellow-500 px-1 py-1 rounded-md font-bold text-sm">
          Medium
        </div>

        <div className="bg-green-500 px-1 py-1 rounded-md font-bold text-sm">
          Low
        </div>
      </div>
      <ul className="">
        {sortedTasks.map((task) => (
          <li
            key={task.id}
            className={`mt-5 flex justify-between items-center gap-8 ${handleBackgroundColor(
              task.importance
            )} px-3 py-2 rounded-md min-w-96 max-w-full shadow-lg`}
          >
            <div className="font-bold">{task.title}</div>
            <div className="italic">{task.description}</div>
            <div>
              <button
                className="hover:bg-white rounded-md px-1 py-1"
                onClick={() => onDelete(task.id)}
              >
                <img src={image} className="w-6 h-6" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5 pb-5 text-center">
        <button
          className="px-4 py-2 rounded-md  bg-stone-800 hover:bg-stone-500  text-white"
          onClick={onAddTask}
        >
          Add more tasks
        </button>
      </div>
    </div>
  );
}
