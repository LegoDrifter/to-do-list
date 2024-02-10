import { useState } from "react";
import NewTask from "./components/NewTask.jsx";
import NoTask from "./components/NoTask.jsx";
import Task from "./components/Task.jsx";

function App() {
  const [tasksState, setTasksState] = useState({
    selectedTaskId: undefined,
    tasks: [],
  });

  const [addTaskState, setAddTaskState] = useState(false);

  function handleStartAddTask() {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: null,
      };
    });
    handleClickAddTask();
  }

  function handleClickAddTask() {
    setAddTaskState((prevValue) => !prevValue);
  }

  function handleDeleteTask(id) {
    setTasksState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
    if (tasksState.tasks.length === 1) {
      console.log("No more tasks");
      setTasksState((prevState) => {
        return {
          ...prevState,
          selectedTaskId: undefined,
        };
      });
    }
  }

  function handleAddTask(taskData) {
    setTasksState((prevState) => {
      const newTask = {
        ...taskData,
        id: Math.random(),
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
    handleClickAddTask();
  }

  let content;

  if (tasksState.selectedTaskId === null && addTaskState === true) {
    content = <NewTask onAdd={handleAddTask} onCancel={handleClickAddTask} />;
  } else if (tasksState.tasks.length === 0) {
    content = <NoTask onStartAddTask={handleStartAddTask} />;
  } else if (tasksState.tasks.length > 0 && addTaskState === false) {
    content = (
      <Task
        tasks={tasksState.tasks}
        onAddTask={handleClickAddTask}
        onDelete={handleDeleteTask}
      />
    );
  }

  return (
    <>
      <div className="min-h-screen  bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <h1 className="text-white text-center text-5xl font-bold pt-24">
          REACT TO-DO-LIST
        </h1>
        <div className="container max-w-lg max-h-full min-h-96 mx-auto mt-12 bg-gradient-to-r from-slate-500 to-yellow-100 rounded-md ">
          <div className="flex gap-8 px-14">{content}</div>
        </div>
      </div>
    </>
  );
}

export default App;
