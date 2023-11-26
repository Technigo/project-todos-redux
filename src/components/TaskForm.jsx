import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./TaskReducer";

const TaskForm = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      dispatch(addTask(newTask));
      setNewTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Write your task here"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskForm;
