import type { Task } from "../types/definitions";
import { useState } from "react";
import styles from "./TaskItem.module.css";

type TaskProps = {
  task: Task;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newName: string) => void;
};

const TaskItem = ({ task, toggleTask, deleteTask, editTask }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    editTask(task.id, newName);
    setIsEditing(false);
  }

  return (
    <li>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className={styles.labelContainer}>
            <h3 className="sr-only">Edit task: {task.name}</h3>
            <label htmlFor={`${task.id}-edit`}>New name for {task.name}</label>
            <input
              id={`${task.id}-edit`}
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button type="submit" className={styles.saveButton}>
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.taskContainer}>
          <div className={styles.labelContainer}>
            <input
              id={task.id}
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <label htmlFor={task.id}>{task.name}</label>
          </div>

          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.editButton}
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              type="button"
              className={styles.deleteButton}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
