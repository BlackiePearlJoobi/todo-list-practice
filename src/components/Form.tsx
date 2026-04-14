import React, { useState } from "react";
import styles from "./Form.module.css";

type FormProps = {
  addTask: (entry: string) => void;
};

const Form = ({ addTask }: FormProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addTask(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-task">What needs to be done?</label>
      <input
        id="new-task"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-required="true"
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
