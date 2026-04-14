import type { Category } from "../types/definitions";
import styles from "./Filter.module.css";

type FilterProps = {
  category: Category;
  setCategory: (category: Category) => void;
};

const Filter = ({ category, setCategory }: FilterProps) => {
  return (
    <div
      role="group"
      aria-labelledby="filter-heading"
      className={styles.container}
    >
      <h2 id="filter-heading" className="sr-only">
        Filter tasks
      </h2>
      <button
        aria-pressed={category === "all"}
        onClick={() => setCategory("all")}
      >
        All
      </button>
      <button
        aria-pressed={category === "active"}
        onClick={() => setCategory("active")}
      >
        Active
      </button>
      <button
        aria-pressed={category === "completed"}
        onClick={() => setCategory("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
