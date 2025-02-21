import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../JS/Actions/actions";

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    dispatch(editTask(task.id, editedDescription));
    setIsEditing(false);
  };

  return (
    <div className="task">
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
      )}
      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
}

export default Task;
