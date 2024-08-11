import React from "react";
import { Provider } from "react-redux";
import store from "./JS/Store/index";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo Application</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
