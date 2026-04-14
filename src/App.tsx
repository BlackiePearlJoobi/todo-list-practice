import "./App.css";
import { useState } from "react";
import type { Task, Category } from "./types/definitions";
import Filter from "./components/Filter";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import { initialData } from "./data";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(initialData);

  const addTask = (name: string): void => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      name,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string): void => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );

    setTasks(updatedTasks);
  };

  const deleteTask = (id: string): void => {
    const remianingTasks = tasks.filter((t) => t.id !== id);
    setTasks(remianingTasks);
  };

  const [category, setCategory] = useState<Category>("all");

  const filterTasks = (category: Category): Task[] => {
    return category === "all"
      ? tasks
      : category === "active"
        ? tasks.filter((task) => !task.completed)
        : tasks.filter((task) => task.completed);
  };

  const editTask = (id: string, newName: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, name: newName } : task,
    );
    setTasks(updatedTasks);
  };

  return (
    <main>
      <header>
        <h1>TodoMatic</h1>
      </header>
      <Form addTask={addTask}></Form>
      <Filter category={category} setCategory={setCategory}></Filter>
      <TaskList
        tasks={filterTasks(category)}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      ></TaskList>
    </main>
  );
};

export default App;
