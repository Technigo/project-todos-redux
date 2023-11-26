import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import TaskList from "./components/TaskList";
import { reducer } from "./components/TaskReducer";

const store = configureStore({ reducer });

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>To Do List</h1>
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
