import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [
    { id: 1, text: "Learn Redux - actions & reducers 💻", complete: false },
    { id: 2, text: "Eat a snack 🍭", complete: false },
    { id: 3, text: "Do my finalproject in React 🏆", complete: false },
    { id: 4, text: "Take a break 😎", complete: false },
  ],

  reducers: {
    addTask: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        complete: false,
      });
    },
    toggleComplete: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.complete = !task.complete;
      }
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleComplete, removeTask } = tasksSlice.actions;
export const reducer = { tasks: tasksSlice.reducer };
