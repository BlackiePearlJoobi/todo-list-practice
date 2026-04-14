import type { Task } from "../types/definitions";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

type TaskListProps = {
  tasks: Task[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newName: string) => void;
};

const TaskList = ({
  tasks,
  toggleTask,
  deleteTask,
  editTask,
}: TaskListProps) => {
  return (
    <section aria-labelledby="list-heading">
      <h2 id="list-heading" aria-live="polite">
        {tasks.length} {tasks.length === 1 ? `task` : `tasks`} remaining
      </h2>
      <ul role="list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
