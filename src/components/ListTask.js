import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTasks } from "../JS/Actions/actions";
import Task from "./Tasks";

function ListTask() {
  const { tasks, filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    return true;
  });

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => dispatch(filterTasks("all"))}>All</button>
        <button onClick={() => dispatch(filterTasks("done"))}>Done</button>
        <button onClick={() => dispatch(filterTasks("notDone"))}>
          Not Done
        </button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ListTask;
