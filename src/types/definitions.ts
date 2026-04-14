export type Task = {
  id: string;
  name: string;
  completed: boolean;
};

export type Category = "all" | "active" | "completed";
