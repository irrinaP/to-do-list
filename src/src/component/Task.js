import React, { useState } from 'react';
import TaskView from './TaskView';

const Task = ({ task, onModalDelete, onModalShare, onModalEdit }) => {
  const [actionView, setActionView] = useState(false);

  const handleToggleView = () => {
    setActionView((prev) => !prev);
  };

  return (
    <div className="task-card">
      <div className="task-info" onClick={handleToggleView}>
        <div className="task-text">
          <h1>{task.title}</h1>
          <p>{task.text}</p>
        </div>
        <div className="task-button">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation(); // Чтобы не срабатывал `onClick` у `task-info`.
              onModalDelete(task.id);
            }}
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
      {actionView && <TaskView task={task} taskId={task.id} onModalShare={onModalShare} onModalEdit={onModalEdit} />}
    </div>
  );
};

export default Task;
