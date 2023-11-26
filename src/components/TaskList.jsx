import { useSelector, useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import { toggleComplete, removeTask } from "./TaskReducer";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const totalTasks = tasks.length;
  const incompleteTasks = tasks.filter((task) => !task.complete).length;

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.complete ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => dispatch(toggleComplete(task.id))}>
              {task.complete ? "Undo" : "I am done"}
            </button>
            <button onClick={() => dispatch(removeTask(task.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <TaskForm />
      <div>
        <p>You have total {totalTasks} tasks on your list</p>
        <p>
          <strong>You have {incompleteTasks} tasks left to do</strong>{" "}
        </p>
      </div>
    </div>
  );
};

export default TaskList;
